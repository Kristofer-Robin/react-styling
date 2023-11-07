describe('Course Goals App', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('http://localhost:3000/');
  });

  it('renders the input form', () => {
    cy.get('#goal-form input').should('exist');
  });

  it('renders the initial goals', () => {
    cy.get('#goals li').should('have.length', 2);
  });

  it('adds a new goal', () => {
    const newGoal = 'Learn React testing with Cypress';
    cy.get('#goal-form input').type(newGoal).type('{enter}');
    cy.get('#goals li').contains(newGoal).should('be.visible');
  });
  it('deletes a goal', () => {
    // check that there are 2 goals in the list
    cy.get('#goals li').should('have.length', 2);

    // click on the delete button of the last goal in the list
    cy.get('#goals > ul > li:nth-child(2)').click();

    // check that there is now only 1 goal in the list
    cy.get('#goals li').should('have.length', 1);

    // check that the deleted goal is no longer visible
    cy.get('#goals li').contains('Finish the course!').should('not.exist');
  });



});