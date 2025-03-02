import {Provider} from 'react-redux';
import RootNavigation from './Router/RootNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './Store/store';
import Toast from 'react-native-toast-message';
import {toastConfig} from './Configs/ToastConfig';
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <RootNavigation />
        <Toast config={toastConfig} />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
