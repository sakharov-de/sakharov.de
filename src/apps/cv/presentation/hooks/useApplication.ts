import { useContext } from "react";
import { ApplicationContext } from "../../index";

export const useApplication = () => useContext(ApplicationContext);
