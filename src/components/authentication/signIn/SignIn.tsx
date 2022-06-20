import { useSelect } from '@mui/base';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SignIn.css'


let SignIn = () => {

    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым ')
    const [passwordError, setPasswordError] = useState('Password не может быть пустым ')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Password должен быть длиннее 3-х цифр и меньше 8-ми ')
            if (!e.target.value) {
                setPasswordError('Password не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className='SignIn__container'>
            <div className='SignIn__subtitle'>
                <NavLink to='/'>Back to home </NavLink>
            </div>
            <div className='SignIn__title'>
                <span>Sign In</span>
            </div>
            <div className='SignIn'>
                <div className='SignIn__text'>
                    <span className='SignIn__Email'>Email</span>
                    {(emailDirty && emailError) && <div className='emailError'>{emailError}</div>}
                    <input onChange={(e) => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email...' />
                </div>
                <div className='SignIn__text'>
                    <span className='SignIn__Password'>Password</span>
                    {(passwordDirty && passwordError) && <div className='passwordError'>{passwordError}</div>}
                    <input onChange={(e) => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Enter your password... ' />
                    <span className='SignIn__forgot'>Forgot your password ?</span>
                </div>
                <div className='SignIn__button'>
                    <button disabled={!formValid}>SIGN IN</button>
                    <span>You have an account ?<NavLink to=''>Sign Up</NavLink></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;