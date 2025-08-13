import NavigatorMenu from "@/Pages/LangingPages/Components/Navigator";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavigatorMenu />
      <Outlet />

      <TanStackRouterDevtools />
    </>
  ),
});
