import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, selectSliderValueAndCheckIt, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 05 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Diffuse changes Characterization', () => {
    // Go to Page 3
    NavigationPageObject.visitPageNumber(3);
    cy.get('rr-cm-reinforced-card')
      .shadowFind('p-radiobutton')
      .should('have.class', 'ng-valid');
    clickElement('uni_x_030104', true, 'radio');

    // Select Sequences - Individual
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    elementShouldBeEnabled('uni_x_030210-1');

    // Select DWI
    selectDropdownOptionOS('uni_x_030210-1', 2, true, true);

    // Go to Page 05
    NavigationPageObject.visitPageNumber(5);

    // Select Finding and Diffuse changes
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    selectDropdownOptionOS('hea_m_050106-1', 1, true, true);
    elementShouldBeEnabled('hea_m_050107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Select Characterization
    clickElement('hea_m_050326', true);
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-1-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Enabled options 2nd column
    elementShouldBeEnabled('hea_m_050256');
    elementShouldBeEnabled('hea_m_050262');
    elementShouldBeEnabled('hea_m_050265');

    // Enabled options 3rd column
    elementShouldBeEnabled('hea_m_050341');
    elementShouldBeEnabled('hea_m_050343');

    // Enabled options 4th column
    elementShouldBeEnabled('hea_m_0504207');
    elementShouldBeEnabled('hea_m_0504212');
    elementShouldBeEnabled('hea_m_0504213');

    // TODO - uncomment code below when implemented
    /*
    // Enabled options 5th column
    elementShouldBeEnabled('hea_m_0505211');
    elementShouldBeEnabled('hea_m_0505212');
    elementShouldBeEnabled('hea_m_0505213');
    */

    // Select options 2nd column
    clickElement('hea_m_050256', true, 'checkbox');
    elementShouldBeEnabled('hea_m_050258');

    // Enter 1 in the input field 'Meninges width'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050258')
      .type('1')
      .clear();

    // Enter 20 in the input field 'Meninges width'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '20');
    cy.byRRID('hea_m_050258').type('20');

    // T1w
    selectSliderValueAndCheckIt('hea_m_050262', 0, 3);

    // T2w
    selectSliderValueAndCheckIt('hea_m_050265', 0, 3);

    // Select options in 3rd column
    clickElement('hea_m_050341', true, 'checkbox');
    clickElement('hea_m_050343', true, 'checkbox');

    // Select options in 4th column
    clickElement('hea_m_0504207', true, 'checkbox');
    elementShouldBeEnabled('hea_m_0504209');
    elementShouldBeEnabled('hea_m_0504211');

    // Enter 1 in the input field 'Max. extension*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_0504209')
      .type('1')
      .clear();

    // Enter 99 in the input field 'Max. extension*'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '20');
    cy.byRRID('hea_m_0504209').type('99');

    // Capsule
    clickElement('hea_m_0504211', true, 'checkbox');

    clickElement('hea_m_0504212', true, 'checkbox');
    clickElement('hea_m_0504213', true, 'checkbox');

    // TODO - uncomment code below when implemented
    // Code below is not yet implemented in the app
    /*
    // Select No
    clickElement('hea_m_0505211', true, 'radio');

    // Select Weak
    clickElement('hea_m_0505212', true, 'radio');
    elementShouldBeEnabled('hea_m_0505214');
    elementShouldBeEnabled('hea_m_0505215');
    elementShouldBeEnabled('hea_m_0505217');
    elementShouldBeEnabled('hea_m_0505218');

    // Select Homogeneous Heterogeneous
    clickElement('hea_m_0505214', true, 'radio');
    clickElement('hea_m_0505215', true, 'radio');

    // Select Pachymeninges, Leptomeninges
    clickElement('hea_m_0505217', true, 'radio');
    clickElement('hea_m_0505218', true, 'radio');

    // Select Significant
    clickElement('hea_m_0505213', true, 'radio');
    elementShouldBeEnabled('hea_m_0505214');
    elementShouldBeEnabled('hea_m_0505215');
    elementShouldBeEnabled('hea_m_0505217');
    elementShouldBeEnabled('hea_m_0505218');

    // Select Homogeneous Heterogeneous
    clickElement('hea_m_0505214', true, 'radio');
    clickElement('hea_m_0505215', true, 'radio');

    // Select Pachymeninges, Leptomeninges
    clickElement('hea_m_0505217', true, 'radio');
    clickElement('hea_m_0505218', true, 'radio');
    */
  });
});
