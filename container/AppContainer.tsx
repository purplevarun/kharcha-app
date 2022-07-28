import { Text } from "react-native";
import Buffer from "../components/buffer/Buffer";
import Header from "../components/header/Header";
import Router from "../router/Router";

const AppContainer = () => {
	return (
		<>
			<Buffer />
			<Header />
			<Router />
		</>
	);
};
export default AppContainer;
