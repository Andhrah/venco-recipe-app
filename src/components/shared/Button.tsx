import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  bgColor?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  border?: string;
  padding?: string | number;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  color?: string;
  style? : object;
  buttonTextstyle?: object;
};

const Button = ({ children, onPress, style }: ButtonProps): JSX.Element => {
  const { buttonStyle, textstyle } = styles;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[buttonStyle, style]}
        >
        <Text style={[textstyle, style]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    // width: wp('30%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  textstyle: {
    fontSize: hp('2.1%'),
    fontWeight: '500',
    color: '#FFFFFF',
  },
  buttonViewStyle: {
    paddingVertical: 10,
  },
});

export { Button };
