import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import getItem from "../../helpers/getItem";
import Trip from "../../minor-components/trip/Trip";

interface tripTypes {
	name: string;
	created: string;
}

const AllTrips = () => {
	const [trips, setTrips] = useState<null | any[]>(null);

	const getTrips = async () => {
		setTrips(await getItem("trips"));
	};

	useEffect(() => {
		getTrips();
	});

	if (trips) {
		return (
			<View style={{ flexDirection: "column-reverse" }}>
				{trips.map((trip: tripTypes, idx) => {
					return <Trip {...trip} key={idx} />;
				})}
			</View>
		);
	} else {
		return <ActivityIndicator />;
	}
};
export default AllTrips;
