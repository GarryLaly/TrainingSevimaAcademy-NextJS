import Head from 'next/head'
import { Button } from 'react-bootstrap';

const Login = () => (
  <div className="container">
    <Head>
      <title>Login Account</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="/bootstrap.min.css"
      />
    </Head>

    <main>
      <h1 className="title">
        Login Page
      </h1>
      <Button varian="success">Sign In</Button>
    </main>
  </div>
)

export default Login
