import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Linking, Modal, Text, TouchableOpacity, View } from "react-native";

interface Props {
	modal: boolean;
	toggleModal: () => void;
}
const InfoBox = ({ modal, toggleModal }: Props) => {
	return (
		<Modal animationType="slide" visible={modal} transparent={true}>
			<View
				style={{
					marginHorizontal: 50,
					backgroundColor: "lightgrey",
					alignItems: "center",
					height: 200,
					width: 300,
					marginTop: 100,
					display: "flex",
					borderColor: "black",
					borderWidth: 5,
				}}
			>
				<TouchableOpacity
					style={{ alignSelf: "flex-end", margin: 10 }}
					onPress={toggleModal}
				>
					<Entypo name="squared-cross" size={30} color="black" />
				</TouchableOpacity>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						height: 30,
						width: 220,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text style={{ fontSize: 20 }}>Made with </Text>
					<FontAwesome name="heart" size={20} color="red" />
					<Text style={{ fontSize: 20 }}> by Varun Kedia</Text>
				</View>
				<View style={{ flexDirection: "row", marginTop: 20 }}>
					<Text style={{ fontSize: 20 }}>Visit </Text>
					<TouchableOpacity
						onPress={() => Linking.openURL("https://purplevarun.github.io")}
					>
						<Text style={{ fontWeight: "bold", fontSize: 20 }}>
							purplevarun.github.io
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};
export default InfoBox;
