import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function AddAppointment({ submitHandler }:any) {
  
  const [text, setText] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const changeText = (val: string) => {setText(val);};
  const changeDate = (val: string) => {setDate(val);};

  const clearInputFunc= () => {    
    if(text.length==0){
        Alert.alert("oops","Enter Text",[{text: 'understood', onPress: ()=> {console.log("alert closed")} }])
        return;
    }
    if(date.length==0){
      Alert.alert("oops","Enter date",[{text: 'understood', onPress: ()=> {console.log("alert closed")} }])
      return;
    }
    submitHandler(text,date);
    setText("");
    setDate("");
  }

  return (
    <View>
      <TextInput style={styles.input} placeholder='new Appointment' onChangeText={changeText}  value={text} />
      <TextInput style={styles.input} placeholder='add date' onChangeText={changeDate}  value={date} />
      <Button color='#03254c' onPress={clearInputFunc} title='submit' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: '#000',
  },
});