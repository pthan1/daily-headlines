import { useEffect, useState } from 'react';
import '../styles/App.css';
import ArticleContainer from './ArticleContainer';

function App() {
  const [articles, setArticles] = useState([]);
  const [sections, setSections] = useState([]);
  const [filtered, setFiltered] = useState();
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

    setArticles(articleKeys);
  }, []);


  }, [])
  const selectOptions = sections.map(section => {return <option value={section}>{section}</option>})

  const handleFilter = (e) => {
    
    
    if (e.target.value !== 'all') { 
      let filtered;
      console.log('value', e.target.value);
      filtered = articles.filter(article => {
      return article.section === e.target.value;
    })
    setFiltered(filtered);
    return filtered;
  }
  if (e.target.value === 'all') {  
    setFiltered();
    return articles;
  }

    
  };



  return (
    <div className="landing-page">
      <h1>Daily Headlines</h1>
      <label for="sections">Filter by Section: </label> 
      <select name="sections" id="sections" onChange={handleFilter} defaultValue="all">
       <option value="all">Show All</option> 
            {selectOptions}</select><br />
            
      <div className="content">
        <ArticleContainer 
        articles={!filtered ? articles : filtered}
        />
      </div>
    </div>
  );
}

export default App;
