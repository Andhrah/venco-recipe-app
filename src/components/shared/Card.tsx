import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from './Button';

const Card = (): JSX.Element => {
  const { container, img, textStyle, btn, btnContainer, timeText } = styles;

  return (
    <View style={container}>
     <Image
        source={require('../../../assets/images/salad.png')}
        style={img}
      />
      <Text style={textStyle}>Spicy Ramen Noodle</Text>

      <View style={btnContainer}>
        <Button style={btn}>
          <Text>Watch</Text>
        </Button>

      <Text style={timeText}>15 minute</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0.1,
    backgroundColor: '#FFFFFF',
    height: hp('30%'),
    width: wp('42%'),
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  img: {
    height: hp('15%'),
    width: wp('30%'),
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: hp('1.7'),
    color: '#373C5B',
  },
  btn: {
    backgroundColor: '#FB9400',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: '#D0CAE0',
  },
});

export { Card };
