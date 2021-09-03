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
    it('Mediastinal vessels -> Vena cava', () => {
      clickElement('car_m_090106', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      clickElement('car_m_090212', true, 'radio');
      elementShouldBeEnabled('car_m_090329');
      elementShouldBeEnabled('car_m_090330');
      clickElement('car_m_090329', true, 'radio');
      elementShouldBeEnabled('car_m_090431');
      elementShouldBeEnabled('car_m_090432');
      elementShouldBeEnabled('car_m_090433');
      clickElement('car_m_090330', true, 'radio');
      elementShouldBeEnabled('car_m_090434');
      elementShouldBeEnabled('car_m_090435');
    });
  });
});
