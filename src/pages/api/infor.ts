import type { NextApiRequest, NextApiResponse } from "next";

let mockData = [
  { name: "ABCD1", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD3", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD4", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD5", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD6", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD7", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD8", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD9", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD10", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD11", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD12", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD13", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD14", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD15", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD2-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD3-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD4-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD5-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD6-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD7-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD8-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD9-2", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-20", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-21", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-22", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-23", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-24", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD1-25", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-31", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-32", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-33", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-34", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-35", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-36", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-37", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-38", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-39", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-310", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-311", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-312", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-313", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-314", email: "abc@gmail.com", position: "123abc, def, hcm" },
  { name: "ABCD-315", email: "abc@gmail.com", position: "123abc, def, hcm" },
];

export default async (req: NextApiRequest, res: NextApiResponse<any> & any) => {
  const {
    body,
    query: { page, size },
  } = req;
  if (req.method === "POST") {
    mockData = [body, ...mockData];
    res.send({ success: true });
  } else {
    const result = mockData.slice(+page * +size, (+page + 1) * +size);
    res.send({ info: result, total: mockData.length });
  }
};
