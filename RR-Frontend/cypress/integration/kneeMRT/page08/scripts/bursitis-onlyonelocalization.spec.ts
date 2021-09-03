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

  it('Bursitis - Only one Localization selected', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('kne_m_080230');
    elementShouldBeEnabled('kne_m_080231');
    elementShouldBeEnabled('kne_m_080232');
    elementShouldBeEnabled('kne_m_080233');

    elementShouldBeEnabled('kne_m_080234');
    elementShouldBeEnabled('kne_m_080235');
    elementShouldBeEnabled('kne_m_080236');

    elementShouldBeEnabled('kne_m_0802212');
    elementShouldBeEnabled('kne_m_080239');

    clickElement('kne_m_080235');
    elementShouldBeEnabled('kne_m_080330');
    elementShouldBeEnabled('kne_m_080331');
    elementShouldBeEnabled('kne_m_080333');
    elementShouldBeEnabled('kne_m_0803300');
  });
});
