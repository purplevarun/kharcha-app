import { TextInput, View } from "react-native";
import AddButton from "../addbtn/AddButton";

interface Props {
	amount: string;
	setAmount: (newAmt: string) => void;
	reason: string;
	setReason: (newReason: string) => void;
	handleSubmit: () => void;
	placeholder1: string;
	placeholder2: string;
}

const Input2 = (props: Props) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<TextInput
				style={{
					width: 300,
					height: 60,
					fontSize: 30,
					borderWidth: 2,
					margin: 10,
					marginBottom: 20,
					padding: 10,
				}}
				value={props.amount}
				onChangeText={(newText) => props.setAmount(newText)}
				placeholder={props.placeholder1}
				keyboardType="number-pad"
			/>
			<TextInput
				style={{
					width: 300,
					height: 60,
					fontSize: 30,
					borderWidth: 2,
					margin: 10,
					marginBottom: 20,
					padding: 10,
				}}
				value={props.reason}
				onChangeText={(newText) => props.setReason(newText)}
				placeholder={props.placeholder2}
			/>
			<AddButton
				btnText="Submit"
				onPress={props.handleSubmit}
				disabled={props.amount.length <= 0 || props.reason.length <= 0}
			/>
		</View>
	);
};
export default Input2;
