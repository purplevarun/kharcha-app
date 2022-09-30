import Header from "../major-components/header/Header";
import Router from "../router/Router";
import Buffer from "../minor-components/buffer/Buffer";
import { StatusBar } from "expo-status-bar";
import { appBackgroundColor } from "../theme";
const AppContainer = () => {
	return (
		<>
			<StatusBar backgroundColor={appBackgroundColor} />
			<Buffer />
			<Header />
			<Router />
		</>
	);
};
export default AppContainer;
