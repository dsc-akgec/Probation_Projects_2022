import React, {useContext} from "react";
import {NewsContext} from "../NewsContext"
import NewsArticle from "./NewsArticle"
import loading from "./Spinner-2.gif"
import "./news.css"

// import PropTypes from 'prop-types'

// defaultProps={
//   country: 'in',
//   category:'general',
//   pageSize:8,
// }
// PropTypes={
//   country:PropTypes.string,
//   pageSize: PropTypes.number,
//   category:PropTypes.string,
// }


function News(props){
 
 
    const {data}=useContext(NewsContext);
    console.log(data);
    return ( 
      <div>
        <div className="all-news">
          {data
            ? data.articles.map((news) => (
                // {if(props.category=="entertainment"){}}
                <NewsArticle data={news} key={news.url} />
              ))
            : <img src={loading} alt="Loading"></img>}
        </div>
      </div>
    );
}

export default News;