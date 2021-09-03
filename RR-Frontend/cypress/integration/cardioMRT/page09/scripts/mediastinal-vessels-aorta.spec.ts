import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
  describe('Mediastinal vessels', () => {
    it('Mediastinal vessels -> Aorta', () => {
      clickElement('car_m_090106', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      clickElement('car_m_090209', true, 'radio');
      elementShouldBeEnabled('car_m_090305');
      elementShouldBeEnabled('car_m_090411');
      clickElement('car_m_090305', true, 'checkbox');
      elementShouldBeEnabled('car_m_090306');
      elementShouldBeEnabled('car_m_090307');
      elementShouldBeEnabled('car_m_090309');
      elementShouldBeEnabled('car_m_090310');
      elementShouldBeEnabled('car_m_090311');
      elementShouldBeEnabled('car_m_090312');
      clickElement('car_m_090312', true, 'checkbox');
      elementShouldBeEnabled('car_m_090313');
      clickElement('car_m_090411', true, 'checkbox');
      elementShouldBeEnabled('car_m_090412');
      elementShouldBeEnabled('car_m_090413');
    });
  });
});
