describe('Calculator Project', () => {
  beforeEach(() => {
    cy.visit('http://www.localhost:5173/');
  });

  it('should be able to complete adding operation', () => {

    // grab -  number, addition, equal operations and display value (5+5)
    const five = cy.get('.number-5');
    const addition = cy.get('.addition');
    const equal = cy.get('.equal');
    const display = cy.get('.value');


    // click - number, addition, numbered again and equal operations (5+5)
    five.click();
    addition.click();
    five.click();
    equal.click();

    // should - display solution to number + number = number (10)
    display.should('have.text', '10');
  });

  it('should be able to complete subtraction operation', () => {

    // grab -  number, subtraction, equal operations and display value (5-5)
    const five = cy.get('.number-5');
    const subtraction = cy.get('.subtraction');
    const equal = cy.get('.equal');
    const display = cy.get('.value');


    // click - number, subtraction, numbered again and equal operations (5-5)
    five.click();
    subtraction.click();
    five.click();
    equal.click();

    // should - display solution to number + number = number (10)
    display.should('have.text', '0');
  });

  it('should be able to complete multiplication operation', () => {

    // grab -  number, multiplication, equal operations and display value (5+5)
    const five = cy.get('.number-5');
    const multiplication = cy.get('.multiplication');
    const equal = cy.get('.equal');
    const display = cy.get('.value');


    // click - number, multiplication, numbered again and equal operations (5+5)
    five.click();
    multiplication.click();
    five.click();
    equal.click();

    // should - display solution to number + number = number (10)
    display.should('have.text', '10');
  });

  it('should be able to complete division operation', () => {

    // grab -  number, division, equal operations and display value (5+5)
    const five = cy.get('.number-5');
    const division = cy.get('.division');
    const equal = cy.get('.equal');
    const display = cy.get('.value');


    // click - number, addition, numbered again and equal operations (5+5)
    five.click();
    division.click();
    five.click();
    equal.click();

    // should - display solution to number + number = number (10)
    display.should('have.text','1');
  });

  it('should be able to complete division operation', () => {

    // grab -  number, division, equal operations and display value (5+5)
    const five = cy.get('.number-5');
    const division = cy.get('.division');
    const equal = cy.get('.equal');
    const display = cy.get('.value');


    // click - number, addition, numbered again and equal operations (5+5)
    five.click();
    division.click();
    five.click();
    equal.click();

    // should - display solution to number + number = number (10)
    display.should('have.text','1');
  });

  

});