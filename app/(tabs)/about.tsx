import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() 
{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you traveling alone?</Text>
      <Link href="/info" style={styles.button}>
        Traveling Alone
      </Link>
      <Link href="/info" style={styles.button}>
        Traveling Alone
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});