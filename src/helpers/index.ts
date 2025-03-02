import AsyncStorage from '@react-native-async-storage/async-storage';

// ฟังก์ชันบันทึกข้อมูลใน AsyncStorage
const saveDataToLocalStorage = async (key: string, value: any) => {
  try {
    const encryptedValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, encryptedValue);
  } catch (error) {
    console.error('Error saving data:', error);
    throw new Error('Saving data failed');
  }
};

// ฟังก์ชันดึงข้อมูลจาก AsyncStorage
const getDataFromLocalStorage = async (key: string) => {
  try {
    const encryptedValue = await AsyncStorage.getItem(key);
    if (encryptedValue) {
      return JSON.parse(encryptedValue);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Retrieving data failed');
  }
};

// ฟังก์ชันลบข้อมูลทั้งหมดจาก AsyncStorage
const clearAllDataFromLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared from AsyncStorage');
  } catch (error) {
    console.error('Failed to clear AsyncStorage:', error);
    throw new Error('Clearing data failed');
  }
};

// ฟังก์ชันลบข้อมูลบางรายการจาก AsyncStorage
const removeDataFromLocalStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
    throw new Error('Removing data failed');
  }
};

// ฟังก์ชันบันทึกข้อมูลผู้ใช้
const saveUserDataToLocalStorage = async (user: any) => {
  await saveDataToLocalStorage('user', user);
};

// ฟังก์ชันดึงข้อมูลผู้ใช้
const getUserDataFromLocalStorage = async () => {
  return await getDataFromLocalStorage('user');
};

export {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
  saveUserDataToLocalStorage,
  getUserDataFromLocalStorage,
  removeDataFromLocalStorage,
  clearAllDataFromLocalStorage,
};
