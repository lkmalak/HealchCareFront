import Login from "@/features/auth/sign-in/components/Login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});
