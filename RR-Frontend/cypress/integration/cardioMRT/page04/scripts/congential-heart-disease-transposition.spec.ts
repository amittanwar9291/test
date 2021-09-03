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

  it('Congential heart disease - Transposition of the great arteries (TGA)', () => {
    clickElement('car_m_040105', true, 'radio');
    clickElement('car_m_040401');
    elementShouldBeEnabled('car_m_040226-1');

    findingColumn.selectFindingOptionByAppearance(3);
    cy.byRRID('car_m_040223').should('be.enabled');
    elementShouldBeEnabled('car_m_040346');
    elementShouldBeEnabled('car_m_040347');

    elementShouldBeEnabled('car_m_040446');
    elementShouldBeEnabled('car_m_040447');
    elementShouldBeEnabled('car_m_040448');
    elementShouldBeEnabled('car_m_040449');
  });
});
