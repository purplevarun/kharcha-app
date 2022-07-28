import { Text, TouchableOpacity } from "react-native";

interface Props {
	onPress: () => void;
	btnText: string;
}

const AddButton = (props: Props) => {
	return (
		<TouchableOpacity
			style={{
				margin: 20,
				padding: 10,
				backgroundColor: "lightgrey",
				borderRadius: 8,
			}}
			onPress={props.onPress}
		>
			<Text style={{ fontSize: 22 }}>{props.btnText}</Text>
		</TouchableOpacity>
	);
};
export default AddButton;
