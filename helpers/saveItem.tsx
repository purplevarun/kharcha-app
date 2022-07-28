import AsyncStorage from "@react-native-async-storage/async-storage";
import getItem from "./getItem";

const saveItem = async (itemName: string, newItem: any) => {
	const oldItems = await getItem(itemName);
	oldItems.push(newItem);
	await AsyncStorage.setItem(itemName, JSON.stringify(oldItems));
};

export default saveItem;
