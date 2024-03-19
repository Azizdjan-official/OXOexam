import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";





export const useGetAllData = (searchTerm = '', page = 1) => {
  return useInfiniteQuery({
    queryKey:["alldata", searchTerm, page],
    initialPageParam:1,
    queryFn:({ pageParam })=> 
      {
      const params = { _page: page, _limit: 4 };
      if (searchTerm) {
        params.q = searchTerm; 
      }
      return request.get("/all", { params }).then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages, params) => {
      return lastPage;
    }
  })
}