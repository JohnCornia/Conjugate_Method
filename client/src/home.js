import Table from "./components/Table";
import Button from './components/Button';
const Home = () => {
    
 var getWorkout = 'http://localhost:9000/home/';
 //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7078616c440748bd49f735d765236ed0
 var workoutData;

  fetch(getWorkout)
  .then(testObj => testObj.json())
  .then(html =>  {
    console.log(html);
    workoutData = 
    html[0].main_lift + " " + 
    html[0].accessory_lifts + " " + 
    html[1].accessory_lifts + " " + 
    html[2].accessory_lifts;
    console.log(workoutData);
  })

  return (
    <div>
      <h1>Home Page</h1>
      <Table/>
      <Button/>
    </div>
  );
};
  
export default Home;