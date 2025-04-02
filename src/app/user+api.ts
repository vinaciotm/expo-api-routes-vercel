import { ExpoResponse, ExpoRequest } from "expo-router/server";

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const { email, password } = await request.json();
  console.log("@POST user", email, password);

  if (email === "test@mail.com" && password === "123123") {
    console.log("@POST user is found");
    return ExpoResponse.json({
      success: true,
      token: "t_123123",
      name: "Teste User",
    });
  }

  console.log("@POST user not found");

  return ExpoResponse.json(
    {
      success: false,
      message: "Usuário não encontrado",
    },
    { status: 401 }
  );
}

export async function GET() {
  return ExpoResponse.json({
    name: "Teste User",
    email: "test@mail.com",
  });
}
