import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/userSlice";
import userService from "@/services/user/user.services";
import { cookieStorage } from "@/lib/cookie";
import { useToast } from "@/hooks/use-toast";
import { HttpStatusCode } from "axios";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const userId = cookieStorage.getItem("p_id");

      if (userId) {
        try {
          const response = await userService.myDetails();
          if (response && response.status === HttpStatusCode.Ok) {
            dispatch(
              setUser({
                name: response.data.user.name,
                countryCode: response.data.user.countryCode,
                phoneNumber: response.data.user.phoneNumber,
              })
            );
          }
        } catch (error) {
          console.error("Failed to fetch user details:", error);
          toast({ title: "Session Expired", description: "Please log in again", variant: "destructive" });
          cookieStorage.clear();
        }
      }
    };

    checkAuth();
  }, [dispatch, toast]);
};
