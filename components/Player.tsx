// components/Player.jsx

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import Colors from "@/constants/Colors";
import { useState } from "react";

export default function Player(props) {
  const [sound, setSound] = useState();
  const [img, setImg] = useState("");
  const [repeat, setRepeat] = useState(false);
  const [repeatBtnColor, setRepeatBtnColor] = useState('green');
  return (
    <View style={styles.songCard}>
      <Image style={styles.img} source={img} />

      <Button
        title="Play"
        onPress={() => {}}
        btnStyle={styles.playBtn}
        textStyle={styles.textPlay}
      />

      <View style={styles.smallBtns}>
        <Button
          title="Stop"
          onPress={() => {}}
          btnStyle={styles.stopBtn}
          textStyle={styles.smallBtnText}
        />
        <Button
          title="Repeat"
          onPress={() => {}}
          btnStyle={{ ...styles.repeatBtn, backgroundColor: repeatBtnColor }}
          textStyle={styles.smallBtnText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  songCard: {
    padding: 10,
    backgroundColor: Colors.light.white,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    borderRadius: 10,
  },
  playBtn: {
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get("window").width * 0.8,
    textAlign: "center",
    backgroundColor: Colors.light.green,
  },
  textPlay: {
    color: Colors.light.white,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  smallBtnText: {
    padding: 20,
    fontSize: 15,
    color: Colors.light.white,
    textAlign: "center",
  },
  smallBtns: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  stopBtn: {
    backgroundColor: "red",
    margin: 10,
    width: Dimensions.get("window").width * 0.38,
    borderRadius: 10,
  },
  repeatBtn: {
    margin: 10,
    width: Dimensions.get("window").width * 0.38,
    borderRadius: 10,
  },
});
