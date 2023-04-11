import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';

import './AuthForm.scss';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { loginSchema } from '../../common/validations';

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('form') !== 'registration';
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values: any) => {
    console.log('onSubmit', values);
  };

  const handleRegisterClick = () => {
    setSearchParams({ form: 'registration' });
  };

  return (
    <div className={cn('login', { active: isActive })}>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={handleSubmit(onSubmit)}
      >
        <h2 className="login__title">Login</h2>
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
