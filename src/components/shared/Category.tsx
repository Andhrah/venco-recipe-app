import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type CategoryBtnProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  bgColor?: string;
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

const CategoryBtn = ({ children, onPress, style }: CategoryBtnProps): JSX.Element => {
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#FB9400',
    marginRight: 10,
  },
  textstyle: {
    fontSize: hp('1.8%'),
    fontWeight: '500',
    color: '#FFF5AD',
  },
  buttonViewStyle: {
    paddingVertical: 10,
  },
});

export { CategoryBtn };
