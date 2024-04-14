import { useSelector } from "react-redux";

export const useAuthUser = () => {
  const user = useSelector((store) => store.user?.currentUser);

  return {
    isAuthenticated: !!user,
    user,
  };
};
