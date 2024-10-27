import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import SearchFilter from '@/components/searchFilter';

const PlaceholderImage = require('@/assets/images/globe.png');

export let toValue = ""
export default function Info()
{
    //const AppBody = () => {
      //const handleClick = (event: MouseEvent) => {
        //console.log('hey')
      //}
    //}

    const [searchQuery,setSearchQuery] = useState("");
    const storeFrom = () =>{
    toValue = searchQuery;
    console.log("worked 1 "+toValue+"\n");
  }
    return(
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image}/>
            <Text style={styles.text}>Where to?</Text>
            <TextInput 
              placeholder='Search'
              placeholderTextColor={"grey"} 
              clearButtonMode='always' 
              style={styles.searchbar}
              autoCapitalize='none'
              autoCorrect={false}
              value = {searchQuery}
              onChangeText={(text)=> setSearchQuery(text)} 

      />
            <Link href="/" onPress={storeFrom} style={styles.button}>
              Next
            </Link>
      <SearchFilter data ={infos} input ={searchQuery} setInput = {setSearchQuery}/>

          </View>

        </View>
    )
}

const infos = [
  {
    BusId: 1,
    Stops: "Penn Station",
    numPassenger: 3,
    Time: 4,
  },
  {
    BusId: 2,
    Stops: "Pbnn Station",
    numPassenger: 3,
    Time: 4,
  },
  {
    BusId: 3,
    Stops: "Pcnn Station",
    numPassenger: 3,
    Time: 4,
  },
  {
    BusId: 4,
    Stops: "Pann Station",
    numPassenger: 3,
    Time: 4,
  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 18,
  },

  button: {
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#fff',
  },

  searchbar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
  },
})