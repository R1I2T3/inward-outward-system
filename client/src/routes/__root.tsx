import {
  createRootRoute,
  Outlet,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { userAtom } from "@/lib/atoms";
import { useSetAtom } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
export const Route = createRootRoute({
  loader: async () => {
    const res = await fetch("/api/authenticate");
    const data = await res.json();
    return data;
  },
  component: function Component() {
    const data = useLoaderData({ from: "__root__" });
    console.log(data.error);
    const setAtom = useSetAtom(userAtom);
    const navigate = useNavigate();
    useEffect(() => {
      if (data.error && data.error === "user is not authenticated") {
        navigate({
          to: "/login",
        });
      } else {
        setAtom(data);
      }
    }, [data]);

    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
        <Toaster />
      </>
    );
  },
});
