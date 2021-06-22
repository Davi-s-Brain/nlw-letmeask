import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const valeu = useContext(AuthContext)

  return valeu;
}