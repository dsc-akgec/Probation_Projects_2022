import React from "react";
import "./news-article.css"
function NewsArticle({ data }) {
  return (
    <div className="news-column">
      <img className="news-img" src={data.urlToImage} alt=""></img>
      <h1 className="news-title">{data.title.slice(0,50)}...</h1>
      <p className="news-desc">{data.description.slice(0,100)}...</p>
      {/* <span className="news-author">{data.author}</span> <br /> */}
      <span className="news-published">{data.publishedAt}</span>
      {/* <span className="news-source">{data.source.name}</span> */}
      <br></br>
      <br></br>
      <a className="news-link" href={data.url}>Read more...</a>
      
    </div>
  );
}

export default NewsArticle;