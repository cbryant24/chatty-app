import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form'
import { renderInput } from '../helpers';
import { signin } from '../actions';

class Signin extends Component {

    handle_signin(vals) {
        console.log('Sign In vals:', vals);

        this.props.signin(vals);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit( (vals) => this.handle_signin(vals))}>
                <Field name='email' label='Email' type='email'component={renderInput}/>
                <Field name='password' label='Passwrod' type='password'component={renderInput}/>
                <button className='btn btn-large'>Signin</button>
                
            </form>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

// const Signin = 

export default connect(null, { signin })(Signin)
