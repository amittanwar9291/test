import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 06 - FeetMRT', () => {
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

  it('Hematoma', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');

    clickElement('anc_m_060207');

    cy.get('.ng-valid')
      .shadowFind('.font18 ')
      .shadowFind('tspan ')
      .eq(1)

      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.close-line')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_060305');
    elementShouldBeEnabled('anc_m_060306');
    elementShouldBeEnabled('anc_m_060307');
    elementShouldBeEnabled('anc_m_060308');
  });
});
