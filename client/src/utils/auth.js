export default {
  getToken() {
    return localStorage.getItem("AuthToken");
  },
  setToken(token){
    console.log(token);
    return localStorage.setItem("AuthToken",token)
  }
};
