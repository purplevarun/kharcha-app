import { TextInput } from "react-native";

interface Props {
	text: string;
	setText: (newText: string) => void;
}

const Input = (props: Props) => {
	return (
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
			value={props.text}
			onChangeText={(newText) => props.setText(newText)}
			placeholder="Trip Name"
		/>
	);
};
export default Input;
