import { useContext } from "react";
import { UseCasesContext } from "../../index";

export const useUseCases = () => useContext(UseCasesContext);
