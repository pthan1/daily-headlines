import { useEffect, useState } from 'react';
import '../styles/App.css';
import SectionSelect from './SectionSelect';
import ArticleContainer from './ArticleContainer';
import DetailDisplay from './DetailDisplay';

function App() {
  const [articles, setArticles] = useState([]);
  const [sections, setSections] = useState([]);
  const [filter, setFilter] = useState('');
  // const [displayArticle, setDisplayArticle] = useState({});
   
  



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
    const articleSelections = [];
    articleKeys.forEach(article => {
      if (!articleSelections.includes(article.section)) {
        articleSelections.push(article.section);
      }
      });
      setSections(articleSelections);
      console.log(sections)

  
    setArticles(articleKeys);
    console.log(articleKeys)
  });




  }, [])

  const handleFilter = (value) => {

  };



  return (
    <div className="landing-page">
      <h1>Daily Headlines</h1>
      <select name="sections" id="sections" onChange={value => handleFilter(value)}></select><br />
      <div className="content">
        <ArticleContainer 
        articles={articles}
        />
      </div>
    </div>
  );
}

export default App;
