import react from "react";
import "../styles/DetailDisplay.css"

const DetailDisplay = ({abstract, byline, pubished_date, short_url}) => {

  return (
    <div className="article-display">
      <div className="right">
      <hr />
        {byline} <br /> <br />
        {abstract}<br />
        {pubished_date}<br />
        <a href={short_url}>Link to Article</a>
      </div>
    </div>
  )
}


export default DetailDisplay;