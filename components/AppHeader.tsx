import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import TextTicker from 'react-native-text-ticker'

interface AppHeaderProps {
    title?: string
}

export default function AppHeader(props: AppHeaderProps) {
  return (
    <View style={styles.title}>
      <StatusBar style="light" />
      <TextTicker duration={3000} loop bounce={false} style={styles.titleText}>
        {props.title}
      </TextTicker>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        height: 120,
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.light.background,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      titleText:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 21,
        color: Colors.light.white,
        fontWeight: 'bold',
      },
})