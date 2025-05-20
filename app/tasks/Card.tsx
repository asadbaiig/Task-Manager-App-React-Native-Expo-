import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Card = () => {

  const [buttonColor, setButtonColor] = useState('hotpink'); 
  const toggleButtonColor = () => {
    setButtonColor(prevColor => (prevColor === 'skyblue' ? 'hotpink' : 'skyblue')); // Toggle between green and red
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>MasterCard</Text>
      <Text style={styles.content}>4506 7658 8873 4424</Text>
      <Text style={styles.content}>09/28</Text>
      <Text style={styles.content}>CVC 344</Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: buttonColor }]} 
        onPress={toggleButtonColor}
      >
        <Text style={styles.buttonText}>Click for Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0', 
    padding: 20, 
    shadowColor: 'red', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    borderRadius: 10, 
    elevation: 5, 
    margin: 20,
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10, 
  },
  content: {
    fontSize: 14, 
    marginBottom: 20,
    fontWeight:'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold',
  },
});

export default Card;
