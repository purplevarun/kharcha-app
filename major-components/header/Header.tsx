import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
	return (
		<View
			style={{
				height: 70,
				width: "100%",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				borderBottomColor: "black",
				borderBottomWidth: 1,
				marginBottom: 20,
			}}
		>
			<TouchableOpacity style={{ paddingLeft: 20 }}>
				<FontAwesome5 name="home" size={40} color="black" />
			</TouchableOpacity>
			<Text style={{ fontSize: 30 }}>Home</Text>
			<TouchableOpacity style={{ paddingRight: 30 }}>
				<Entypo name="info-with-circle" size={40} color="black" />
			</TouchableOpacity>
		</View>
	);
};
export default Header;
