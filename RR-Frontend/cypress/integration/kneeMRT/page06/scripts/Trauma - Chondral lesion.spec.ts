import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - Anterior cruciate ligament (ACL).spec', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_070107', 'kne_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_OsteoInterface.url + '/' + pageId);
        });
      });
    });
  });

  it('Trauma - Chondral lesion', () => {
    clickElement('kne_m_060105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('kne_m_060107');
    elementShouldBeEnabled('kne_m_060203');

    selectLocalizerElement('kne_m_060203', 'tspan', 1, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 3, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 6, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 9, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 12, true);

    elementShouldBeEnabled('kne_m_060332');
    elementShouldBeEnabled('kne_m_060333');
    elementShouldBeEnabled('kne_m_060334');
    elementShouldBeEnabled('kne_m_060335');
    elementShouldBeEnabled('kne_m_060336');
    elementShouldBeEnabled('kne_m_060337');

    clickElement('kne_m_060337', true, 'checkbox');
    elementShouldBeEnabled('kne_m_060338');

    elementShouldBeEnabled('kne_m_060426');
    elementShouldBeEnabled('kne_m_060427');
    elementShouldBeEnabled('kne_m_060428');
    elementShouldBeEnabled('kne_m_060429');
    elementShouldBeEnabled('kne_m_060430');

    clickElement('kne_m_060430', true, 'radio');
    elementShouldBeEnabled('kne_m_060431');
    clickElement('kne_m_060431', true, 'checkbox');
    elementShouldBeEnabled('kne_m_060433');
    elementShouldBeEnabled('kne_m_060446');
    elementShouldBeEnabled('kne_m_060447');

    elementShouldBeEnabled('kne_m_060510');
    elementShouldBeEnabled('kne_m_060511');
  });
});
