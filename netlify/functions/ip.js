export default async (req, context) => {
  const ipDataReq = await fetch("/ip");
  const ipAddress = await ipDataReq.text();
  console.log(ipAddress);

  return Response.json({
    message: ipAddress,
  });
};
