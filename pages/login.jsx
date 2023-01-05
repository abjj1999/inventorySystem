import React, { useContext } from 'react'
import { SiWolframlanguage } from 'react-icons/si'
import { Card, Form, Input, message, Spin } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { UserContext } from '../context'




const Login = () => {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
  const {data: session, status} = useSession()
  const [state, setState] = useContext(UserContext)
  
  const onFinish = async (values) => {
    try {
      setLoading(true)
      // const data = await axios.post('/api/auth/login', values)
      const res = await signIn("credentials", {
        email: values.email, 
        password: values.password,
        redirect: false,
      })
      console.log(res)
      console.log(session)
      
        const user = await axios.post(`/api/user`, {email: session.user.email})
        // console.log("suer data in protected", user.data)
        setState({user: user.data})
      
      setLoading(false)
      if(res.error){
        message.error(res.error)
      }else {
        message.success('Login successful')
        router.push('/dashboard/main')
      }
      // setState({ user: data.data.data, token: data.data.token })
      
      // values = {}
      // router.push('/user/dashboard')
      // router.push('/dashboard/main')
    } catch (error) {
      message.error(error.message)
    }
  }
  return (
    <div
      style={{ height: '100vh', backgroundColor: '#f0ecf3' }}
      className="row p-4 w-100  d-flex justify-content-around align-items-center "
    >
      <div className="col-lg-4 lh-base col-md-8 col-sm-10 t d-flex flex-column justify-content-around  ">
        <div className=" placeholder-glow d-flex p-3 justify-content-center align-items-center"></div>
        <h1>Welcome to INVI </h1>
        <p className="text-muted ">#1 app to manage your inventory!</p>
      </div>
      <Card
        style={{ width: 400, backgroundColor: 'white' }}
        className="m-2 col-lg-6 col-md-8 col-sm-10"
      >
        <div className=" d-flex  align-items-center justify-content-center mb-2 ">
          <h3 className="text-center">Login</h3>
          <SiWolframlanguage className="hardhatIcon m-1" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Form onFinish={onFinish} className="w-100">
            <div className="form-group mb-3">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <Form.Item name="email">
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
              <Form.Item name="password">
                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>

            <div className="form-group  d-flex justify-content-start align-items-center ">
              {loading ? (
                <Spin className="fs-1" />
              ) : (
                <button type="submit" className="btn btn-primary ">
                  Login
                </button>
              )}
            </div>
          </Form>
          <p className="fw-bold mt-4">
            Don't have an account?{' '}
            <Link className="text-primary text-decoration-none" href="/register">
              Register
            </Link>
          </p>
        </div>
      </Card>
      
    </div>
  )
}

export default Login