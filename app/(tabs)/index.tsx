import { Text, View, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { toValue } from './info';
import { fromValue,makeSchedule} from "./info2";


const PlaceholderImage = require('@/assets/images/map.png');
const PlaceholderImage2 = require('@/assets/images/calendar.png');

// var to="";
// var from="";
var mSchedule =0;

export class Person {
  from: string;
  to: string;

  constructor(data?: any)
  {
    this.from = data.from;
    this.to = data.to;
  }
}

export default function Index() {

  const to = toValue;
  const from = fromValue;
    <View style={styles.container}>
      <text style={styles.text}> Bus leaves at</text>
      <Text style={styles.text}> Bus arrives at</Text>
    </View>


  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upcoming Trips:</Text>

      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>


      <Text style={styles.text}> Destination: {to}</Text>
      <Text style={styles.text}> Origin:{from} </Text>
      <Link href="/about" style={styles.button}>
        Plan your next trip!
      </Link>

      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage2} style={styles.image}/>
      </View>
      <View style={styles.footerContainer}>
      </View>
    </View>
  );
  }
  /*function fetchUserData(userId)
  {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        const userData= {
          id: userId,
          name: "John Doe",
          location: "Jersey City",
          time: "3:00",
        };

        if (userId > 0) {
          resolve(userData);
        }
        else{
          reject("Invalid user ID");
        }
      }, 2000);
    });
  }
async function getUserData(){
  try {
    const user = await fetchUserData(1);
    console.log("User data fetched successfully")
    displayUserData(user);
  }
  catch(error)
  {
    console.error("error");
  }
}

function displayUserData(user)
{
  const userDataDiv = document.getElementById("user-data");
}

document.getElementById("fetch-button")?.addEventListener("click", () => {
  console.log("Fetching user data...");
  getUserData();
});
}*/

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
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: 80,
    height: 110,
    borderRadius: 18,
  },

  button: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
})
