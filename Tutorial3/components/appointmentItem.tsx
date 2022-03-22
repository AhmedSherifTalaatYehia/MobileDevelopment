
import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppointmentItem({ pressHandler, item }:any) {
  
  
    return (
    <TouchableOpacity >
      <View style={styles.item}>
        <View>
            <Text style={styles.itemText}>{item.text}</Text>
            <Text style={styles.itemText}>{item.date}</Text>
        </View>
        <MaterialIcons name='delete' size={18} color='#333' onPress={() => pressHandler(item.id)} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});