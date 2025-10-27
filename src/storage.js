import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const v =await AsyncStorage.getItem(KEY);
    console.log("this", v);
    
    if(v == null)return [];
    
    return JSON.parse(v) 
  } catch {
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    await AsyncStorage.setItem(KEY,JSON.stringify(pins));
  } catch {}
}
