import { ReactNode } from "react";
import Context from "./Context";

interface Props {
	children: ReactNode;
}

const ContextProvider = (props: Props) => {
	const data = {};
	return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
