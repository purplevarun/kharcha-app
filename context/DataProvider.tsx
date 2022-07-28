import { useContext } from "react";
import Context from "./Context";

const useData = () => {
	const data = useContext(Context);
	return { ...data };
};
export default useData;
