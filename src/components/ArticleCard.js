import React from 'react'
// import './ArticleCard.css'
// import { addRepo } from '../apiCalls'
// import { SearchContext } from '../context/SearchContext'

const ArticleCard = ({id, title, setDisplayArticle, abstract, byline, published_date, image_url}) => {

  const handleClick = (e) => {
    e.preventDefault();
    const displayArticle = {
      title,
      abstract,
      byline,
      published_date,
      image_url
    }

    setDisplayArticle(displayArticle);
  }

  return (
    // <>CARD</>
    <div className="repo-card">
      {title}
      <button onClick={(e) => handleClick(e)}>Read More</button>
    </div>
  )
}

export default ArticleCard
