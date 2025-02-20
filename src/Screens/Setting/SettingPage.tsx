import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import CustomAppBar from '../../Utils/components/CustomAppBar';
import CustomImage from '../../Utils/components/CustomImage';
import CustomInputAuth from '../../Utils/components/CustomInput';
import {IconamoonEdit} from '../../../assets/Icon';
import color from '../../Constants/color';
import {handleImageUpload} from '../../Utils/UploadImageFunction';

const theme = 'light';

interface EditableImageProps {
  uri: string;
  type?: 'background' | 'profile';
  onPress: () => any;
}

const EditableImage: React.FC<EditableImageProps> = ({
  uri,
  type = 'profile',
  onPress,
}) => {
  const [Uri, setUri] = useState(uri);
  const uploadImage = async () => {
    const newUri = await handleImageUpload();
    if (newUri) {
      setUri(newUri);
    }
  };
  return (
    <View
      style={
        type === 'background'
          ? styles.backgroundContainer
          : styles.profileContainer
      }>
      <CustomImage
        source={{uri: Uri}}
        style={type === 'background' ? styles.backgroundImage : styles.profile}
      />
      <TouchableOpacity
        style={[
          styles.editButton,
          type === 'background'
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

interface EditableInputProps extends TextInputProps {
  label: string;
}

const EditableInput: React.FC<EditableInputProps> = ({label, ...props}) => {
  return (
    <CustomInputAuth
      label={label}
      {...props}
      rightIcon={
        <TouchableOpacity style={{marginBottom: 10}}>
          <IconamoonEdit />
        </TouchableOpacity>
      }
    />
  );
};

const SettingPage = () => {
  const imageUrl =
    'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg';

  return (
    <ScrollView style={styles.body}>
      <CustomAppBar title="ຕັ້ງຄ່າ" />
      <View style={styles.header}>
        <EditableImage
          uri={imageUrl}
          type="background"
          onPress={() => console.log('first')}
        />
        <EditableImage
          uri={imageUrl}
          type="profile"
          onPress={() => console.log('firsterewfjohiufj')}
        />
      </View>
      <View style={styles.containerInput}>
        <EditableInput label="ຊື່ອົງກອນ" placeholder="XXXXXX" />
        <EditableInput label="ອີເມວ" placeholder="XXXXXX" />
        <EditableInput label="ເບີໂທ" placeholder="XXXXXX" />
        <EditableInput label="ລະຫັດຜ່ານ" placeholder="XXXXXX" secureTextEntry />
      </View>
    </ScrollView>
  );
};

export default SettingPage;

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
