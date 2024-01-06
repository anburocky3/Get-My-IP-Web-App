const API_ENDPOINT = "https://ipv4.icanhazip.com";

export default async (request, context) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.text();
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Failed fetching data" }, { status: 500 });
  }
};
