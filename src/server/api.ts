export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://expo-api-routes-vercel.vercel.app"
    : "http://localhost:8081";
