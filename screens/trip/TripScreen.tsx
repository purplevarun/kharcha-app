import { useState } from "react";
import { ScrollView, View } from "react-native";
import saveItem from "../../helpers/saveItem";
import AllExpenses from "../../major-components/allexpenses/AllExpenses";
import AddButton from "../../minor-components/addbtn/AddButton";
import Input2 from "../../minor-components/input/Input2";

interface Props {
	route: {
		params: {
			tripName: string;
		};
	};
}

const TripScreen = (props: Props) => {
	const tripName = props.route.params.tripName;
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
			reason,
			tripName,
		};
		await saveItem("expenses", newExpense);
		setAmount("");
		setReason("");
		setInput(false);
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
			<AllExpenses tripName={tripName} />
		</ScrollView>
	);
};
export default TripScreen;
