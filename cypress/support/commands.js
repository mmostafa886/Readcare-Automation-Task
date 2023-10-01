// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('getElementText', { prevSubject: true }, (subject) => {
//     return cy.wrap(subject).invoke('text').then(text => {
//       return text;
//     });
//   });

Cypress.Commands.add('getElementText', (selector) => {
  return cy.get(selector).invoke('text').then(text => text.trim());
});


  Cypress.Commands.add('compareElementText', { prevSubject: true }, (subject1, subject2) => {
    return cy.wrap(subject1).invoke('text').then(text1 => {
      return cy.wrap(subject2).invoke('text').then(text2 => {
        return text1.trim() === text2.trim();
      });
    });
  });



  Cypress.Commands.add('getTextAndStore', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).invoke('text').then(text => {
      Cypress.env('elementText', text.trim()); // Store the text in a global variable
      return text.trim(); // Return the text for immediate use
    });
  });
  
  
  