import { useContext } from "react";
import { ApplicationContext } from "../..";

export const useApplication = () => useContext(ApplicationContext);
