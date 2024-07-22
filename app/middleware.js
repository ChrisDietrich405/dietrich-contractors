import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(req, res) {
  console.log("hello")
  // const headersInstance = headers();
  // let authorization = headersInstance.get("authorization");
  // console.log(authorization);

  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "*",
};

