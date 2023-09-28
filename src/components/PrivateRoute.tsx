import { Navigate, RouteProps, Route } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute({ element }: RouteProps) {
  const { user } = useAuthContext();
  if (user) return element;
  return <Navigate to="/signin" />;
}