describe('Our Iobeat Web Application', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.screenshot();
  });
});

export {};
