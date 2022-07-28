import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./container/AppContainer";
import ContextProvider from "./context/ContextProvider";
const App = () => {
	return (
		<ContextProvider>
			<NavigationContainer>
				<AppContainer />
			</NavigationContainer>
		</ContextProvider>
	);
};
export default App;
