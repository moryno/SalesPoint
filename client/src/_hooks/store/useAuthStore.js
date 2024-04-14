import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "_redux/slices/userSlice";
import { authService } from "_services";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useCallback(
    async (user) => {
      dispatch(loginStart());
      try {
        const { data } = await authService.login(user);
        dispatch(loginSuccess(data));
        navigate("/");
      } catch (error) {
        dispatch(loginFailure());
      }
    },
    [dispatch, navigate]
  );

  const logOut = useCallback(async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, navigate]);

  return { login, logOut };
};
