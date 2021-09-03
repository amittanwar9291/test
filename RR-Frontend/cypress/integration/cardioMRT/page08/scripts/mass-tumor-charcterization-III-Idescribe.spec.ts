import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldHaveGivenState,
  getAppConfig,
  selectFindingsDropdownOption,
  selectLocalizerMultiple
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 -> Bones/Tumor', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_080109', 'car_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Mass Tumor', () => {
    it('Mass Tumor -> Characterization III -> I describe', () => {
      // Go to Page 3 - CE - Yes
      NavigationPageObject.visitPageNumber(3);
      clickElement('uni_x_030104', true, 'radio');
      elementShouldHaveGivenState('true', 'uni_x_030104');

      // Go to Page 8
      NavigationPageObject.visitPageNumber(8);

      clickElement('car_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      cy.byRRID('car_m_080401').click();
      elementShouldBeEnabled('car_m_080216');
      elementShouldBeEnabled('car_m_080318');

      elementShouldBeEnabled('uni_08_002');
      elementShouldBeEnabled('uni_08_004');
      elementShouldBeEnabled('uni_08_007');

      selectFindingsDropdownOption('car_m_080216', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('car_m_080218');
      selectFindingsDropdownOption('car_m_080218', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('car_m_080219');
      selectFindingsDropdownOption('car_m_080221', '.ui-dropdown-label', 1, true, true);

      clickElement('car_m_080318', true, 'checkbox');
      elementShouldBeEnabled('car_m_080320');
      selectLocalizerMultiple('car_m_080320', 'g', 'path', 0, 2, true);
      selectLocalizerMultiple('car_m_080320', 'g', 'tspan', 0, 1, true);
      selectLocalizerMultiple('car_m_080320', 'g', 'tspan', 0, 2, true);
      selectLocalizerMultiple('car_m_080320', 'g', 'tspan', 0, 3, true);
      selectLocalizerMultiple('car_m_080320', 'g', 'tspan', 0, 4, true);
    });
  });
});
