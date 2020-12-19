export function checkJwt() {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
