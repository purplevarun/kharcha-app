import { Text, View } from "react-native";
import { expenseBackgroundColor } from "../../theme";

interface Props {
	amount: number;
	created: string;
	reason: string;
	tripName: string;
}
const Expense = (props: Props) => {
	return (
		<View
			style={{
				width: 300,
				height: 60,
				backgroundColor: expenseBackgroundColor,
				marginTop: 20,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 10,
				borderColor: "black",
				borderWidth: 3,
				borderRadius: 8,
			}}
		>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>{props.amount}</Text>
				<Text style={{ color: "white" }}>{props.reason.substring(0,25)}</Text>
			</View>
			<View>
				<Text style={{ color: "white" }}>{props.created}</Text>
			</View>
		</View>
	);
};
export default Expense;
