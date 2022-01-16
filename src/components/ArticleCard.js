import React, {useState} from 'react'
import '../styles/ArticleCard.css';
import DetailDisplay from './DetailDisplay';

const ArticleCard = ({id, title, abstract, byline, published_date, image_url}) => {
  const [displayToggle, setDisplayToggle] = useState(false);


  const handleClick = () => {
    setDisplayToggle(!displayToggle);
  }

  return (
    <div className="article-card">
      <h2>{title}</h2>
      <br /> 
      <img src={image_url} alt="image" />
      <br />
      <button onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}> {displayToggle ? 'Collapse' : 'Read More'} </button>
    {displayToggle ? <DetailDisplay abstract={abstract}
    byline={byline}
    published_date={published_date}
    image_url={image_url}
     /> : null}
    </div>
  )
}

export default ArticleCard
