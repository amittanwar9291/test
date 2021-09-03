import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Meninges.url + '/' + pageId);
        });
      });
    });
  });

  it('Epidural hematoma', () => {
    // Select Finding
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    // Select Epidural hematoma
    selectDropdownOptionOS('hea_m_050106-1', 3, true, true);

    // Enabled options in 2nd column
    elementShouldBeEnabled('hea_m_050290');
    elementShouldBeEnabled('hea_m_050291');
    elementShouldBeEnabled('hea_m_050292');

    elementShouldBeEnabled('hea_m_050294');
    elementShouldBeEnabled('hea_m_050295');
    elementShouldBeEnabled('hea_m_050296');
    elementShouldBeEnabled('hea_m_050297');
    elementShouldBeEnabled('hea_m_050298');

    // Enabled options in 3rd column
    elementShouldBeEnabled('hea_m_050376');
    elementShouldBeEnabled('hea_m_050386');
    elementShouldBeEnabled('hea_m_050384');
    elementShouldBeEnabled('hea_m_050385');

    // Enabled options in 4th column
    elementShouldBeEnabled('hea_m_050466');
    elementShouldBeEnabled('hea_m_050468');
    elementShouldBeEnabled('hea_m_050469');
    elementShouldBeEnabled('hea_m_050470');
    elementShouldBeEnabled('hea_m_050471');
    elementShouldBeEnabled('hea_m_050472');

    // Select options in column 2
    clickElement('hea_m_050290', true, 'checkbox');
    clickElement('hea_m_050291', true, 'checkbox');
    clickElement('hea_m_050292', true, 'checkbox');

    clickElement('hea_m_050294', true, 'checkbox');
    clickElement('hea_m_050295', true, 'checkbox');
    clickElement('hea_m_050296', true, 'checkbox');
    clickElement('hea_m_050297', true, 'checkbox');
    clickElement('hea_m_050298', true, 'checkbox');

    // Elements in 3rd column

    // Enter 1 in the input field 'Size*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050376')
      .type('1')
      .clear();

    // Enter 250 in the input field 'Size*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '250');
    cy.byRRID('hea_m_050376').type('250');
    elementShouldBeEnabled('hea_m_050379');

    // Enter 1 in the input field '2nd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050379')
      .type('1')
      .clear();

    // Enter 250 in the input field '2nd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '250');
    cy.byRRID('hea_m_050379').type('250');
    elementShouldBeEnabled('hea_m_050382');

    // Enter 1 in the input field '3rd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050382')
      .type('1')
      .clear();

    // Enter 250 in the input field '3rd plane'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '250');
    cy.byRRID('hea_m_050382').type('250');

    clickElement('hea_m_050386', true, 'checkbox');
    clickElement('hea_m_050384', true, 'checkbox');
    clickElement('hea_m_050385', true, 'checkbox');

    // Select elements in 4th column
    clickElement('hea_m_050466', true, 'checkbox');
    clickElement('hea_m_050468', true, 'checkbox');
    clickElement('hea_m_050469', true, 'checkbox');
    clickElement('hea_m_050470', true, 'checkbox');
    clickElement('hea_m_050471', true, 'checkbox');
    clickElement('hea_m_050472', true, 'checkbox');
  });
});
