import { useState } from "react";
import { ScrollView, View } from "react-native";
import AddButton from "../../minor-components/addbtn/AddButton";
import Input2 from "../../minor-components/input/Input2";

const TripScreen = () => {
	const [input, setInput] = useState(false);
	const handlePress = () => {
		setInput((input) => !input);
	};
	const [amount, setAmount] = useState("");
	const [reason, setReason] = useState("");
	const handleSubmit = async () => {
		const newExpense = {
			created: new Date().toLocaleString(),
			amount: parseInt(amount),
			reason: reason,
		};
	};
	const inputProps = {
		amount,
		setAmount,
		reason,
		setReason,
		handleSubmit,
		placeholder1: "Amount",
		placeholder2: "Reason",
	};
	return (
		<ScrollView
			keyboardShouldPersistTaps="always"
			contentContainerStyle={{
				alignItems: "center",
				minHeight: 760,
				backgroundColor: "white",
			}}
		>
			<View style={{ height: 20 }}></View>
			{input ? (
				<>
					<Input2 {...inputProps} />
				</>
			) : (
				<AddButton
					btnText="Add Expense"
					onPress={handlePress}
					disabled={false}
				/>
			)}
		</ScrollView>
	);
};
export default TripScreen;
