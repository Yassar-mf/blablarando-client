import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
const Profil = ({ data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://res.cloudinary.com/di2cd2b6l/image/upload/v1725485614/avatar/ofeggp231cbvnalvhrhp.jpg' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Nom d'utilisateur</Text>
        <Text style={styles.profileEmail}>@TheRealAmpate</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Modifier le Profil</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Profil;
