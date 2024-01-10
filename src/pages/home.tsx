import { kakaoLogin, login, register } from "../api/auth";
import kakaoLogo from "../assets/kakao_login_medium_narrow.png";

const HomePage = () => {
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await login({ email, password });

    console.log(response);
  };

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const nickname = formData.get("nickname") as string;
    const email = formData.get("id") as string;
    const password = formData.get("password") as string;
    const response = await register({ name, nickname, email, password });

    console.log(response);
  };

  const onKakaoLogin = async () => {
    const response = await kakaoLogin();

    console.log(response);
  };

  return (
    <>
      <form onSubmit={onLogin}>
        <legend>로그인</legend>
        <label>email</label>
        <input type="email" name="email" />
        <label>password</label>
        <input type="password" name="password" />
        <button type="submit">제출</button>
      </form>
      <br />
      <form onSubmit={onRegister}>
        <legend>회원가입</legend>
        <label>email</label>
        <input type="email" name="email" />
        <label>password</label>
        <input type="password" name="password" />
        <label>name</label>
        <input type="text" name="name" />
        <label>nickname</label>
        <input type="text" name="name" />
        <button type="submit">제출</button>
      </form>
      <br />
      <button onClick={onKakaoLogin}>
        <img src={kakaoLogo} />
      </button>
    </>
  );
};

export default HomePage;
