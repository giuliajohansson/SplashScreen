import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 50,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

const SplashScreen = function () {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#bfc7db', '#c77dff']}
        style={styles.background}

      />
      <Image
        style={styles.logo}
        source={{ uri: 'https://i.pinimg.com/originals/b6/65/83/b6658333d80155dc81ebf64b134a9e75.png' }} />
    </View>

  )
};


export default SplashScreen;