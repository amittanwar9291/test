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
    it('Mediastinal vessels -> Coronary anomaly', () => {
      clickElement('car_m_090106', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      clickElement('car_m_090208', true, 'radio');
      elementShouldBeEnabled('car_m_090302');
      elementShouldBeEnabled('car_m_090303');
      clickElement('car_m_090302', true, 'radio');
      elementShouldBeEnabled('car_m_090402');
      elementShouldBeEnabled('car_m_090403');
      elementShouldBeEnabled('car_m_090404');
      elementShouldBeEnabled('car_m_090405');
      elementShouldBeEnabled('car_m_090406');
      elementShouldBeEnabled('car_m_090407');
      clickElement('car_m_090405', true, 'radio');
      elementShouldBeEnabled('car_m_090501');
      elementShouldBeEnabled('car_m_090502');
      elementShouldBeEnabled('car_m_090503');
      elementShouldBeEnabled('car_m_090504');
      clickElement('car_m_090406', true, 'radio');
      elementShouldBeEnabled('car_m_090506');
      elementShouldBeEnabled('car_m_090507');
      elementShouldBeEnabled('car_m_090508');
      elementShouldBeEnabled('car_m_090509');
      elementShouldBeEnabled('car_m_090511');
      elementShouldBeEnabled('car_m_090512');
      elementShouldBeEnabled('car_m_090513');
      elementShouldBeEnabled('car_m_090514');
      clickElement('car_m_090407', true, 'radio');
      elementShouldBeEnabled('car_m_090501');
      elementShouldBeEnabled('car_m_090502');
      elementShouldBeEnabled('car_m_090503');
      elementShouldBeEnabled('car_m_090504');
      clickElement('car_m_090303', true, 'radio');
      elementShouldBeEnabled('car_m_090409');
      elementShouldBeEnabled('car_m_090410');
      elementShouldBeEnabled('car_m_090516');
      elementShouldBeEnabled('car_m_090517');
      elementShouldBeEnabled('car_m_090518');
      elementShouldBeEnabled('car_m_090519');
    });
  });
});
