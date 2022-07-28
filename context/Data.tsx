import { useState } from "react";

const Data = () => {
	const [title, setTitle] = useState("Home");
	return { title, setTitle };
};
export default Data;
