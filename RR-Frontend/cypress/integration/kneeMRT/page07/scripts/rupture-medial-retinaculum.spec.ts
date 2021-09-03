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

  it('Rupture medial retinaculum', () => {
    clickElement('kne_m_070105');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('kne_m_070107');

    elementShouldBeEnabled('kne_m_070223');
    elementShouldBeEnabled('kne_m_070224');
    elementShouldBeEnabled('kne_m_070225');
    elementShouldBeEnabled('kne_m_070226');
    elementShouldBeEnabled('kne_m_070227');
    elementShouldBeEnabled('kne_m_070228');
    elementShouldBeEnabled('kne_m_070229');
    elementShouldBeEnabled('kne_m_070230');

    elementShouldBeEnabled('kne_m_070322');
    elementShouldBeEnabled('kne_m_070323');

    clickElement('kne_m_070230');
    elementShouldBeEnabled('kne_m_070231');
    elementShouldBeEnabled('kne_m_070232');
    elementShouldBeEnabled('kne_m_070233');
  });
});
