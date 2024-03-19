import { useMutation } from "@tanstack/react-query";
import { request } from './../../../../config/request';


export const useLogin = () => {
  return useMutation({
    mutationKey:["login"],
    mutationFn: (data)=> request.post("/login", data).then((res) => {
        return res.data
    }),
  });
}