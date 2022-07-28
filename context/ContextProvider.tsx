import { ReactNode } from "react";
import Context from "./Context";
import Data from "./Data";

interface Props {
	children: ReactNode;
}

const ContextProvider = (props: Props) => {
	const data = Data();
	return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
