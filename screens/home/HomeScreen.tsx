import { useState } from "react";
import { ScrollView } from "react-native";
import saveItem from "../../helpers/saveItem";
import AllTrips from "../../major-components/alltrips/AllTrips";
import AddButton from "../../minor-components/addbtn/AddButton";
import Input from "../../minor-components/input/Input";
import TodaysDate from "../../minor-components/todaysdate/TodaysDate";
import { appBackgroundColor } from "../../theme";

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
	};
	const inputProps = { text, setText, handleSubmit, placeholder: "Trip Name" };
	return (
		<ScrollView
			keyboardShouldPersistTaps="always"
			contentContainerStyle={{
				alignItems: "center",
				minHeight: 1000,
				backgroundColor: appBackgroundColor,
			}}
		>
			<TodaysDate />
			{input ? <Input {...inputProps} /> : <AddButton btnText="Add Trip" onPress={handlePress} disabled={false} />}

			<AllTrips />
		</ScrollView>
	);
};
export default HomeScreen;
