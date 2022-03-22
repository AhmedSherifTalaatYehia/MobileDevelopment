import React, {useEffect, useState } from 'react';
import { Button,StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard,Text } from 'react-native';
import Header from "./components/Header";
import AppointmentItem from "./components/appointmentItem"; 
import AddAppointment from './components/addAppointment';
import axios from 'axios';

// npm install json-server
// then execute command npm run server in your terminal 
// change localhost to your ip address or use ngrok
// netwrok error in case that baseUrl is not working
const baseUrl = 'http://localhost:5000/tasks';
//const baseUrl = 'http://7634-197-47-154-118.ngrok.io/tasks';

interface Appointment {
  text: string;
  date: string;
  id: number;
}


export default function App() {


  const [addAppointFlag,setAppointFlag]=useState<boolean>(false)
  const [appointmentArray, setAppoint] = useState<Appointment[]>([]);

  useEffect ( () => { axios.get(baseUrl).then((response) => {
      console.log("baseUrl is working perfect");
      setAppoint(response.data);
  }).catch(err => console.log(err.message) ); },[]);


  const deleteHandler =  async (id: number) => { 
    try{
    setAppoint(prevAppointArray => { return prevAppointArray.filter(appointment => appointment.id != id); });  
    await fetch(`${baseUrl}/${id}`,{method : "DELETE"}) 
    }catch(err:any){
      console.log(err.message);
    }
  
  };

  
  const toogleFunc=() => {setAppointFlag(!addAppointFlag)};
  const addAppointmentFunc= async (text: string,date: string) => { 
    try{
    const res=await fetch(baseUrl,
    {method: 'POST',headers:{'Content-type' : 'application/json'},body: JSON.stringify({text: text, date:date})  })
    const data: Appointment=await res.json();
    setAppoint( [...appointmentArray,data]    );  
    }catch(err:any){
      console.log(err.message);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
              
              <View>
                  <View>{addAppointFlag && <AddAppointment submitHandler={addAppointmentFunc} /> }</View>
                  <View style={styles.btn}><Button color='#03254c'  title={addAppointFlag? "close":"Add new Appointment"}  onPress={toogleFunc}/></View>
              </View>

              <View style={styles.list}>
                {appointmentArray.length>0? <FlatList data={appointmentArray}
                  renderItem={({ item }) => <AppointmentItem item={item} pressHandler={deleteHandler} />} />
                  : <Text>nothing to display</Text> }
              </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    //backgroundColor: 'grey',
    flex: 1,
  },
  list: {
    marginTop: 20,
    //backgroundColor: 'lightgrey',
    flex: 1,
  },
  btn:{
    marginTop:20,
  }
});