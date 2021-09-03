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
  describe('Upper Abdomen', () => {
    it('Upper abdomen', () => {
      clickElement('car_m_090106', true, 'radio');
      elementShouldBeEnabled('car_m_090107-1');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('car_m_090108');

      elementShouldBeEnabled('car_m_0902187');
      elementShouldBeEnabled('car_m_0902195');
      elementShouldBeEnabled('car_m_090361');
      elementShouldBeEnabled('car_m_090362');
      elementShouldBeEnabled('car_m_090363');
      elementShouldBeEnabled('car_m_090364');
      elementShouldBeEnabled('car_m_090453');
      elementShouldBeEnabled('car_m_090546');
      elementShouldBeEnabled('car_m_090555');

      clickElement('car_m_0902187', true, 'checkbox');
      elementShouldBeEnabled('car_m_0902189');
      elementShouldBeEnabled('car_m_0902192');
      elementShouldBeEnabled('car_m_0902193');
      elementShouldBeEnabled('car_m_0902194');
      clickElement('car_m_0902189', true, 'radio');
      elementShouldBeEnabled('car_m_0902190');
      elementShouldBeEnabled('car_m_0902191');

      clickElement('car_m_0902195', true, 'checkbox');
      elementShouldBeEnabled('car_m_0902196');
      elementShouldBeEnabled('car_m_0902197');
      elementShouldBeEnabled('car_m_0902198');

      clickElement('car_m_090364', true, 'checkbox');
      elementShouldBeEnabled('car_m_090366');
      elementShouldBeEnabled('car_m_090367');
      elementShouldBeEnabled('car_m_090368');

      clickElement('car_m_090453', true, 'checkbox');
      elementShouldBeEnabled('car_m_090455');
      elementShouldBeEnabled('car_m_090456');
      elementShouldBeEnabled('car_m_090458');
      elementShouldBeEnabled('car_m_090460');
      elementShouldBeEnabled('car_m_090461');
      elementShouldBeEnabled('car_m_090464');
      elementShouldBeEnabled('car_m_090466');

      clickElement('car_m_090458', true, 'radio');
      elementShouldBeEnabled('car_m_090459');
      clickElement('car_m_090461', true, 'radio');
      elementShouldBeEnabled('car_m_090462');
      elementShouldBeEnabled('car_m_090463');

      clickElement('car_m_090546', true, 'checkbox');
      elementShouldBeEnabled('car_m_090548');
      elementShouldBeEnabled('car_m_090549');
      elementShouldBeEnabled('car_m_090551');
      elementShouldBeEnabled('car_m_090552');
      elementShouldBeEnabled('car_m_090553');
      elementShouldBeEnabled('car_m_090554');

      clickElement('car_m_090555', true, 'checkbox');
      elementShouldBeEnabled('car_m_090556');
      elementShouldBeEnabled('car_m_090558');
      elementShouldBeEnabled('car_m_090559');
      elementShouldBeEnabled('car_m_090560');
    });
  });
});
