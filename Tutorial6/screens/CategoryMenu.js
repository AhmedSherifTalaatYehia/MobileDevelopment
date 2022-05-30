import { View, Text, SafeAreaView , StyleSheet, ScrollView } from 'react-native'
import React , {useState , useEffect} from 'react'
import {Button, Card } from 'react-native-elements'
const CategoryMenu = () => {
    const [data,setData] = useState( [
        {
            id : 1,
            name : 'Nigiri' ,
            uri : 'https://thumbor.thedailymeal.com/gUfAylED0IS1nuSLZSRV_Kt9AEc=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/recipe/2016/shutterstock_123733927.jpg'
        } , 
        {
            id : 2,
            name : 'Fried Rolls' ,
            uri : 'https://media.istockphoto.com/photos/hot-tempura-roll-with-prawn-and-cheese-on-black-background-picture-id1144739441?k=20&m=1144739441&s=612x612&w=0&h=IzoCbpoz5WSDMEo6gQl4DdKHTum6SSzT02mAqKcjJtE='
        }, {
             id : 3,
            name : 'Ura Maki Rolls' ,
            uri : 'https://www.reyesgutierrez.com/wp-content/uploads/2020/07/Uramaki-mango-930x620.jpg'
        }, 
        {
            id : 4,
            name : 'Special Ura Maki Rolls' ,
            uri : 'https://media-cdn.tripadvisor.com/media/photo-s/19/de/fc/f4/uramaki-tuna-special.jpg'
        }, {
            id : 5 ,
            name : 'Drinks' ,
            uri : 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8931/Smoothie-post.jpg'
        }
    ])
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        {
            data.map( (category , number) => {return (
               <Card key={number}  >
               <Card.Title style={styles.title}> {category.name}  </Card.Title>
                <Card.Divider/>
               <Card.Image  style={styles.image} source= {{uri : category.uri}} />
              
              </Card>
            ) }  )
        }
        </ScrollView>
    </SafeAreaView>
  )
}
export default CategoryMenu
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent: 'center' , 
        //aspectRatio : 20
      },
      image: {
        resizeMode: 'contain'    
      },
      title: {
        fontSize: 20,
        fontWeight : "bold" , 
        color:'black',
        //textAlign: 'center'
      }
    });