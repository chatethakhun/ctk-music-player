import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import DocumentPicker from 'expo-document-picker'
import Player from "@/components/Player";

const App = () => {
  const [title, setTitle] = useState<string>("Music Player");
  const [display, setDisplay] = useState(<Player />)

  const loadAudio = async () => {
    // Load audio files
    // const audio = new DocumentPicker.getDocumentAsync({})
  }
  return (
    <View style={styles.container}>
      <AppHeader title={title} />
      <View style={styles.musicContainer}>
        {display}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  musicContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
