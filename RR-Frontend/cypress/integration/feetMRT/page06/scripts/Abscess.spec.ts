import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 05 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  it('Abscess', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(11);
    elementShouldBeEnabled('none');

    clickElement('anc_m_060290');

    cy.get('.ng-valid')
      .shadowFind('.text')
      .eq(0)
      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.close-line')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_0603108');
    elementShouldBeEnabled('anc_m_0603109');
    elementShouldBeEnabled('anc_m_0603110');
    elementShouldBeEnabled('anc_m_0603111');
  });
});
