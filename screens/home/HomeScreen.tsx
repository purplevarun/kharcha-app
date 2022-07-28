import { ScrollView, Text } from "react-native";
import TodaysDate from "../../minor-components/todaysdate/TodaysDate";

const HomeScreen = () => {
	return (
		<ScrollView
			keyboardShouldPersistTaps="always"
			contentContainerStyle={{
				alignItems: "center",
				minHeight: 760,
				backgroundColor: "white",
			}}
		>
			<TodaysDate />
			<Text>HomeScreen</Text>
		</ScrollView>
	);
};
export default HomeScreen;
