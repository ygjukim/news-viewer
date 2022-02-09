import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/index';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  let { category } = useParams();
  if (!category) {
    category = 'all';
  }
  return <NewsList category={category} />;
};

export default NewsPage;
