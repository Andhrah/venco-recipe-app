import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-remix-icon';

import { Button } from './Button';

const Card = (): JSX.Element => {
  const { container, img, textStyle, btn, btnContainer, timeText, timeContainer } = styles;

  return (
    <View style={container}>
     <Image
        source={require('../../../assets/images/salad.png')}
        style={img}
      />
      <Text style={textStyle}>Spicy Ramen Noodle</Text>

      <View style={btnContainer}>
        <Button style={btn} color="#FFFFFF">
          Watch
        </Button>

        <View style={timeContainer}>
          <Icon name="time-line" size={20} color="#D0CAE0" />
          <Text style={timeText}>15 mins</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0.1,
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? hp('26%') : hp('27%'),
    width: wp('44%'),
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  img: {
    height: hp('15%'),
    width: wp('30%'),
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: hp('1.7'),
    color: '#373C5B',
    marginBottom: 15,
  },
  btn: {
    backgroundColor: '#FB9400',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#D0CAE0',
  },
});

export { Card };
