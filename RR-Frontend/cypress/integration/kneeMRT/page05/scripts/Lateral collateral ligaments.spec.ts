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

  it('Lateral collateral ligaments', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('kne_m_050216');
    elementShouldBeEnabled('kne_m_050217');
    elementShouldBeEnabled('kne_m_050218');

    elementShouldBeEnabled('kne_m_050222');
    clickElement('kne_m_050217', true, 'radio');
    elementShouldBeEnabled('kne_m_050344');
    elementShouldBeEnabled('kne_m_050345');
    elementShouldBeEnabled('kne_m_050346');
    elementShouldBeEnabled('kne_m_050347');
    elementShouldBeEnabled('kne_m_050350');
    elementShouldBeEnabled('kne_m_050351');
    elementShouldBeEnabled('kne_m_050352');
    clickElement('kne_m_050352', true, 'checkbox');
    elementShouldBeEnabled('kne_m_0503102');

    clickElement('kne_m_050218', true, 'radio');
    elementShouldBeEnabled('kne_m_050354');
    elementShouldBeEnabled('kne_m_050355');
    elementShouldBeEnabled('kne_m_050356');

    clickElement('kne_m_050356', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050357');
  });
});
