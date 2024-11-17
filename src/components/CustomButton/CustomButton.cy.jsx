import React from 'react';
import CustomButton from  '../CustomButton/CustomButton'


describe('CustomButton Component', () => {
  it('renders the button with the correct title', () => {
    const title = 'Click Me';
    cy.mount(<CustomButton title={title} onPress={() => {}} />);

    cy.get('button.custom-button').should('exist').and('contain', title);
  });

  it('triggers onPress when clicked', () => {
    const onPressMock = cy.stub(); // Створюємо макет функції
    cy.mount(<CustomButton title="Click Me" onPress={onPressMock} />);

    cy.get('button.custom-button').click();

    cy.wrap(onPressMock).should('have.been.calledOnce');
  });

  it('applies the correct CSS class', () => {
    cy.mount(<CustomButton title="Styled Button" onPress={() => {}} />);

    cy.get('button.custom-button').should('have.class', 'custom-button');
  });
});
