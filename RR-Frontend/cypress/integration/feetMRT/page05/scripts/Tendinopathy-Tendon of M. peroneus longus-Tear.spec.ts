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
  const findingColumn = new FindingColumnPageObject('anc_m_050106', 'anc_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_LigamentsAndTendons.url + '/' + pageId);
        });
      });
    });
  });

  it('Tendinopathy-Tendon of M. peroneus longus-Tear', () => {
    clickElement('anc_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_050107');

    elementShouldBeEnabled('anc_m_050235');
    clickElement('anc_m_050235');

    cy.get('.ng-valid')
      .shadowFind('.pointer')
      .eq(3)
      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.pointer')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_050240');
    elementShouldBeEnabled('anc_m_050241');
    clickElement('anc_m_050241', true, 'checkbox');

    elementShouldBeEnabled('anc_m_050517');
    elementShouldBeEnabled('anc_m_050518');
    elementShouldBeEnabled('anc_m_050523');
    elementShouldBeEnabled('anc_m_050524');
  });
});
