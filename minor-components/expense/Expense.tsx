import { Text, View } from "react-native";

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
				height: 90,
				backgroundColor: "#36454F",
				marginTop: 20,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 20,
				paddingBottom: 10,
			}}
		>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginVertical: 10,
				}}
			>
				<Text style={{ color: "white", fontSize: 30 }}>{props.amount}</Text>
				<Text style={{ color: "white" }}>{props.reason}</Text>
			</View>
			<View>
				<Text style={{ color: "white" }}>{props.created}</Text>
			</View>
		</View>
	);
};
export default Expense;
