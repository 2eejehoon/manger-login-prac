// 회원가입
export type RegisterWithEmailRequestDto = {
  nickname: string;
  email: string;
  password: string;
  name: string;
};

export type RegisterWithEmailResponseDto = {
  nickname: string;
  email: string;
  password: string;
  name: string;
};

// 로그인
export type LoginWithEmailRequestDto = {};

export type LoginWithEmailResponseDto = {
  nickname: string;
  email: string;
  password: string;
  name: string;
};
