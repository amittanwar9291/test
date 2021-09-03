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

  it('Tendons - Popliteus tendon', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('kne_m_080240');
    elementShouldBeEnabled('kne_m_080359');

    clickElement('kne_m_080240');
    elementShouldBeEnabled('kne_m_080282');
    elementShouldBeEnabled('kne_m_080283');
    elementShouldBeEnabled('kne_m_080284');
    elementShouldBeEnabled('kne_m_080285');
    elementShouldBeEnabled('kne_m_080289');
    elementShouldBeEnabled('kne_m_080290');

    clickElement('kne_m_080285');
    elementShouldBeEnabled('kne_m_080286');

    clickElement('kne_m_080359');
    elementShouldBeEnabled('kne_m_080360');
    elementShouldBeEnabled('kne_m_080361');
    elementShouldBeEnabled('kne_m_080362');
    elementShouldBeEnabled('kne_m_080363');
  });
});
