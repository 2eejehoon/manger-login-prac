import Axios from "../api/axios";
import kakaoLogo from "../assets/kakao_login_medium_narrow.png";

const HomePage = () => {
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const authorization = email + ":" + password;
    const response = await Axios.post(
      `/auth/login/email`,
      {},
      {
        headers: {
          Authorization: `Basic ${btoa(authorization)}`,
        },
      }
    );

    console.log(response);
  };

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("id");
    const password = formData.get("password");
    const name = formData.get("name");
    const nickname = formData.get("nickname");
    const authorization = email + ":" + password;
    const response = await Axios.post(
      `/auth/register/email`,
      { email, password, name, nickname },
      {
        headers: {
          Authorization: `Bearer Basic ${btoa(authorization)}`,
        },
      }
    );

    console.log(response);
  };

  const onKakaoLogin = async () => {
    // @ts-ignore
    const {} = Kakao.Auth.authorize({
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

  return (
    <>
      <form onSubmit={onLogin}>
        <legend>로그인</legend>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={"tester1@naver.com"}
          onChange={() => {}}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={"tester1"}
          onChange={() => {}}
        />
        <button type="submit">제출</button>
      </form>
      <br />
      <form onSubmit={onRegister}>
        <legend>회원가입</legend>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={"tester1@naver.com"}
          onChange={() => {}}
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={"tester1"}
          onChange={() => {}}
        />
        <label>name</label>
        <input type="text" name="name" value={"이제훈"} onChange={() => {}} />
        <label>nickname</label>
        <input
          type="text"
          name="name"
          value={"순돌이주인"}
          onChange={() => {}}
        />
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
