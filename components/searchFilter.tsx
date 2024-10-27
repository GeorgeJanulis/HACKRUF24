import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';

export default function SearchFilter({data,input,setInput}) {
  return (
    <View style={{marginTop:10}}>
        <FlatList data={data} renderItem={({item})=>{
            if (input===""){
                return (
                    <View>
                        
                        <Text style={styles.text}>{item.Stops}</Text>
                    </View>
                )
            }

            if(item.Stops.toLowerCase().includes(input.toLowerCase())){
                return (
                    <View>
                        <Text style={styles.text}>{item.Stops}</Text>
                    </View>
                )
            }
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    marginVertical:12,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});