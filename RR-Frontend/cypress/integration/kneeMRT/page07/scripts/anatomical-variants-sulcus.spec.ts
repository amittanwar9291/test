import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Patella', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_070107', 'kne_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Patella.url + '/' + pageId);
        });
      });
    });
  });

  it('Anatomical variants sulcus', () => {
    clickElement('kne_m_070105');
    findingColumn.selectFindingOptionByAppearance(0);
    clickElement('kne_m_070301');

    cy.byRRID('kne_m_070303').type('146');
    elementShouldBeEnabled('kne_m_070305');

    cy.byRRID('kne_m_070303').type('145');
    cy.byRRID('kne_m_070305').should('have.css', 'pointer-events', 'auto');
  });
});
