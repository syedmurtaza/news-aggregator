import moment from "moment";

export default function QueryMakerHelper(source, section, startDate, endDate) {

    let q = '';

    startDate = (startDate)? moment(startDate).format("YYYY-MM-DD"): null;
    endDate = (endDate) ? moment(endDate).format("YYYY-MM-DD"): null;
    section = section.replace('-','+');
     
    switch (source) {
        case "grd":
            if (section)
                q += `section=${section}&`;
            if (startDate)
                q += `from-date=${startDate}&`;
            if (endDate)
                q += `to-date=${endDate}&`;
            // if (page)
            //     q += `page=${page}&`;
            break;
        case "nyt":
            if (section && (startDate !== null || endDate !== null))
                q += `q=${section}&`;
            if (startDate)
                q += `begin_date=${startDate}&`;
            if (endDate)
                q += `end_date=${endDate}&`;
            // if (page)
            //     q += `page=${page}&`;
            break;
        case "newsapi":

            if (section)
                q += `q=${section}&sortBy=publishedAt&`;
            else
                q += `q=all&sortBy=publishedAt&`;

            if (startDate)
                q += `from=${startDate}&`;
            if (endDate)
                q += `to=${endDate}&`;
            // if (page)
            //     q += `page=${page}&`;
            break;
        default:
            break;

    }

    q = q.slice(0, -1);

    return q;
}
