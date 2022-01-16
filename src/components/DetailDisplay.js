import react from "react";
import "../styles/DetailDisplay.css"

const DetailDisplay = ({abstract, byline, pubished_date, image_url}) => {

  return (
    <div className="article-display">
      <div className="left">
        <img src={image_url} alt="image" />
      </div>
      <div className="right">
        {byline} <br />
        {abstract}<br />
        {pubished_date}
      </div>
    </div>
  )
}


export default DetailDisplay;