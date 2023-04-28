export type TLoginForm = {
  email: string;
  password: string;
};

export type TRegistration = TLoginForm & {
  username: string;
};

export enum EAuthForm {
  RAGISTRATION = 'registration',
  LOGIN = 'login',
}
