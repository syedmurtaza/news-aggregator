import moment from "moment";

export default function QueryMakerHelper(source, section, startDate, endDate, page) {

    let q = '';
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    console.log("endDate===="+ endDate);
    switch (source) {
        case "grd":
            if(section)
                q+= `section=${section}&`;
            if(startDate)
                q+= `from-date=${startDate}&`;
            if(endDate)
                q+= `to-date=${endDate}&`;
            if(page)
                q+= `page=${page}&`;
            break; 
        case "nyt":
            break;
        case "newsapi":
            break;

    }

    q = q.slice(0, -1); 
    console.log(q);
    return q;  
}
