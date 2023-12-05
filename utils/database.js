import { neon } from "@neondatabase/serverless";

async function getData() {
  console.log(
    `process.env.NEXT_PUBLIC_DATABASE_URL: ${process.env.NEXT_PUBLIC_DATABASE_URL}`,
  );
  const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
  try {
    const response = await sql`SELECT version()`;
    return response; // Explicitly return the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for handling in PageA.js
  }
}

export default getData; // Export the function directly
