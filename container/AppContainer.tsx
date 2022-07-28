import { Text } from "react-native";
import Buffer from "../components/buffer/Buffer";
import Header from "../components/header/Header";

const AppContainer = () => {
	return (
		<>
			<Buffer />
			<Header />
			<Text>Hello World</Text>
		</>
	);
};
export default AppContainer;
