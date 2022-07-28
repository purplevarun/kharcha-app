import { useState } from "react";
import { ScrollView, Text } from "react-native";
import getItem from "../../helpers/getItem";
import saveItem from "../../helpers/saveItem";
import AllTrips from "../../major-components/alltrips/AllTrips";
import AddButton from "../../minor-components/addbtn/AddButton";
import Input from "../../minor-components/input/Input";
import TodaysDate from "../../minor-components/todaysdate/TodaysDate";

const HomeScreen = () => {
	const [input, setInput] = useState(false);
	const handlePress = () => {
		setInput((input) => !input);
	};
	const [text, setText] = useState("");
	const handleSubmit = async () => {
		const newTrip = {
			name: text,
			created: new Date().toLocaleString(),
		};
		await saveItem("trips", newTrip);
		setText("");
		setInput(false);
		console.log("trips = ", await getItem("trips"));
	};
	const inputProps = { text, setText, handleSubmit };
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
			{input ? (
				<Input {...inputProps} />
			) : (
				<AddButton btnText="Add Trip" onPress={handlePress} disabled={false} />
			)}

			<AllTrips />
		</ScrollView>
	);
};
export default HomeScreen;
