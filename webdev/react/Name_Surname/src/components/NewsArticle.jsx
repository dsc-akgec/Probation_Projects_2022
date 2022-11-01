import React from 'react'

function NewsArticle({data}) {
  return (
    <div className='news_article'>
        <img src={data.urlToImage} alt="" />
        <h1 className='news_heading'>{data.title}</h1>
        <hr/>
        
        <span className='news_desc'>{data.description}</span>
        <span><a href="{data.url}">Read Full News</a></span>
        
        <div className='author'><span className='news_author'>{data.author}</span>
        <span className='news_date'>{data.publishedAt}</span>
        
        </div>
    </div>
  )
}

export default NewsArticle