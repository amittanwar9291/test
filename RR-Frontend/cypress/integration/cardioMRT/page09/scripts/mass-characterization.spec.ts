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
          cy.visit(cardioMRTRoutes.CardioMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  describe('Mass', () => {
    it('Mass -> Characterization', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.nav-item')
        .eq(8)
        .first()
        .click();
      // clickElement('kne_m_040105', true, 'radio');
      clickElement('car_m_090106', true, 'radio');
      elementShouldBeEnabled('car_m_090107-1');
      selectFindingsDropdownOption('car_m_090107-1', '.ui-dropdown-label', 3, true, true);
      elementShouldBeEnabled('car_m_090108');
      elementShouldBeEnabled('car_m_090333');
      elementShouldBeEnabled('car_m_090251');
      elementShouldBeEnabled('car_m_090252');
      elementShouldBeEnabled('car_m_090253');
      elementShouldBeEnabled('car_m_090254');
      elementShouldBeEnabled('car_m_090255');
      elementShouldBeEnabled('car_m_090335');
      elementShouldBeEnabled('car_m_090338');
      elementShouldBeEnabled('car_m_090339');
      elementShouldBeEnabled('car_m_090340');
      elementShouldBeEnabled('car_m_090345');
      elementShouldBeEnabled('car_m_090346');
      elementShouldBeEnabled('car_m_090423');
      elementShouldBeEnabled('car_m_090423_1');
      elementShouldBeEnabled('car_m_090425');
      elementShouldBeEnabled('car_m_090426');
      elementShouldBeEnabled('car_m_090427');
      elementShouldBeEnabled('car_m_090428');
      elementShouldBeEnabled('car_m_090429');
      elementShouldBeEnabled('car_m_090522');
      elementShouldBeEnabled('car_m_090523');
      elementShouldBeEnabled('car_m_090524');
      clickElement('car_m_090340', true, 'radio');
      elementShouldBeEnabled('car_m_090341');
      elementShouldBeEnabled('car_m_090342');
      elementShouldBeEnabled('car_m_090343');
      elementShouldBeEnabled('car_m_090345');
      elementShouldBeEnabled('car_m_090346');
      clickElement('car_m_090523', true, 'radio');
      elementShouldBeEnabled('car_m_090525');
      elementShouldBeEnabled('car_m_090526');
    });
  });
});
