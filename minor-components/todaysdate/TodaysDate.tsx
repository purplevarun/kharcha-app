import { Text, View } from "react-native";

const TodaysDate = () => {
	const getDate = () => {
		const fullDate = new Date().toLocaleString();
		const day = fullDate.slice(0, 10);
		const year = fullDate.slice(19, 24);
		return day + year;
	};

	return (
		<View style={{ marginTop: 10, display: "flex", flexDirection: "row" }}>
			<Text style={{ fontSize: 20 }}>Today's Date : </Text>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>{getDate()}</Text>
		</View>
	);
};

export default TodaysDate;
