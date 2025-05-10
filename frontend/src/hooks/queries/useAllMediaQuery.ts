import { queryOptions, useQuery } from "@tanstack/react-query";

interface IUseMediaQueryOptions {
  page?: number;
  limit?: number;
  genre?: string;
  rating?: string;
  platform?: string;
  sort?: string;
  searchTerm?: string;
}

// Generic media fetch hook
export const useAllMediaQuery = ({
  page = 1,
  limit = 10,
  genre = "",
  rating = "",
  platform = "",
  sort = "createdAt",
  searchTerm = "",
}: IUseMediaQueryOptions = {}) => {
  const options = queryOptions({
    queryKey: ["medias", page, limit], // Use different queryKey for single and all media
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/media/public?page=${page}&limit=${limit}&genre=${genre}&rating=${rating}&streamingPlatform=${platform}&sort=${sort}&searchTerm=${searchTerm}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch media");

      const data = await res.json();

      if (!data.data) throw new Error("Failed to fetch media");
      return data;
    },
    enabled: true,
  });

  return useQuery(options);
};
