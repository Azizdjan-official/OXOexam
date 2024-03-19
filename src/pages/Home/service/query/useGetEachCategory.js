import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetEachCategory = (datakey) => {
  return useQuery({
    queryKey:["eachcategory", datakey],
    queryFn:() => request.get(`/${datakey}`).then((res) => res.data)
  })
}