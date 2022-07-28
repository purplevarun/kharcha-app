import { createContext } from "react";
import Data from "./Data";

const Context = createContext({} as ReturnType<typeof Data>);

export default Context;
