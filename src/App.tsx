import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';
//import {supabase} from '../supabase/supabase';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
