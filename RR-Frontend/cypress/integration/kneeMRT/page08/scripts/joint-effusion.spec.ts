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

  it('Joint effusion', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('kne_m_080203');
    elementShouldBeEnabled('kne_m_080204');
    elementShouldBeEnabled('kne_m_080205');
    elementShouldBeEnabled('kne_m_080207');
    elementShouldBeEnabled('kne_m_0802200');

    elementShouldBeEnabled('kne_m_080302');
    elementShouldBeEnabled('kne_m_080309');

    clickElement('kne_m_080207');
    elementShouldBeEnabled('kne_m_080208');

    clickElement('kne_m_080302');
    elementShouldBeEnabled('kne_m_080304');
    elementShouldBeEnabled('kne_m_080306');

    clickElement('kne_m_080309');
    elementShouldBeEnabled('kne_m_080310');
  });
});
