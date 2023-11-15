
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import RootNav from './src/navigations/RootNav';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      <RootNav />
    </SafeAreaView>
  );
}


export default App;
