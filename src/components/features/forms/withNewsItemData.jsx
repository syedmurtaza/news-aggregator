import React from 'react';
import moment from 'moment';

const withNewsItemData = (sectionName, title, url, date, image) => {
    return function NewNewsItem() {
        date = moment(date).format("MMMM DD, YYYY");

        image = image?? process.env.PUBLIC_URL + '/images/news_alt.jpg';

        const item = {
            sectionName: sectionName,
            webTitle: title,
            webUrl: url,
            webPublicationDate: date,
            webImage: image
        };

        return (
            <div className="col">
                <div className="card CardSize float-left">
                    {item.webImage && <img src={item.webImage} title={item.webTitle} alt={item.webTitle} className='card-img card-img-top' />}
                    <div className="card-body">
                        {item.webTitle && <h6 className="card-title">{item.webTitle}</h6>}
                        <p className="card-text">{item.webPublicationDate}</p>
                        <a href={item.webUrl} target="_blank" rel="noopener noreferrer">Read more</a>

                    </div>
                    {item.sectionName && <div className="card-footer">
                        <small className="text-muted fw-bold">{item.sectionName}</small>
                    </div>}

                </div>
            </div>

        );
    };
};

export default withNewsItemData;