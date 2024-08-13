import React from 'react';
import NewsItem from './NewsItem';
import NytNewsItem from './NytNewsItem';
import NewsAPIItem from './NewsAPIItem';

const NewsList = ({ newsData, source }) => {
    let ItemComponent;
    let CardTitle = '';

    switch (source) {
        case "grd":
            ItemComponent = NewsItem;
            CardTitle = 'The Guardian';
            break;
        case "nyt":
            ItemComponent = NytNewsItem;
            CardTitle = 'The New York Times';
            break;
        case "newsapi":
            ItemComponent = NewsAPIItem;
            CardTitle = 'The News API';
            break;
        default:
            return null; // or some default behavior
    }

    return (
        <>
            <h2 className='CardTitle p-3'>{CardTitle}</h2>
            <div className="row row-cols-1 row-cols-md-2 
                    row-cols-lg-3 g-4">
                {/* {newsData.map((item, index) => (
                    <ItemComponent key={index} item={item} />
                ))} */}

                {Array.isArray(newsData) && newsData.length > 0 ? (
                newsData.map((item, index) => (
                    <ItemComponent key={index} item={item} />
                ))
                ) : (
                <div className='text-center text-danger w-100 p-3 fw-bold'>No news available :(</div>
                )}

            </div>

        </>
    );
};

export default NewsList;