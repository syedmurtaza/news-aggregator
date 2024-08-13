import React from 'react';
import withNewsItemData from './withNewsItemData';

const NewsItem = ({ item }) => {

    const NewsData = withNewsItemData(
        item.sectionName,
        item.webTitle,
        item.webUrl,
        item.webPublicationDate,
        null
      );

      return (
        <NewsData />
    );
};

export default NewsItem;