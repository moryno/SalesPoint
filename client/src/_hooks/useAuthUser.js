export const useAuthUser = () => {
  const user = null;
  return {
    isAuthenticated: !!user,
    user,
  };
};
