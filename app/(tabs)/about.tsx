import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/man.png');

const PlaceholderImage2 = require('@/assets/images/people.png');


export default function AboutScreen() 
{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Traveling alone?</Text>
      <Link href="/info" style={styles.button}>
        Yes!
      </Link>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
      <Link href="/info" style={styles.button}>
        No
      </Link>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage2} style={styles.image}/>
      </View>
    </View>
  );
}

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
    textDecorationLine: 'underline',
    color: '#fff',
  },
});