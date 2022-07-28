import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import useData from "../../context/DataProvider";

const Header = () => {
	const navigation = useNavigation();
	const { setTitle, title } = useData();
	const handleHomePress = () => {
		navigation.navigate("HomeScreen" as never);
		setTitle("Home");
	};
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
			}}
		>
			<TouchableOpacity style={{ paddingLeft: 20 }} onPress={handleHomePress}>
				<FontAwesome5 name="home" size={40} color="black" />
			</TouchableOpacity>
			<Text style={{ fontSize: 30 }}>{title}</Text>
			<TouchableOpacity style={{ paddingRight: 30 }}>
				<Entypo name="info-with-circle" size={40} color="black" />
			</TouchableOpacity>
		</View>
	);
};
export default Header;
