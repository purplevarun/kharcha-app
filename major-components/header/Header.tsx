import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { appBackgroundColor } from "../../theme";
import InfoBox from "../infobox/InfoBox";

const Header = () => {
	const navigation = useNavigation();
	const handleHomePress = () => {
		navigation.navigate("HomeScreen" as never);
	};
	const [modal, showModal] = useState(false);
	const toggleModal = () => showModal((modal) => !modal);
	const infoProps = { modal, toggleModal };
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
				borderBottomWidth: 5,
				backgroundColor:appBackgroundColor
			}}
		>
			<TouchableOpacity style={{ paddingLeft: 20 }} onPress={handleHomePress}>
				<FontAwesome5 name="home" size={40} color="black" />
			</TouchableOpacity>
			<Text style={{ fontSize: 30 }}>Kharcha App</Text>
			<TouchableOpacity style={{ paddingRight: 30 }}>
				<Entypo name="info-with-circle" size={40} color="black" onPress={toggleModal} />
			</TouchableOpacity>
			<InfoBox {...infoProps} />
		</View>
	);
};
export default Header;
