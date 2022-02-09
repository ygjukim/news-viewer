import React, { useCallback, useState } from 'react';
//import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Outlet } from '../node_modules/react-router-dom/index';
import CategoryLinks from './components/CalegoryLinks';

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

  // const [category, setCategory] = useState('all');
  // const handleSelect = useCallback((category) => {
  //   console.log('selected category : ' + category);
  //   setCategory(category);
  // }, []);
  // return (
  //   <>
  //     <Categories category={category} onSelect={handleSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
  return (
    <>
      <CategoryLinks />
      <Outlet />
    </>
  );
}

export default App;
