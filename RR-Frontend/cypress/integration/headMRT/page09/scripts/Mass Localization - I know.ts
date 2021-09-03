import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_CerebrospinalFluidSpace.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Localization - I know', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Mass Localization from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 2, true, true);
    elementShouldBeEnabled('hea_m_090107');
    /* elementShouldBeEnabled('hea_m_090111');
    elementShouldBeEnabled('hea_m_090112'); */

    // Click I know radio button
    // clickElement('hea_m_090112', true, 'radio');
    cy.get(':nth-child(2) > .relative-container > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box').click();

    elementShouldBeEnabled('hea_m_090239');
    elementShouldBeEnabled('hea_m_090323');
    elementShouldBeEnabled('hea_m_090424');
    elementShouldBeEnabled('hea_m_090427');
    elementShouldBeEnabled('hea_m_090428');
    elementShouldBeEnabled('hea_m_090429');
    elementShouldBeEnabled('hea_m_090430');
    elementShouldBeEnabled('hea_m_090518');
    elementShouldBeEnabled('hea_m_090519');

    // Select diagnosis from Differential diagnosis 1
    selectDropdownOptionOS('hea_m_090239', '4', true, true);
    elementShouldBeEnabled('hea_m_090240');
    clickElement('hea_m_090240', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090240');
    elementShouldBeEnabled('hea_m_090241');
    elementShouldBeEnabled('hea_m_090242');
    clickElement('hea_m_090241', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090241');
    clickElement('hea_m_090242', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090242');

    // Localisation
    clickElement('hea_m_090323', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090323');
    elementShouldBeEnabled('hea_m_090325');
    elementShouldBeEnabled('hea_m_090326');
    elementShouldBeEnabled('hea_m_090327');
    elementShouldBeEnabled('hea_m_090328');
    elementShouldBeEnabled('hea_m_090329');
    elementShouldBeEnabled('hea_m_090331');
    elementShouldBeEnabled('hea_m_090332');
    elementShouldBeEnabled('hea_m_090333');
    elementShouldBeEnabled('hea_m_090334');
    elementShouldBeEnabled('hea_m_090335');

    clickElement('hea_m_090325', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090325');
    clickElement('hea_m_090326', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090326');
    clickElement('hea_m_090327', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090327');
    clickElement('hea_m_090328', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090328');
    clickElement('hea_m_090329', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090329');
    clickElement('hea_m_090331', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090331');
    clickElement('hea_m_090332', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090332');
    clickElement('hea_m_090333', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090333');
    clickElement('hea_m_090334', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090334');
    clickElement('hea_m_090335', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090335');

    clickElement('hea_m_090424', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090424');
    elementShouldBeEnabled('hea_m_090425');
    elementShouldBeEnabled('hea_m_090426');
    clickElement('hea_m_090425', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090425');
    clickElement('hea_m_090426', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090426');

    clickElement('hea_m_090427', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090427');
    clickElement('hea_m_090428', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090428');
    clickElement('hea_m_090429', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090429');
    clickElement('hea_m_090430', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090430');
    elementShouldBeEnabled('hea_m_090431');
    elementShouldBeEnabled('hea_m_090452');
    clickElement('hea_m_090431', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090431');
    clickElement('hea_m_090452', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090452');

    clickElement('hea_m_090518', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090518');
    clickElement('hea_m_090519', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090519');
    elementShouldBeEnabled('hea_m_090520');
    elementShouldBeEnabled('hea_m_090521');
    elementShouldBeEnabled('hea_m_090522');
    elementShouldBeEnabled('hea_m_090523');
    elementShouldBeEnabled('hea_m_090524');
    elementShouldBeEnabled('hea_m_090525');
    elementShouldBeEnabled('hea_m_090526');
    elementShouldBeEnabled('hea_m_090527');
    elementShouldBeEnabled('hea_m_090528');
    elementShouldBeEnabled('hea_m_090529');

    clickElement('hea_m_090520', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090520');
    clickElement('hea_m_090521', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090521');
    clickElement('hea_m_090522', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090522');
    clickElement('hea_m_090523', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090523');
    clickElement('hea_m_090524', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090524');
    clickElement('hea_m_090525', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090525');
    clickElement('hea_m_090526', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090526');
    clickElement('hea_m_090527', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090527');
    clickElement('hea_m_090528', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090528');
    clickElement('hea_m_090529', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090529');
  });
});
