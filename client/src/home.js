const Home = () => {
    
 var testAPI = 'http://localhost:9000/testApi';
 //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7078616c440748bd49f735d765236ed0

  fetch(testAPI)
  .then(testObj => testObj.json())
  .then(html =>  {
    console.log(html);
    document.getElementById('data').innerHTML = html.value;
  })

  return (
    <div>
      <h1>Home Page</h1>
      <div id="data"></div>
    </div>
  );
};
  
export default Home;