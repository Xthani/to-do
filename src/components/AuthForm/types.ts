export type TLoginForm = {
  email: string;
  password: string;
};

export type TRegistration = TLoginForm & {
  username: string;
};
