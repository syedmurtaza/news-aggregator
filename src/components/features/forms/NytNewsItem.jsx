import React from 'react';
import withNewsItemData from './withNewsItemData';

const NytNewsItem = ({ item }) => {

    const NewsData = withNewsItemData(
        item.section,
        item.title,
        item?.url,
        item.published_date,
        item.multimedia[2]?.url
      );

      return (
        <NewsData />
    );
};

export default NytNewsItem;