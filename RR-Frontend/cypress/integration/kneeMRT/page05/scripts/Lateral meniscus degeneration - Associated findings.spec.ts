import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  it('Lateral meniscus degeneration - Associated findings.spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(2);
    clickElement('kne_m_050402', true, 'checkbox');

    elementShouldBeEnabled('kne_m_0504100');
    elementShouldBeEnabled('kne_m_050404');

    clickElement('kne_m_050405', true, 'checkbox');

    elementShouldBeEnabled('kne_m_0504101');
    elementShouldBeEnabled('kne_m_050407');

    clickElement('kne_m_050408', true, 'checkbox');

    elementShouldBeEnabled('kne_m_0504103');
    elementShouldBeEnabled('kne_m_050410');

    clickElement('kne_m_050501', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050503');
    cy.byRRID('kne_m_050503').type('1');

    elementShouldBeEnabled('kne_m_050505');
    elementShouldBeEnabled('kne_m_050506');
    elementShouldBeEnabled('kne_m_050507');

    clickElement('kne_m_050508', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050514');
    elementShouldBeEnabled('kne_m_050515');
    elementShouldBeEnabled('kne_m_050516');
  });
});
