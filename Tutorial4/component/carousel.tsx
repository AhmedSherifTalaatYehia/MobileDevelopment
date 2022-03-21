import React, {useRef, useState} from 'react';
import {Animated,Button,Dimensions,Image,StyleSheet,View,ScrollView} from 'react-native';
import useInterval from './useInterval';


const MAX_WIDTH = Dimensions.get('screen').width;



export default function Carousel({images}:Props){

  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  const activeImage = (index : number) => { return index === currentImage? styles.activeIndicator:undefined};
  const shiftImage= {transform: [{translateX: animation.current}]} ;
  

  //useInterval(() => handleNextAnimation(), 5000);

  const handleNextAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);};

    const handlePrevAnimation = () => {
        let newCurrentImage = currentImage - 1;
    
        if (newCurrentImage <0) {
          newCurrentImage=images.length-1;
        }
    
        Animated.spring(animation.current, {
          toValue: -(MAX_WIDTH * newCurrentImage),
          useNativeDriver: true,
        }).start();
        setCurrentImage(newCurrentImage);};
  
  return (
    <View>

      <View>
        
        <Animated.View style={[styles.container, shiftImage ]} >
        {images.map((image) => (<Image key={image} source={{uri: image}} style={styles.image} /> ))}
        </Animated.View>
        
        <View style={styles.indicatorContainer}>
          {images.map((image, index) => ( <View key={index} style={[styles.indicator, activeImage(index) ]} /> ))}
        </View>

      </View>
	  <View style={styles.btnAlign}>
			<Button title="Prev" color="#000000" onPress={handlePrevAnimation} />
			<Button title="Next" color="#000000" onPress={handleNextAnimation} />
	  </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 200,
    width: MAX_WIDTH,
  },
  container: {
    flexDirection: 'row',
  },
  btnAlign: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: MAX_WIDTH,
    bottom: 10,
    //zIndex: 2,
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
});

type Props = {
  images: string[];
};

