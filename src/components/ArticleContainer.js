import {useEffect, useState} from 'react';
// import { SearchContext } from '../context/SearchContext';
import ArticleCard from './ArticleCard'
import '../styles/ArticleContainer.css'


const ArticleContainer = ({articles}) => {
  // const { } = useContext(SearchContext)



  const articleCards = articles.map((result, key) => { 
    return <ArticleCard
          id={key}
          // setDisplayArticle={setDisplayArticle}
          title={result.title}
          abstract={result.abstract}
          byline={result.byline}
          published_date={result.published_date}
          image_url={result.multimedia[0].url}
          // displayArticle={displayArticle}
          articles={articles}
          />
  })

  return (
    <div className="article-container">
      {articleCards}
    </div>
  )
}

export default ArticleContainer;
