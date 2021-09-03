import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 02 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Medical History Male', () => {
    // Select Male radio button from Page 01
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010205');

    // Go to Page 02
    NavigationPageObject.visitPageNumber(2);

    // Medical History tab is preselected //TODO

    elementShouldBeEnabled('pel_m_020108');
    elementShouldBeEnabled('pel_m_020114');
    elementShouldBeEnabled('pel_m_020115');

    elementShouldBeEnabled('pel_m_020202');

    elementShouldBeEnabled('pel_m_020302');

    elementShouldBeEnabled('pel_m_020502');
    elementShouldBeEnabled('pel_m_020503');
    elementShouldBeEnabled('pel_m_020504');

    // Enter 0 in the input field 'PSA-Wert'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'min')
      .should('equal', '0');
    cy.byRRID('pel_m_020108')
      .type('0')
      .clear();

    // Enter 50 in the input field 'PSA-Wert'
    cy.get('rr-number-input')
      .shadowFind('.rr-number-input__input')
      .invoke('attr', 'max')
      .should('equal', '50');
    cy.byRRID('pel_m_020108').type('50');

    elementShouldBeEnabled('pel_m_020111');
    elementShouldBeEnabled('pel_m_020112');
    selectDropdownOptionOS('pel_m_020111', 3, true, true);
    selectDropdownOptionOS('pel_m_020112', 3, true, true);
    selectDropdownOptionOS('pel_m_020114', 5, true, true);
    selectDropdownOptionOS('pel_m_020115', 3, true, true);

    // Click on Therapy checkbox
    clickElement('pel_m_020202', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020203');
    elementShouldBeEnabled('pel_m_020208');

    // Click on Radiotherapy checkbox
    clickElement('pel_m_020203');
    elementShouldBeEnabled('pel_m_020204');
    elementShouldBeEnabled('pel_m_020205');

    clickElement('pel_m_020204');
    clickElement('pel_m_020205', true, 'radio');
    elementShouldBeEnabled('pel_m_020206');
    elementShouldBeEnabled('pel_m_020207');
    selectDropdownOptionOS('pel_m_020206', 3, true, true);
    selectDropdownOptionOS('pel_m_020207', 3, true, true);

    // Click on Hormone-ablative checkbox
    clickElement('pel_m_020208');
    elementShouldBeEnabled('pel_m_020209');
    elementShouldBeEnabled('pel_m_020210');

    clickElement('pel_m_020209');
    clickElement('pel_m_020210', true, 'radio');
    elementShouldBeEnabled('pel_m_020211');
    elementShouldBeEnabled('pel_m_020212');
    selectDropdownOptionOS('pel_m_020211', 8, true, true);
    selectDropdownOptionOS('pel_m_020212', 1, true, true);

    // Click on Neoadjuvant therapy checkbox
    clickElement('pel_m_020302');
    elementShouldBeEnabled('pel_m_020303');
    elementShouldBeEnabled('pel_m_020304');
    elementShouldBeEnabled('pel_m_020307');
    elementShouldBeEnabled('pel_m_020308');

    clickElement('pel_m_020303', true, 'radio');
    clickElement('pel_m_020304', true, 'radio');
    elementShouldBeEnabled('pel_m_020305');
    elementShouldBeEnabled('pel_m_020306');
    selectDropdownOptionOS('pel_m_020305', 8, true, true);
    selectDropdownOptionOS('pel_m_020306', 1, true, true);
    clickElement('pel_m_020307', true, 'checkbox');
    clickElement('pel_m_020308', true, 'checkbox');

    // Select 5th column items

    clickElement('pel_m_020502', true, 'checkbox');
    clickElement('pel_m_020503', true, 'checkbox');
    clickElement('pel_m_020504', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020505');
    elementShouldBeEnabled('pel_m_020506');
    clickElement('pel_m_020505', true, 'radio');
    clickElement('pel_m_020506', true, 'radio');
  });
});
