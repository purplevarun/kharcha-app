import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
	name: string;
	created: string;
}

const Trip = (props: Props) => {
	const navigation = useNavigation();

	const getName = (tripName: string) => {
		if (tripName.length <= 10) {
			return tripName;
		} else {
			return tripName.slice(0, 8) + "...";
		}
	};

	const handlePress = () => {
		navigation.navigate(
			"TripScreen" as never,
			{
				tripName: props.name,
				tripCreated: props.created,
			} as never
		);
	};
	return (
		<TouchableOpacity
			style={{
				width: 300,
				height: 60,
				backgroundColor: "#98AFC7",
				marginTop: 20,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 20,
			}}
			onPress={handlePress}
		>
			<Text style={{ fontSize: 22, maxWidth: 150 }}>{props.name}</Text>
			<Text style={{ fontSize: 10, maxWidth: 100 }}>{props.created}</Text>
		</TouchableOpacity>
	);
};
export default Trip;
