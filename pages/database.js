import { neon } from "@neondatabase/serverless";

async function getData() {
  console.log(
    `process.env.NEXT_PUBLIC_DATABASE_URL: ${process.env.NEXT_PUBLIC_DATABASE_URL}`,
  );
  const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}
export default async function Page() {
  const data = await getData();
  console.log(`data: ${data}`);
}
