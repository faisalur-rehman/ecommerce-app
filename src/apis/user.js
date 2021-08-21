import { api } from "./api";

export function getUserProfile() {
  return api.get("/user/profile");
}

export function updateProProfile(user) {
  return api.patch("/user/update-profile", { ...user });
}
