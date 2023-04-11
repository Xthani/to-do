import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';

import './AuthForm.scss';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('form') !== 'registration';

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const handleRegisterClick = () => {
    setSearchParams({ form: 'registration' });
  };

  return (
    <div className={cn('login', { active: isActive })}>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <h2 className="login__title">Login</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            suffix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            suffix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button login__button"
          >
            Log in
          </Button>
        </Form.Item>
        <Typography.Text className="login__register">
          Don&rsquo;t have an account?{' '}
          <b onClick={handleRegisterClick} className="login__register_text">
            Register
          </b>
        </Typography.Text>
      </Form>
    </div>
  );
}

export default Login;
