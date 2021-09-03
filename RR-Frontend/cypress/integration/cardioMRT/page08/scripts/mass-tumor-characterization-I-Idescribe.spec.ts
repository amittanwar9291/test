import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldHaveGivenState,
  getAppConfig,
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
    it('Mass Tumor -> Characterization I', () => {
      // Go to Page 3 - CE - Yes
      NavigationPageObject.visitPageNumber(3);
      clickElement('uni_x_030104', true, 'radio');
      elementShouldHaveGivenState('true', 'uni_x_030104');

      // Go to Page 8
      NavigationPageObject.visitPageNumber(8);

      clickElement('car_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('car_m_080109');
      elementShouldBeEnabled('car_m_080301');
      elementShouldBeEnabled('car_m_080401');
      elementShouldBeEnabled('car_m_080204');
      elementShouldBeEnabled('car_m_080206');

      elementShouldBeEnabled('car_m_080305');
      elementShouldBeEnabled('car_m_080307');

      elementShouldBeEnabled('car_m_080406');
      elementShouldBeEnabled('car_m_080407');
      elementShouldBeEnabled('car_m_080408');
      elementShouldBeEnabled('car_m_080403');
      elementShouldBeEnabled('car_m_080404');

      elementShouldBeEnabled('car_m_080502');
      elementShouldBeEnabled('car_m_080503');

      selectLocalizerMultiple('car_m_080204', 'g', 'path', 0, 2, true);
      selectLocalizerMultiple('car_m_080204', 'g', 'tspan', 0, 1, true);
      selectLocalizerMultiple('car_m_080204', 'g', 'tspan', 0, 2, true);
      selectLocalizerMultiple('car_m_080204', 'g', 'tspan', 0, 3, true);
      selectLocalizerMultiple('car_m_080204', 'g', 'tspan', 0, 4, true);

      clickElement('car_m_080502', true, 'radio');
      elementShouldBeEnabled('car_m_080505');
      elementShouldBeEnabled('car_m_080506');
      elementShouldBeEnabled('car_m_080508');
      elementShouldBeEnabled('car_m_080509');
    });
  });
});
