import React from 'react';
import withNewsItemData from './withNewsItemData';

const NewsAPIItem = ({ item }) => {

    const NewsData = withNewsItemData(
        item.section,
        item.title,
        item.url,
        item.published_date,
        item.urlToImage
      );

      return (
        <NewsData />
    );
};

export default NewsAPIItem;