//Picking street and time
const busStart = "MT PROSPECT AVE AT BLOOMFIELD AVE";
const busStop = "MT PROSPECT AVE AT BLOOMFIELD AVE";
const time = "5:30 am";

const fs = require('fs');

function stopTime() {
  const data = fs.readFileSync('stop_times.txt', 'utf-8'); // Synchronous read

  const rows = data.trim().split('\n').map(row => row.split(','));
  const headers = rows[0];
  const bus_stops = rows.slice(1).map(row => {
    return row.reduce((obj, value, index) => {
      obj[headers[index]] = value;
      return obj;
    }, {});
  });

  return bus_stops; // Return stops data directly
}

function stops() {
  const data = fs.readFileSync('stops.txt', 'utf-8'); // Synchronous read

  const rows = data.trim().split('\n').map(row => row.split(','));
  const headers = rows[0];
  const stops = rows.slice(1).map(row => {
    return row.reduce((obj, value, index) => {
      obj[headers[index]] = value;
      return obj;
    }, {});
  });
  return stops; // Return stops data directly
}

const test = stops(); // Now stops is available outside the function

const test1 = stopTime(); // Now stops is available outside the function


function handleStops1(stop) {
     // Output the processed stops
     for(let i = 0; i < stop.length; i++){
        let dict1 = stop[i];
        let name = dict1.stop_name;
        let replace = name.replaceAll('"', '');
        if(busStop.localeCompare(replace) == 0){
            return dict1.stop_id;
        }
    }
}

const id = handleStops1(stops());

function handleStops2(stops){
    for(let j = 0; j < stops.length; j++){
        let dict2 = stops[j];
        let fin_stop = dict2.stop_id;
        if(id == fin_stop){
            return dict2.arrival_time;
        }
    }
}

const arrival = handleStops2(stopTime());

console.log(arrival);

const arr_hour = parseInt(arrival.split(":")[0]);
const arr_min = parseInt(arrival.split(":")[1]);

const [hourMinute, period] = time.split(" ");
const [hour_am, mins] = hourMinute.split(":");

const hour = parseInt(hour_am);
const minute = parseInt(mins);

let amount_hour = 0;
let amount_min = 0;

if((period == "am" && hour != 12) || (period == "pm" && hour == 12)){
    let hour_left = arr_hour - hour;
    let mins_left = arr_min - minute;

    if(mins_left < 0 && hour_left > 0){
        mins_left = 60+mins_left;
        hour_left = hour_left - 1;
    }

    if(hour_left >= 0 && mins_left >= 0){
        amount_hour = hour_left;
        amount_min = mins_left;
    }
    else if(mins_left >= 0){
        amount_min = mins_left;
    }
    else{
        amount_hour = -1;
        amount_min = -1;
    }

}
else{
    const hour_left = (arr_hour*2) - hour;
    const mins_left = arr_min - minutes;

    if(mins_left < 0 && hour_left > 0){
        mins_left = 60-mins_left;
        hour_left = hour_left - 1;
    }

    if(hour_left >= 0 && mins_left >= 0){
        amount_hour = hour_left;
        amount_min = mins_left;
    }
    else if(mins_left >= 0){
        amount_min = mins_left;
    }
    else{
        amount_hour = -1;
        amount_min = -1;
    }
}

console.log(amount_hour + " hour " + amount_min + " minutes before the bus arrives");

const random_people = Math.floor(Math.random()*59)+1;
if(random_people/2 > 59/2){
    console.log("More than half full.");
}
else{
    console.log("Less than half full");
}

