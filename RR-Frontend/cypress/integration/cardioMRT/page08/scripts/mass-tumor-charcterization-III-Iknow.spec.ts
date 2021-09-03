import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectLocalizerMultiple
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

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
    it('Mass Tumor -> Characterization III -> I know', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.byRRID('nav-header-btn-next').click();
      cy.get('rr-top-navigation')
        .contains('8')
        .click();
      clickElement('car_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      cy.byRRID('car_m_080401').click();
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('car_m_080318');
      elementShouldBeEnabled('uni_08_002');
      elementShouldBeEnabled('uni_08_004');
      elementShouldBeEnabled('uni_08_007');

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
