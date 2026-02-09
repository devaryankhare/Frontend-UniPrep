import { apiFetch } from "./api";
export const getMe = () => apiFetch("/auth/me");