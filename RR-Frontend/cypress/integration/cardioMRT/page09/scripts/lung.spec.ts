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
  describe('Lung', () => {
    it('Lung ', () => {
      clickElement('car_m_090106', true, 'radio');
      elementShouldBeEnabled('car_m_090107-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('car_m_090108');
      elementShouldBeEnabled('car_m_0902180');
      elementShouldBeEnabled('car_m_0902181');
      elementShouldBeEnabled('car_m_0902182');
      elementShouldBeEnabled('car_m_0902183');
      elementShouldBeEnabled('car_m_0902184');
      elementShouldBeEnabled('car_m_0902185');
      clickElement('car_m_0902180', true, 'radio');
      elementShouldBeEnabled('car_m_090354');
      elementShouldBeEnabled('car_m_090436');
      elementShouldBeEnabled('car_m_090437');
      elementShouldBeEnabled('car_m_090533');
      elementShouldBeEnabled('car_m_090534');
      elementShouldBeEnabled('car_m_090535');
      clickElement('car_m_090438', true, 'radio');
      elementShouldBeEnabled('car_m_090439');
      elementShouldBeEnabled('car_m_090440');
      clickElement('car_m_0902181', true, 'radio');
      elementShouldBeEnabled('car_m_090355');
      elementShouldBeEnabled('car_m_090358');
      clickElement('car_m_090355', true, 'checkbox');
      elementShouldBeEnabled('car_m_090356');
      elementShouldBeEnabled('car_m_090357');
      clickElement('car_m_090358', true, 'checkbox');
      elementShouldBeEnabled('car_m_090359');
      elementShouldBeEnabled('car_m_090360');
      clickElement('car_m_0902182', true, 'radio');
      elementShouldBeEnabled('car_m_090354');
      elementShouldBeEnabled('car_m_090442');
      elementShouldBeEnabled('car_m_090443');
      elementShouldBeEnabled('car_m_090444');
      elementShouldBeEnabled('car_m_090446');
      elementShouldBeEnabled('car_m_090447');
      elementShouldBeEnabled('car_m_090448');
      elementShouldBeEnabled('car_m_090537');
      elementShouldBeEnabled('car_m_090538');
      clickElement('car_m_0902183', true, 'radio');
      elementShouldBeEnabled('car_m_090354');
      elementShouldBeEnabled('car_m_090450');
      elementShouldBeEnabled('car_m_090537');
      elementShouldBeEnabled('car_m_090539');
      clickElement('car_m_0902184', true, 'radio');
      elementShouldBeEnabled('car_m_090354');
      elementShouldBeEnabled('car_m_090452');
      elementShouldBeEnabled('car_m_090541');
      elementShouldBeEnabled('car_m_090542');
      elementShouldBeEnabled('car_m_090543');
      elementShouldBeEnabled('car_m_090544');
      elementShouldBeEnabled('car_m_090545');
      clickElement('car_m_0902185', true, 'radio');
      elementShouldBeEnabled('car_m_090355');
      elementShouldBeEnabled('car_m_090358');
      clickElement('car_m_090355', true, 'checkbox');
      elementShouldBeEnabled('car_m_090356');
      elementShouldBeEnabled('car_m_090357');
      clickElement('car_m_090358', true, 'checkbox');
      elementShouldBeEnabled('car_m_090359');
      elementShouldBeEnabled('car_m_090360');
    });
  });
});
