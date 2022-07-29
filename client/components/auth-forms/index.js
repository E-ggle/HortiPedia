import React, { useState } from 'react'
import Head from 'next/head'

import LoginForm from './login-form'
import SignUpForm from './signup-form'

import styles from './auth-forms.module.css'

const AuthForms = ({ screen = 'signup' }) => {
  const [form, setForm] = useState(screen)

  return (
    <div className={styles.authModal}>
      <Head>
        <title>{form == 'login' ? 'Log In' : 'Sign Up'} - HortiPedia</title>
      </Head>

      <img
        src="https://img.freepik.com/premium-vector/eco-green-leaf-icon-bio-nature-green-eco-symbol-web-business-simple-flat-illustration_599062-3487.jpg?w=30"
        id="horti_logo"
      />

      {form === 'login' ? <LoginForm /> : <SignUpForm />}

      {form === 'login' ? (
        <p className={styles.authSwichMessage}>
          Don’t have an account?{' '}
          <a onClick={() => setForm('signup')}>Sign up</a>
        </p>
      ) : (
        <p className={styles.authSwichMessage}>
          Already have an account?{' '}
          <a onClick={() => setForm('login')}>Log in</a>
        </p>
      )}
    </div>
  )
}

export default AuthForms
