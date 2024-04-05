// components/Button.jsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  btnStyle?: object;
  textStyle?: object;
}
export default function Button({
  title,
  textStyle,
  btnStyle,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
