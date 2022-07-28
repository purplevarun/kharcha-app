import { Text, View } from "react-native";
import Buffer from "./components/buffer/Buffer";
const App = () => {
	return (
		<View style={{ height: "100%", alignItems: "center" }}>
			<Buffer />
			<Text>Hello World</Text>
		</View>
	);
};
export default App;
