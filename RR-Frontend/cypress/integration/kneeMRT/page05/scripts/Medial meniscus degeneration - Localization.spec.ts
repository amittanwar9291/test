import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - KneeMRT_Ribbons', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_050107', 'kne_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Ribbons.url + '/' + pageId);
        });
      });
    });
  });

  it('Medial meniscus degeneration - Localization.spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('kne_m_050203_im');
    elementShouldBeEnabled('kne_m_050226');

    elementShouldBeEnabled('kne_m_050402');
    elementShouldBeEnabled('kne_m_050405');
    elementShouldBeEnabled('kne_m_050408');
    elementShouldBeEnabled('kne_m_0505100');
    elementShouldBeEnabled('kne_m_050501');
    elementShouldBeEnabled('kne_m_050508');

    selectLocalizerElement('kne_m_050203_im', 'path', 3, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050203_im', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050203_im', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
