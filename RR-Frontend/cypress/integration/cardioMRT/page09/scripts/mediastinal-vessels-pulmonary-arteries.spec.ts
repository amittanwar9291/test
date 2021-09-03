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
    it('Mediastinal vessels -> Pulmonary arteries', () => {
      clickElement('car_m_090106', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      clickElement('car_m_090210', true, 'radio');
      elementShouldBeEnabled('car_m_090315');
      elementShouldBeEnabled('car_m_090417');
      elementShouldBeEnabled('car_m_090528');
      elementShouldBeEnabled('car_m_090529');
      elementShouldBeEnabled('car_m_090530');
      clickElement('car_m_090315', true, 'checkbox');
      elementShouldBeEnabled('car_m_090317');
      elementShouldBeEnabled('car_m_090318');
      elementShouldBeEnabled('car_m_090319');
      elementShouldBeEnabled('car_m_090320');
      elementShouldBeEnabled('car_m_090321');
      clickElement('car_m_090528', true, 'radio');
      elementShouldBeEnabled('car_m_090531');
      clickElement('car_m_090529', true, 'radio');
      elementShouldBeEnabled('car_m_090531');
      clickElement('car_m_090530', true, 'radio');
      elementShouldBeEnabled('car_m_090531');
    });
  });
});
