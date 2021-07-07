import { useEffect, useState } from "react";

//* Hook
export const useGetInfo = (): any => {
  const [info, setInfo] = useState({});
  const getInfoData = async (page?: number | any, size?: number) => {
    const result = await fetch(
      `/api/infor?page=${page || 0}&size=${size || 5}`
    );
    const data = await result.json();
    setInfo(data);
  };

  useEffect(() => {
    getInfoData();
  }, []);

  return [info, getInfoData];
};

export const updateInfoData = async (body: any): Promise<any> => {
  const result = await fetch("/api/infor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await result.json();
  return data;
};
