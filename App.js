import React, {useState, useEffect} from 'react';
import {Text, Dimensions, View, useWindowDimensions} from 'react-native';

const App = () => {
  const {width, height} = useWindowDimensions();
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);

  useEffect(() => {
    console.log('orientation changed', orientation);
  }, [orientation]);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: orientation === 'PORTRAIT' ? 'red' : 'green',
      }}>
      <Text>{width > height ? 'landscape' : 'portrait'}</Text>
      <Text>{`width: ${width}, height: ${height}`}</Text>
      <Text>{orientation}</Text>
    </View>
  );
};

export default App;
