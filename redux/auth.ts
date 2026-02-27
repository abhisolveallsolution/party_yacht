import axios from "axios";
import api from "./get_api";

export default async function auth() {
  try {
    const response = await api.post(`/users`);
    return response.data;
  } catch (error: any) {
    return error.message || "No response from server";
  }
}
