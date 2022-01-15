import { useEffect, useState } from 'react';
import '../styles/App.css';
import SectionSelect from './SectionSelect';
import ArticleContainer from './ArticleContainer';
import DetailDisplay from './DetailDisplay';

function App() {
  const [articles, setArticles] = useState([]);
  const [displayArticle, setDisplayArticle] = useState({});

    useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2ehzLoKkCXtF2lzzbaK2MCq8En9hZaNA`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
      }
    return response.json()
  })
  .then(data => {
    const articleKeys = data.results.map((article, key) => {return { ...article, key: key }} );
    setArticles(articleKeys)
    console.log(articleKeys)
  })
  }, [])


  return (
    <div className="landing-page">
      <h1>Daily Headlines</h1>
      <div className="content">
        <ArticleContainer 
        articles={articles} setDisplayArticle={setDisplayArticle} />
        {/* {displayArticle ? <DetailDisplay displayArticle={displayArticle} /> : null} */}
      </div>
    </div>
  );
}

export default App;
