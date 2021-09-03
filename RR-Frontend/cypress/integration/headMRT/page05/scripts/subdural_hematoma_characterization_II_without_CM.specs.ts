import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { buttonShouldBeEnabled, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Subdural hematoma Characterization II without CM', () => {
    // Select Finding
    clickElement('hea_m_050105', true, 'radio');
    elementShouldBeEnabled('hea_m_050106-1');

    // Select Subdural hematoma
    selectDropdownOptionOS('hea_m_050106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_050107');
    buttonShouldBeEnabled('hea_m_050107');

    // Characterization II
    clickElement('hea_m_050344', true);

    elementShouldBeEnabled('hea_m_050284');
    elementShouldBeEnabled('hea_m_050287');
    elementShouldBeEnabled('hea_m_050288');

    elementShouldBeEnabled('hea_m_050359');
    elementShouldBeEnabled('hea_m_050360');
    elementShouldBeEnabled('hea_m_050362');
    elementShouldBeEnabled('hea_m_050369');

    elementShouldBeEnabled('hea_m_050459');
    elementShouldBeEnabled('hea_m_050460');
    elementShouldBeEnabled('hea_m_050461');
    elementShouldBeEnabled('hea_m_050462');

    elementShouldBeEnabled('hea_m_050464');

    // Select options column 2
    clickElement('hea_m_050284', true, 'checkbox');
    clickElement('hea_m_050287', true, 'checkbox');
    clickElement('hea_m_050288', true, 'checkbox');

    // Select options column 3
    clickElement('hea_m_050359', true, 'checkbox');
    clickElement('hea_m_050360', true, 'checkbox');

    clickElement('hea_m_050362', true, 'checkbox');

    elementShouldBeEnabled('hea_m_050364');
    elementShouldBeEnabled('hea_m_050365');
    clickElement('hea_m_050364', true, 'radio');
    clickElement('hea_m_050365', true, 'radio');

    elementShouldBeEnabled('hea_m_050367');

    // Enter 1 in the input field 'Midline shift'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '1');
    cy.byRRID('hea_m_050367')
      .type('1')
      .clear();
    // typeValueIntoInputField('hea_m_050367', 1);
    // checkInputFieldValue('hea_m_050367', 1);

    // TODO - max value for Midline shift to change from 20 to 99 - bug 22408
    // Enter 99 in the input field 'Midline shift'
    cy.get('#isMidlineShiftBlock > rr-number-input.ng-valid > .rr-number-input > .rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '20');
    cy.byRRID('hea_m_050367').type('20');
    // typeValueIntoInputField('hea_m_050367', 99);
    // checkInputFieldValue('hea_m_050367', 99);

    clickElement('hea_m_050369', true, 'checkbox');
    elementShouldBeEnabled('hea_m_050371');
    selectDropdownOptionOS('hea_m_050371', 3, true, true);
    clickElement('hea_m_050459', true, 'radio');
    clickElement('hea_m_050460', true, 'radio');
    clickElement('hea_m_050461', true, 'radio');
    clickElement('hea_m_050462', true, 'radio');

    clickElement('hea_m_050464', true, 'checkbox');
  });
});
