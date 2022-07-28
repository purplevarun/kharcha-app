import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import TripScreen from "../screens/trip/TripScreen";

const Router = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
				animation: "slide_from_left",
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="TripScreen" component={TripScreen} />
		</Stack.Navigator>
	);
};
export default Router;
