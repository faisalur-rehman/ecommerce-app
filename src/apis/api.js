import axios from "axios";

const DEV_URL = "http://localhost:8000";
// const PROD_URL = "https://shoe-e-store-restapi.herokuapp.com/";

const api = axios.create({
  baseURL: DEV_URL,
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function signupUser(data) {
  return api.post(`/user/client-register`, { ...data });
}

export function getProfile() {
  return api.get(`/user/profile`, config);
}
export function updateProfile(data) {
  return api.patch(`/user/update-profile`, { ...data }, config);
}

export function getStores() {
  return api.get(`/store/get-all`, config);
}
export function getArticles(data) {
  return api.post(`/store/get-articles`, { ...data }, config);
}
export function getSingleArticle(data) {
  return api.post(`/article/get-single`, { ...data }, config);
}
export function forgotPassword(data) {
  return api.patch(`/user/forget-password`, { ...data }, config);
}
export function getRaffle() {
  return api.get(`/article/get-raffle`, config);
}
export function getSingleStore(data) {
  return api.post(`/store/get-single`, { ...data }, config);
}
export function addOrderHistory(data) {
  return api.post(`/orderhistory/add`, { ...data }, config);
}
export function getUserProfile() {
  return api.get("/user/profile", config);
}
export function updateProProfile(user) {
  return api.patch("/user/update-profile", { ...user }, config);
}
export function getOrderHistory() {
  return api.get("/orderhistory/get-for-specific-client", config);
}
