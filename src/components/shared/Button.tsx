import React from 'react';
import { TextStyle, TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, StyleProp } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-remix-icon';

/**
 * @description The properties for the `Button` component.
 *
 * @typedef {object} ButtonProps
 * @property {() => void} [onPress] - The function that will be called when the button is pressed.
 * @property {React.ReactNode} [children] - The children to render inside the button.
 * @property {StyleProp<ViewStyle>} [style] - Style object to pass to the button.
 * @property {StyleProp<ViewStyle>} [btnTextStyle] - Style object to pass to the text inside the button.
 */
type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
  color?: string;
};

const Button = ({ children, onPress, style, btnTextStyle, color }: ButtonProps): JSX.Element => {
  const { buttonStyle, textstyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, style]}
      >
      <Icon name="play-circle-fill" color={color} />
      <Text style={[textstyle, btnTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 50,
    width: wp('18%'),
    height: hp('3.7%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: hp('1.5%'),
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonViewStyle: {
    paddingVertical: 10,
  },
});

export { Button };
