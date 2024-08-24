import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://preview.contentful.com/spaces/4q3xv9m8zuzc?access_token=USE AUTH TOKEN') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>My React App</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
}

export default App;
