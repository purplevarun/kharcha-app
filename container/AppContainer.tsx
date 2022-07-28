import Header from "../major-components/header/Header";
import Router from "../router/Router";
import Buffer from "../minor-components/buffer/Buffer";
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
