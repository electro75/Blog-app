import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

    renderField(field) {
        // destucturing, pulling off properties off of nested objects
        const { meta: { touched, error } } = field; 

        const dangerClass = `form-group ${touched && error? `has-danger`: ``}`;

        return (
            <div className= {dangerClass} >
                <label> { field.label } </label>
                <input
                type="text"
                { ...field.input }
                className="form-control"/>
                <div className = "text-help">
                { touched? error: '' }
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    component={ this.renderField }
                    label="Title"
                />
                <Field 
                    name="categories"
                    component={ this.renderField }
                    label="Tags"
                />
                <Field
                    name="content"
                    component = { this.renderField }
                    label="Post Content"
                />
                <button className="btn btn-primary" type="submit" >Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}
    if(!values.title) {
        errors.title = 'Please enter a title';
    }
    if(!values.categories) {
        errors.categories = 'Please enter some categories';
    }
    if(!values.content) {
        errors.content = 'Fill in the content';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);