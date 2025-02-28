import {Provider} from 'react-redux';
import RootNavigation from './Router/RootNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import store from './Store/store';
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <RootNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
