import React, { useState, useEffect } from 'react';
import './App.css'; 
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://preview.contentful.com/spaces/4q3xv9m8zuzc?access_token=VYlVhC775F4AWYbYJWff40y7_PNIKUc3IDtSnSoAft8') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App" className="container">
      <h1>Contentful Preview API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
}

function App2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://cdn.contentful.com/spaces/4q3xv9m8zuzc?access_token=VYlVhC775F4AWYbYJWff40y7_PNIKUc3IDtSnSoAft8') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App2" className="container">
      <h1>Contentful Delivery API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
}


export default App;


