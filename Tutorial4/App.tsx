
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, View} from 'react-native';
import Carousel from './component/carousel';
import DesignClass from './component/design';

const imagesArray=[
 'https://www.transparentpng.com/thumb/google-logo/quality-google-written-background-hd-images-free-2EKbNn.png',
 'https://www.transparentpng.com/thumb/google-logo/google-chrome-logo-picture-hd-transparent-vJaIcV.png',
 'https://www.transparentpng.com/thumb/google-logo/google-logo-hd-download-social-network-BhsLN1.png'
]



const App = () => {

  const [flag,setFlag]=useState<boolean>(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
      {flag? <Carousel images={imagesArray} /> : <DesignClass images={imagesArray} />} 
      <View style={styles.btn}>
        <Button title="change carousel" color="#000000" onPress={() => { setFlag(!flag) }} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: 50
  },
  btn : {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;