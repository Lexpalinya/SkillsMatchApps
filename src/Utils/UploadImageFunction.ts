import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  Asset,
} from 'react-native-image-picker';

export const handleImageUpload = async (
  useCamera: boolean = false,
): Promise<Asset | null> => {
  return new Promise((resolve, reject) => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false, // Ensure we get a file URI
    };

    const callback = (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
        resolve(null);
      } else if (response.errorMessage) {
        console.error('Error:', response.errorMessage);
        reject(response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        resolve(response.assets[0]); // Returns an image asset
      } else {
        resolve(null);
      }
    };

    if (useCamera) {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  });
};
