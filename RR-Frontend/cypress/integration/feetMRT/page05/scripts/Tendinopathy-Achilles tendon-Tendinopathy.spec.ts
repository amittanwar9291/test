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

  it('Tendinopathy-Achilles tendon-Tendinopathy', () => {
    clickElement('anc_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_050107');

    elementShouldBeEnabled('anc_m_050235');
    clickElement('anc_m_050235');

    cy.get('.ng-valid')
      .shadowFind('.pointer')
      .eq(2)
      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.pointer')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_050237');
    elementShouldBeEnabled('anc_m_050238');

    clickElement('anc_m_050237', true, 'checkbox');
    elementShouldBeEnabled('anc_m_050325');
    elementShouldBeEnabled('anc_m_050326');

    elementShouldBeEnabled('anc_m_050331');
    elementShouldBeEnabled('anc_m_050332');
    elementShouldBeEnabled('anc_m_050332');
    elementShouldBeEnabled('anc_m_050333');

    elementShouldBeEnabled('anc_m_050429');
    elementShouldBeEnabled('anc_m_050430');
    elementShouldBeEnabled('anc_m_050431');
    elementShouldBeEnabled('anc_m_050432');
    elementShouldBeEnabled('anc_m_050433');
    elementShouldBeEnabled('anc_m_050434');
    elementShouldBeEnabled('anc_m_050435');

    elementShouldBeEnabled('anc_m_050439');

    elementShouldBeEnabled('anc_m_050507');

    clickElement('anc_m_050326', true, 'radio');
    elementShouldBeEnabled('anc_m_050328');

    clickElement('anc_m_050333', true, 'checkbox');
    elementShouldBeEnabled('anc_m_050334');
    elementShouldBeEnabled('anc_m_050336');

    clickElement('anc_m_050435', true, 'checkbox');
    elementShouldBeEnabled('anc_m_050437');

    clickElement('anc_m_050439', true, 'checkbox');
    elementShouldBeEnabled('anc_m_050440');
  });
});
