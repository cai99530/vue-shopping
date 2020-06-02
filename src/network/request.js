import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "后端路由",
    timeout: 2000
  });
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => {
      // console.log(err);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res.data);

      return res.data;
    },
    err => {
      // console.log(err);
    }
  );
  return instance(config);
}
