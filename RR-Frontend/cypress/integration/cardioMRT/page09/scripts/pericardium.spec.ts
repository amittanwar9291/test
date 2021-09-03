import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 09 -> Pericardium Vessels', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_090108', 'car_m_090107-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_PericardiumVessels.url + '/' + pageId);
        });
      });
    });
  });
  describe('Pericardium', () => {
    it('Pericardium', () => {
      clickElement('car_m_090106', true, 'radio');
      elementShouldBeEnabled('car_m_090107-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('car_m_090108');
      elementShouldBeEnabled('car_m_090202');
      elementShouldBeEnabled('car_m_090205');

      clickElement('car_m_090202', true, 'checkbox');
      elementShouldBeEnabled('car_m_090203');

      clickElement('car_m_090205', true, 'checkbox');
      elementShouldBeEnabled('car_m_090206');
    });
  });
});
