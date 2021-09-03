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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.overwrite('should', (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
        'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
        'have.color': compareColor(args[0], 'color'),
    };
  
   
    if (typeof expectation === 'string' && customMatchers[expectation]) {
        return originalFn(subject, customMatchers[expectation]);
    }
    return originalFn(subject, expectation, ...args);
});

Cypress.Commands.add('byRRID', (value, options='') => {
    return cy.get(`[rr-id="${value}"] `+ options);
});

Cypress.Commands.add('shadowRRIdFind', (parentElement, value, options='') => {
    return cy.get(parentElement).shadowFind(`[rr-id="${value}"] `+ options);
});

Cypress.Commands.add("signIn", (username, password, url, instituteId) => {
    window.sessionStorage.clear();
    return cy.request('POST', url, {
        application: "RR",
        password: password,
        username: username,
        rememberMe: false,
        instituteId
    }).then(res => {
        expect(res.status).to.eq(200)
        let token = {
            accessToken: res.body.accessToken,
            refreshToken: res.body.refreshToken,
            clientToken: res.body.clientToken
        }
        window.sessionStorage.setItem('token', JSON.stringify(token));
        return res
    });
});

Cypress.Commands.add('shouldBeEnabled', {
    prevSubject: true
}, (subject, options) => {
    subject.should('not.have.css','pointer-events','none');
});

const compareColor = (color, property) => (targetElement) => {
    const tempElement = document.createElement('div');
    tempElement.style.color = color;
    tempElement.style.display = 'none'; 
    document.body.appendChild(tempElement); 
  
    const tempColor = getComputedStyle(tempElement).color;
    const targetColor = getComputedStyle(targetElement[0])[property];
  
    document.body.removeChild(tempElement); 
  
    expect(tempColor).to.equal(targetColor);
};
