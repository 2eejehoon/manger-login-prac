import Axios from "./axios";

export const login = async ({ email, password }: { email: string; password: string }) => {
  const auth = btoa(`${email}:${password}`);
  try {
    const response = await Axios.post(
      `/auth/login/email`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const register = async ({ name, nickname, email, password }: { name: string; nickname: string; email: string; password: string }) => {
  const auth = btoa(`${email}:${password}`);
  try {
    const response = await Axios.post(
      `/auth/login/email`,
      {
        name,
        nickname,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const kakaoLogin = async () => {
  window.Kakao.init(import.meta.env.KAKAO_JAVASCRIPT_KEY);
  window.Kakao.Auth.authorize({
    redirectUri: "http://localhost:5173",
  });
  const kakaoAccessToken = "";
  const response = await Axios.post(
    `/auth/kakao/login/js`,
    {},
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`,
      },
    }
  );

  console.log(response);
};
