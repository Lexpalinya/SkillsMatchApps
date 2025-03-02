import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props:any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', backgroundColor: '#222' }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      }}
      text2Style={{
        fontSize: 16,
        color: '#ddd',
      }}
    />
  ),          
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', backgroundColor: '#300'}}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      }}
      text2Style={{
        fontSize: 14,
        color: '#eee',
      }}
    />
  ),
};
