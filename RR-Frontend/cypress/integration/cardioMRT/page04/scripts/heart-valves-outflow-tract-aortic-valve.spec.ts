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
  const findingColumn = new FindingColumnPageObject('car_m_040223', 'car_m_040222-');

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

  it('Heart valves/Outflow tract - Aortic valve', () => {
    clickElement('car_m_040105', true, 'radio');
    clickElement('car_m_040301');
    elementShouldBeEnabled('car_m_040222-1');
    elementShouldBeEnabled('car_m_040502');
    elementShouldBeEnabled('car_m_040503');

    clickElement('car_m_040503');
    elementShouldBeEnabled('car_m_040504');
    elementShouldBeEnabled('car_m_040505');

    findingColumn.selectFindingOptionByAppearance(0);
    cy.byRRID('car_m_040223').should('be.enabled');
    elementShouldBeEnabled('car_m_040319');
    elementShouldBeEnabled('car_m_040322');
    elementShouldBeEnabled('car_m_040325');
    elementShouldBeEnabled('car_m_040417');

    clickElement('car_m_040319');
    elementShouldBeEnabled('car_m_040321');

    clickElement('car_m_040322');
    elementShouldBeEnabled('car_m_040324');

    clickElement('car_m_040417');
    elementShouldBeEnabled('car_m_040418');
    elementShouldBeEnabled('car_m_040419');
    clickElement('car_m_040419');
    elementShouldBeEnabled('car_m_040422');
    elementShouldBeEnabled('car_m_040424');
  });
});
