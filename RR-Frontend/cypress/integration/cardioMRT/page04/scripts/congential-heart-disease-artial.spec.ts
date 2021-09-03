import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Flaps', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('car_m_040223', 'car_m_040226-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_Flaps.url + '/' + pageId);
        });
      });
    });
  });

  it('Congential heart disease - Atrial septal defect (ASD)', () => {
    clickElement('car_m_040105', true, 'radio');
    clickElement('car_m_040401');
    elementShouldBeEnabled('car_m_040226-1');

    findingColumn.selectFindingOptionByAppearance(0);
    cy.byRRID('car_m_040223').should('be.enabled');
    elementShouldBeEnabled('car_m_040338');
    elementShouldBeEnabled('car_m_040339');
    elementShouldBeEnabled('car_m_040340');
    elementShouldBeEnabled('car_m_040343');

    elementShouldBeEnabled('car_m_040435');
    elementShouldBeEnabled('car_m_040436');
    elementShouldBeEnabled('car_m_040437');

    clickElement('car_m_040340');
    elementShouldBeEnabled('car_m_040341');
    elementShouldBeEnabled('car_m_040342');
  });
});
