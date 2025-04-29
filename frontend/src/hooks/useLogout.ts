import { useUserStore } from "@/stores/auth";
import { logOut } from "@/services/auth/logOut";
import { toast } from "sonner";

const useLogout = () => {
  const { clearUser } = useUserStore();

  const handleLogout = async (goToast = true) => {
    try {
      await logOut();
      clearUser();
      if (goToast) {
        toast.success("Successfully logged out");
      }
    } catch (error) {
      console.error("Error during logout", error);
      if (goToast) {
        toast.error("Logout failed. Please try again.");
      }
    }
  };

  return { handleLogout };
};

export default useLogout;
