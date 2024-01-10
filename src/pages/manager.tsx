const ManagerPage = () => {
  return (
    <form onSubmit={() => console.log()}>
      <legend>로그인</legend>
      <label>email</label>
      <input type="email" name="email" value={"tester2@naver.com"} onChange={() => {}} />
      <label>password</label>
      <input type="password" name="password" value={"tester2"} onChange={() => {}} />
      <button type="submit">제출</button>
    </form>
  );
};

export default ManagerPage;
