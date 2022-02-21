export const emailCheckReg = (email) => {
  // 검증에 사용할 정규식 변수 regExp에 저장
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (email.match(regExp) != null) return true;
  else {
    return false;
  }
};
