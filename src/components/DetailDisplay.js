import react from "react";
import "../styles/DetailDisplay.css"

const DetailDisplay = ({displayArticle}) => {

  return (
    <div className="article-display">
      <h2>{displayArticle.title}</h2>
      <img src={displayArticle.image_url} alt="image" /> <br />
      <span>{displayArticle.byline}</span> <br />
      <span>{displayArticle.abstract}</span><br />
      <span>{displayArticle.published_date}</span>
    </div>
  )
}


export default DetailDisplay;