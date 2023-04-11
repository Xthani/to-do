import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import cn from 'classnames';

import './AuthForm.scss';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../common/validations';

function Registration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('form') === 'registration';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onFinish = (values: any) => {
    console.log('onFinish', values);
  };

  const handleLoginClick = () => {
    setSearchParams({ form: 'login' });
  };

  return (
    <div className={cn('registration', { active: isActive })}>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={handleSubmit(onFinish)}
      >
        <h2 className="registration__title">Registration</h2>
        <Form.Item
          name="username"
          validateStatus={errors.username ? 'error' : ''}
          help={<>{errors.username?.message}</>}
        >
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <Input
                {...field}
                suffix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            )}
          />
        </Form.Item>
        <Form.Item
          name="email"
          validateStatus={errors.email ? 'error' : ''}
          help={<>{errors.email?.message}</>}
        >
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                suffix={<MailOutlined className="site-form-item-icon" />}
                placeholder="email"
              />
            )}
          />
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={errors.password ? 'error' : ''}
          help={<>{errors.password?.message}</>}
        >
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                suffix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            )}
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
