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
	const [expenses, setExpenses] = useState<null | any[]>(null);

	const getExpenses = async () => {
		setExpenses(await getItem("expenses"));
	};

	useEffect(() => {
		getExpenses();
		return () => {};
	});

	if (expenses) {
		return (
			<View style={{ flexDirection: "column-reverse" }}>
				{expenses.map((expense: expenseTypes, idx) => {
					if (props.tripName === expense.tripName)
						return <Expense {...expense} key={idx} />;
				})}
			</View>
		);
	} else {
		return <ActivityIndicator />;
	}
};
export default AllExpenses;
