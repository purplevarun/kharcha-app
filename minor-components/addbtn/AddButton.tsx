import { Text, TouchableOpacity } from "react-native";

interface Props {
	onPress: () => void;
	btnText: string;
	disabled: boolean;
}

const AddButton = (props: Props) => {
	return (
		<TouchableOpacity
			style={{
				padding: 10,
				backgroundColor: props.disabled ? "lightgreen" : "green",
				borderRadius: 8,
				borderWidth: 3,
			}}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={{ fontSize: 22, color: props.disabled?"black":"white" }}>{props.btnText}</Text>
		</TouchableOpacity>
	);
};
export default AddButton;
