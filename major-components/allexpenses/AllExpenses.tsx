import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import getItem from "../../helpers/getItem";
import Expense from "../../minor-components/expense/Expense";
import Trip from "../../minor-components/trip/Trip";

interface expenseTypes {
	amount: number;
	created: string;
	reason: string;
	tripName: string;
}
interface Props {
	tripName: string;
}
const AllExpenses = (props: Props) => {
	const [expenses, setExpenses] = useState<null | expenseTypes[]>(null);

	const getExpenses = async () => {
		setExpenses(await getItem("expenses"));
	};

	useEffect(() => {
		getExpenses();
		return () => {};
	});

	const getSum = () => {
		if (expenses) {
			let sum = 0;
			expenses.forEach((expense) => (sum += expense.amount));
			return sum;
		} else return null;
	};

	if (expenses) {
		return (
			<View style={{ flexDirection: "column-reverse", alignItems: "center" }}>
				{expenses.map((expense: expenseTypes, idx) => {
					if (props.tripName === expense.tripName)
						return <Expense {...expense} key={idx} />;
				})}
				<Text style={{ marginTop: 20, fontSize: 30 }}>Total = {getSum()}</Text>
			</View>
		);
	} else {
		return <ActivityIndicator />;
	}
};
export default AllExpenses;
