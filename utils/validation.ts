export interface ValidationErrors {
  email?: string;
  login?: string;
  password?: string;
  repeatPassword?: string;
}

export function validateEmail(email: string, errors: ValidationErrors): void {
  if (!email) {
    errors.email = 'Это поле обязательно для заполнения';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase())) {
    errors.email = 'Введите корректный адрес электронной почты';
  } else {
    delete errors.email;
  }
}

export function validateLogin(login: string, errors: ValidationErrors): void {
  if (!login) {
    errors.login = 'Это поле обязательно для заполнения';
  } else {
    delete errors.login;
  }
}

export function validateOtpInput(otp: string, errors: ValidationErrors): void {
  if (!otp) {
    errors.otp = 'Это поле обязательно для заполнения';
  } else {
    delete errors.otp;
  }
}



export function validatePassword(password: string, errors: ValidationErrors): void {
  if (!password) {
    errors.password = 'Это поле обязательно для заполнения';
  } else if (password.length < 6) {
    errors.password = 'Пароль должен содержать минимум 6 символов';
  } else {
    delete errors.password;
  }
}

export function validateRepeatPassword(password: string, repeatPassword: string, errors: ValidationErrors): void {
  if (!repeatPassword) {
    errors.repeatPassword = 'Это поле обязательно для заполнения';
  } else if (password !== repeatPassword) {
    errors.repeatPassword = 'Пароли не совпадают';
  } else {
    delete errors.repeatPassword;
  }
}
