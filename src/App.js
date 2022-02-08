import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const key = '2846ab0079c24e64a76d350b7c28bf0c';

function App() {
  /*  
  const [data, setData] = useState(null);
  // const handleClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  //     .catch(err => console.error(err));
  // };
  const handleClick = async () => {
    try {
      let response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=accabe47ee454fe7b8fb83cbba9cf733',
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
*/
  return <NewsList />;
}

export default App;
