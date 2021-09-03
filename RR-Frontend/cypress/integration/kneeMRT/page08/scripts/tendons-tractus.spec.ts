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

  it('Tendons - Tractus iliotibialis', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('kne_m_080240');
    elementShouldBeEnabled('kne_m_080364');

    clickElement('kne_m_080240');
    elementShouldBeEnabled('kne_m_080292');
    elementShouldBeEnabled('kne_m_080293');
    elementShouldBeEnabled('kne_m_080294');
    elementShouldBeEnabled('kne_m_080295');
    elementShouldBeEnabled('kne_m_080299');
    elementShouldBeEnabled('kne_m_0802100');

    clickElement('kne_m_080295');
    elementShouldBeEnabled('kne_m_080296');

    clickElement('kne_m_080364');
    elementShouldBeEnabled('kne_m_080365');
    elementShouldBeEnabled('kne_m_080366');
    elementShouldBeEnabled('kne_m_080367');
    elementShouldBeEnabled('kne_m_080368');
    elementShouldBeEnabled('kne_m_080369');
  });
});
