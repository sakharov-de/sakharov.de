import "./index.css";
import { Routing } from "./presentation/pages";
import { Domain } from "./domain";

const domain = new Domain();
export const spCalculatorApp = { Routing, domain };
