import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 10 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_100107', 'hea_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_SellarRegion.url + '/' + pageId);
        });
      });
    });
  });

  it('Characterization I', () => {
    clickElement('hea_m_100105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_100107');
    cy.byRRID('hea_m_100106-1')
      .find('input')
      .eq(0)
      .should('have.attr', 'aria-label', 'Pathology');

    findingColumn.deleteFiding();
    cy.byRRID('hea_m_100106-1')
      .find('input')
      .eq(0)
      .should('have.attr', 'aria-label', ' ');
  });
});
