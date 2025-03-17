import {StyleSheet, TextInputProps, TouchableOpacity, View} from 'react-native';
import {IconamoonEdit} from '../../../../assets/Icon';
import CustomImage from '../../../Utils/components/CustomImage';
import color from '../../../Constants/color';
import {useState} from 'react';
import {handleImageUpload} from '../../../Utils/UploadImageFunction';

const theme = 'light';

interface EditableInputProps extends TextInputProps {
  label: string;
  touchableOnpress?: () => void;
}

interface EditableImageProps {
  uri: string;
  type?: 'blackground' | 'profile';
  onPress?: () => any;
  onDataChange: (newData: any) => void;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  uri,
  type = 'profile',
  onPress,
  onDataChange,
}) => {
  const [Uri, setUri] = useState(uri);

  const uploadImage = async () => {
    const newData: any = await handleImageUpload();
    if (newData) {
      setUri(newData.uri);
      onDataChange({
        uri: newData.uri,
        name: newData.name || 'upload.jpg',
        type: newData.type || 'image/jpeg',
      });
    }
  };

  return (
    <View
      style={
        type === 'blackground'
          ? styles.backgroundContainer
          : styles.profileContainer
      }>
      <CustomImage
        source={{uri: Uri}}
        style={type === 'blackground' ? styles.backgroundImage : styles.profile}
        showFull={false}
      />
      <TouchableOpacity
        style={[
          styles.editButton,
          type === 'blackground'
            ? {}
            : {
                right: 5,
                bottom: 5,
              },
        ]}
        onPress={() => uploadImage()}>
        <IconamoonEdit />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: color[theme].backgroundPage,
  },
  header: {
    backgroundColor: color[theme].backgroundPage,
    alignItems: 'center',
    borderRadius: 0,
  },
  backgroundContainer: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: 130,
    borderRadius: 0,
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{translateX: -60}],
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: color[theme].backgroundPage,
  },
  editButton: {
    borderWidth: 1,
    borderColor: color[theme].containerBorder,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    elevation: 3,
  },
  containerInput: {
    marginTop: 50,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
