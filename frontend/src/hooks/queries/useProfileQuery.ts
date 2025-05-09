import { IProfile } from "@/components/modules/user/UpdateProfile";
import { getValidToken } from "@/lib/verifyToken";
import { useUserStore } from "@/stores/auth";
import { IUser } from "@/types";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const useProfileQuery = () => {
  const { user, setUser } = useUserStore();

  const options = queryOptions({
    queryKey: ["user_profile"],
    queryFn: async () => {
      const token = await getValidToken();
      if (!token) return null;

      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/profile`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user profile");

      const data = await res.json();

      //update the storage
      if ((data.data as IProfile) && user) {
        const updatedUser: IUser = {
          userId: user.userId,
          email: user.email,
          role: user.role,
          name: data.data.name,
          profilePhoto: data.data.profilePhoto,
        };
        setUser(updatedUser);
      }
      return data.data as IProfile;
    },
    enabled: !!user,
  });

  return useQuery(options);
};
