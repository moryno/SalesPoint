import React, { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import {
  authorizedStructure,
  unAuthorizedStructure,
  anonymousStructure,
  alwaysStructure,
} from "_core/AppRoutes";
import { generateRoutes } from "_helpers/routeHelper";
import { useAuthUser } from "_hooks";
import { AppAnimatePage, AppSuspense } from "_lib";

const AppLayout = () => {
  const { isAuthenticated, user } = useAuthUser();
  const generatedRoutes = useMemo(() => {
    return generateRoutes({
      isAuthenticated,
      authorizedStructure,
      unAuthorizedStructure,
      anonymousStructure,
      alwaysStructure,
    }).map((route) => ({
      ...route,
      element: (
        <AppAnimatePage
          path={route.path}
          noAnimation={route.path.includes("*")}
        >
          {route.element}
        </AppAnimatePage>
      ),
    }));
  }, [isAuthenticated]);

  const routes = useRoutes(generatedRoutes);

  return <AppSuspense>{routes}</AppSuspense>;
};

export default AppLayout;
