import React from 'react'
import { Form, Input, Card, Spin } from 'antd'
import { SiWolframlanguage } from 'react-icons/si'
import { BiLoaderAlt } from 'react-icons/bi'
import Link from 'next/link'

const register = () => {
  const [loading, setLoading] = React.useState(false)
  const onFinish = (values) => {
    console.log('Success:', values)
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
          <h3 className="text-center">Register</h3>
          <SiWolframlanguage className="hardhatIcon m-1" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Form onFinish={onFinish} className="w-100">
            <div className="form-group mb-3">
              <label htmlFor="name">
                name <span className="text-danger">*</span>
              </label>
              <Form.Item name="name">
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </Form.Item>
            </div>
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
            <div className="form-group mb-3">
              <label htmlFor="password">
                {' '}
                Confirm password <span className="text-danger">*</span>
              </label>
              <Form.Item name="confirmPassword">
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
                  Register
                </button>
              )}
            </div>
          </Form>
          <p className="fw-bold mt-4">
            Already have an account? &nbsp;
            <Link className="text-primary text-decoration-none" href="/login">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default register
