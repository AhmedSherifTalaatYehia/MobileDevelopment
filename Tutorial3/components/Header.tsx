import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Appointments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    height: 80,
    paddingTop: 38,
    backgroundColor: '#03254c',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});