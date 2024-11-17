describe('EventItem Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });



  it('should navigate to /info when the button is clicked', () => {
    cy.get('.event').first().within(() => {
      cy.get('.event-button').click();
    });
    cy.url().should('include', '/info');
  });
});

describe('CustomButton Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it('should render the CustomButton and trigger onPress', () => {
    const buttonText = 'Load more';

    cy.get('.custom-button').contains(buttonText).click();

    cy.get('.event-items').should('exist');
  });
});
