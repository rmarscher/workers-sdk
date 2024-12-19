// TODO create a server component
// that reads env.TEST from the hono context / cloudflare env
// and outputs it as a json response.

// Below is the remix fixture...
//
// It would be a bit more idiomatic to use a RSC *.txt
// route for waku and verify data in the flight response
// instead of returning json.
//
// Waku doesn't really have an official solution for api routes yet, but it is
// very flexible to adjust responses from middleware before passing off to
// server components. It is also technically possible (though not officially
// recommended) to alter the response object in a server component and return a
// null value from the server components.

// import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

// export async function loader({ context }: LoaderFunctionArgs) {
// 	const { env } = context.cloudflare;

// 	const { TEST } = env;

// 	return new Response(
// 		JSON.stringify({
// 			success: true,
// 			test: TEST,
// 		}),
// 		{
// 			status: 200,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		},
// 	);
// }
