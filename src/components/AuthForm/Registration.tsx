import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import cn from 'classnames';

import './AuthForm.scss';
import { useSearchParams } from 'react-router-dom';

function Registration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('form') === 'registration';

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const handleLoginClick = () => {
    setSearchParams({ form: 'login' });
  };

  return (
    <div className={cn('registration', { active: isActive })}>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <h2 className="registration__title">Registration</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            suffix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
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
            className="registration-form-button registration__button"
          >
            Log in
          </Button>
        </Form.Item>
        <p className="registration__register">
          Already have an account?{' '}
          <b onClick={handleLoginClick} className="registration__register_text">
            Login
          </b>
        </p>
      </Form>
    </div>
  );
}

export default Registration;
