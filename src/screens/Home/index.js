import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
  return (
    <View>
      {/* Search button */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.log('Search Btn clicked')}>
        <Fontisto name="search" color="#ff5a60" size={15} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      {/* Image */}
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Explore button */}
        <Pressable
          style={styles.button}
          onPress={() => console.log('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
