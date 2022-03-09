import Api from "./api";

const UserService = {
  register: (params) => Api.post("/users/register", params),
  login: async(params) =>{
      const response = await Api.post("/users/login",params)
      //gravar as credenciais do Token no LocalStorage do Browser
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
  },
  logout: () =>{
      localStorage.removeItem('user', null);
      localStorage.removeItem('token', null);
  }
}
export default UserService;