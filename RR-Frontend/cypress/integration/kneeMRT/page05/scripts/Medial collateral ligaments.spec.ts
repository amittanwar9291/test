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

  it('Medial collateral ligaments.spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('kne_m_050216');
    elementShouldBeEnabled('kne_m_050217');
    elementShouldBeEnabled('kne_m_050218');
    elementShouldBeEnabled('kne_m_050219');

    clickElement('kne_m_050216', true, 'radio');
    elementShouldBeEnabled('kne_m_050327');

    clickElement('kne_m_050217', true, 'radio');
    elementShouldBeEnabled('kne_m_050329');
    elementShouldBeEnabled('kne_m_050330');

    elementShouldBeEnabled('kne_m_050332');
    elementShouldBeEnabled('kne_m_050333');
    elementShouldBeEnabled('kne_m_050334');

    clickElement('kne_m_050334', true, 'checkbox');
    elementShouldBeEnabled('kne_m_0503102');
    clickElement('kne_m_050218', true, 'radio');
    elementShouldBeEnabled('kne_m_050336');
    elementShouldBeEnabled('kne_m_050337');
    elementShouldBeEnabled('kne_m_050338');

    clickElement('kne_m_050338', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050339');

    clickElement('kne_m_050219', true, 'radio');
    elementShouldBeEnabled('kne_m_050342');
  });
});
