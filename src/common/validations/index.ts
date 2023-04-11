import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Введите email').label('Email'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
});

export const registerSchema = loginSchema.shape({
  username: yup
    .string()
    .required('Введите имя пользователя')
    .min(3, 'Имя пользователя должно содержать не менее 3 символов'),
});
