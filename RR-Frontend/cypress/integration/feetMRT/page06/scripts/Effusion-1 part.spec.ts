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

  it('Ligamenta-Ankle joint', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('none');

    clickElement('anc_m_060204');

    cy.get('.ng-valid')
      .shadowFind('tspan')
      .eq(7)
      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.close-line')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_060302');
    elementShouldBeEnabled('anc_m_060303');

    elementShouldBeEnabled('anc_m_060402');
    elementShouldBeEnabled('anc_m_060403');
    elementShouldBeEnabled('anc_m_060405');

    clickElement('anc_m_060403', true, 'radio');
    elementShouldBeEnabled('anc_m_060404');
  });
});
