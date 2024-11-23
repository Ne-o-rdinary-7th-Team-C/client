import { queryOptions } from "@tanstack/react-query";

export const getMinimumAppVersionQueryOptions = () => {
  return queryOptions({
    queryKey: ["app-version"],
    queryFn: async () => {
      return "1.1.0";
    },
  });
};
