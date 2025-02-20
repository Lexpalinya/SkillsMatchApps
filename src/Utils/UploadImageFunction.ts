import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const handleImageUpload = async (
  useCamera: boolean = false,
): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    const callback = (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
        resolve(null);
      } else if (response.errorMessage) {
        console.error('Error occurred:', response.errorMessage);
        reject(response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        console.log('response', response);
        resolve(response.assets[0].uri);
      } else {
        resolve(null);
      }
    };

    // Request camera permission if using camera
    if (useCamera) {
      const permissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);
      if (permissionStatus !== RESULTS.GRANTED) {
        console.log('Camera permission denied');
        resolve(null);
        return;
      }
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  });
};
