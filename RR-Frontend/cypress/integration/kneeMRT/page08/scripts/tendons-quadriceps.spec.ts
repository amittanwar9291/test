import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft parts', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Tendons - Quadriceps tendon', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('kne_m_080240');
    elementShouldBeEnabled('kne_m_080420');

    clickElement('kne_m_080240');
    elementShouldBeEnabled('kne_m_080253');
    elementShouldBeEnabled('kne_m_080254');
    elementShouldBeEnabled('kne_m_080261');
    elementShouldBeEnabled('kne_m_080262');
    elementShouldBeEnabled('kne_m_080263');
    elementShouldBeEnabled('kne_m_080345');

    clickElement('kne_m_080254');
    elementShouldBeEnabled('kne_m_080256');
    elementShouldBeEnabled('kne_m_080257');
    elementShouldBeEnabled('kne_m_080258');
    elementShouldBeEnabled('kne_m_080259');

    clickElement('kne_m_080263');
    elementShouldBeEnabled('kne_m_080264');

    clickElement('kne_m_080345');
    elementShouldBeEnabled('kne_m_080345');
    elementShouldBeEnabled('kne_m_080349');
    elementShouldBeEnabled('kne_m_080350');
    elementShouldBeEnabled('kne_m_080351');
    elementShouldBeEnabled('kne_m_080352');
    elementShouldBeEnabled('kne_m_080353');

    clickElement('kne_m_080420');
    elementShouldBeEnabled('kne_m_080421');
    elementShouldBeEnabled('kne_m_080422');
    elementShouldBeEnabled('kne_m_080423');
    elementShouldBeEnabled('kne_m_080424');
    elementShouldBeEnabled('kne_m_080425');
    elementShouldBeEnabled('kne_m_080426');
  });
});
