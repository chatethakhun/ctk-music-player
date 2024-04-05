// components/LoadSongButton.jsx
import Colors from "@/constants/Colors";
import { Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function LoadSongButton(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.loadBtn}>
          <Text
            style={styles.loadBtnText}>
            Load Audio
          </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    loadBtn: {
        height: 100,
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.light.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        bottom: 0
      },
      loadBtnText: {
        textAlign: 'center',
        fontSize: 21,
        color: Colors.light.white,
        fontWeight: 'bold',
      }
})
