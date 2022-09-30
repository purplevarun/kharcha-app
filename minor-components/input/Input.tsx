import { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import AddButton from "../addbtn/AddButton";

interface Props {
	text: string;
	setText: (newText: string) => void;
	handleSubmit: () => void;
	placeholder: string;
}

const Input = (props: Props) => {
	const inputRef = useRef<any>();
	useEffect(() => {
		inputRef.current.focus();
		return () => {};
	}, []);
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
					borderWidth: 3,
					borderRadius:6,
					margin: 10,
					marginBottom: 20,
					padding: 10,
				
				}}
				value={props.text}
				onChangeText={(newText) => props.setText(newText)}
				placeholder={props.placeholder}
				ref={inputRef}
				selectionColor="white"
			/>
			<AddButton btnText="Submit" onPress={props.handleSubmit} disabled={props.text.length <= 0} />
		</View>
	);
};
export default Input;
