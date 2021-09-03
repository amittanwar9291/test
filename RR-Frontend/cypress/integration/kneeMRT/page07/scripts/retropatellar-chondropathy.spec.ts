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

  it('Retropatellar chondropathy', () => {
    clickElement('kne_m_070105');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('kne_m_070107');

    elementShouldBeEnabled('kne_m_070217');
    elementShouldBeEnabled('kne_m_070219');
    elementShouldBeEnabled('kne_m_070220');
    elementShouldBeEnabled('kne_m_070221');

    elementShouldBeEnabled('kne_m_070314');
    elementShouldBeEnabled('kne_m_070315');
    elementShouldBeEnabled('kne_m_070316');
    elementShouldBeEnabled('kne_m_070317');

    elementShouldBeEnabled('kne_m_070319');

    elementShouldBeEnabled('kne_m_070408');
    elementShouldBeEnabled('kne_m_070410');
    elementShouldBeEnabled('kne_m_070412');
    elementShouldBeEnabled('kne_m_070414');
    elementShouldBeEnabled('kne_m_070416');

    elementShouldBeEnabled('kne_m_070515');
  });
});
