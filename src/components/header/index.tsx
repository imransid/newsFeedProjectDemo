import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar hidden={true} />
      <View style={{ borderWidth: 1, borderColor: '#4774AD', padding: 2, marginRight: 10, borderRadius: 59 }}>
        <Image
          source={{ uri: 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' }} // Replace with actual image URL
          style={styles.profileImage}
        />
      </View>
      <View>
        <Text style={styles.name}>Noam Penn (Panther)</Text>
        <Text style={styles.subtitle}>a tennis player XXX</Text>
      </View>
    </View>
  )
};

export default Header