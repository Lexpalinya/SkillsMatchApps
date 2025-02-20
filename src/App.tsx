import RootNavigation from './Router/RootNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView>
      <RootNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
