import AsyncStorage from "@react-native-async-storage/async-storage";

const getItem = async (itemName: string): Promise<any[]> => {
	const item = await AsyncStorage.getItem(itemName);
	if (item) {
		return JSON.parse(item);
	} else {
		return [];
	}
};

export default getItem;
