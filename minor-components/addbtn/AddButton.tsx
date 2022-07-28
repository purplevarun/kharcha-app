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
				backgroundColor: props.disabled ? "grey" : "lightgrey",
				borderRadius: 8,
			}}
			onPress={props.onPress}
			disabled={props.disabled}
		>
			<Text style={{ fontSize: 22 }}>{props.btnText}</Text>
		</TouchableOpacity>
	);
};
export default AddButton;
