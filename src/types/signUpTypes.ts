export interface RegisterUserResponseType {
  username: string;
  email: string;
  id: number;
}

export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserErrors {
  username?: string[];
  email?: string[];
  password?: string[];
  global?: string[];
}

export interface FormDataType extends RegisterUserType {
  confirmPassword: string;
}

export interface RegistrationErrorType {
  username?: string;
  email?: string;
  password?: string;
}
