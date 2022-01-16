// const {REACT_APP_API_KEY} = process.env;

describe('Daily Headlines app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    ;
  })

  it('Should display heading', () => {
     cy.get('h1').contains('Daily Headlines')
  })


    it('Should display section dropdown', () => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2ehzLoKkCXtF2lzzbaK2MCq8En9hZaNA', { fixture: 'articles' });

      cy.get('select').select(1).should('have.value', 'health');
  })


  // it('Should display headlines', () => {
  
  // })

  // it('Should filter headlines by section when user chooses a section in dropdown', () => {
   
  //   })

  //   it('Should show all articles when filters are removed', () => {
   
  //   })
  })
