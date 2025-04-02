import { ExpoResponse, ExpoRequest } from "expo-router/server";

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  console.log("@POST requested.");
  try {
    const { email, password } = await request.json();
    console.log("@POST user", email, password);

    if (email === "test@mail.com" && password === "123123") {
      console.log("@POST user is found or password not match");
      return ExpoResponse.json({
        success: true,
        token: "t_123123",
        name: "Tester User",
      });
    }

    console.log("@POST user not found");

    return ExpoResponse.json(
      {
        success: false,
        message: "User is not found",
      },
      { status: 401 }
    );
  } catch (error) {
    return ExpoResponse.json(
      {
        success: false,
        message: "Provide a valid email and password",
      },
      { status: 401 }
    );
  }
}

export async function GET() {
  console.log("@GET requested.");
  return ExpoResponse.json({
    name: "Tester User",
    email: "test@mail.com",
  });
}
