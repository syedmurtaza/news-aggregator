import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NewsList from '../../forms/NewsList';
import useFetchNews from "../../../../hooks/useFetchNews";
import { useMakePersonalizedHeading } from "../../../../hooks/useMakePersonalizedHeading";
import createMarkup from "../../../../helpers/CreateMarkupHelper";
import { useSelector } from 'react-redux';

import "../news/styles.css";

const NewsPage = () => {

    const filters = useSelector(state => state.newsFilters);
    const pinfo = useSelector((state) => state.pinfo);
    const { news, loading } = useFetchNews(filters);

    let PHeading = useMakePersonalizedHeading();

    PHeading = createMarkup(PHeading);

    return (
        <>
            <Helmet>
                <title>News Feed - News Aggregator</title>
            </Helmet>

            {PHeading && pinfo ? (
                <div dangerouslySetInnerHTML={PHeading} className='pb-3'>
                </div>) : (<></>)
            }
            <div className="NewListPage min-vh-100 text-center">
                {loading ? (
                    <div className='spinner-border text-success'>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    Object.entries(news).map(([key, newsData]) => (
                        <NewsList key={key} newsData={newsData} source={key} />
                    ))
                )}
            </div>
        </>
    );
}

export default NewsPage;