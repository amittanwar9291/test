import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption,
  selectLocalizerElement
} from '../../../../shared/service';
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

  it('Trauma - Chondral lesion.spec', () => {
    clickElement('kne_m_060105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(3);

    elementShouldBeEnabled('kne_m_060107');
    elementShouldBeEnabled('kne_m_060203');

    selectLocalizerElement('kne_m_060203', 'tspan', 1, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 3, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 6, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 9, true);
    selectLocalizerElement('kne_m_060203', 'tspan', 12, true);

    elementShouldBeEnabled('kne_m_060323');
    elementShouldBeEnabled('kne_m_060324');
    elementShouldBeEnabled('kne_m_060325');
    elementShouldBeEnabled('kne_m_060326');
    elementShouldBeEnabled('kne_m_060327');
    elementShouldBeEnabled('kne_m_060328');
    clickElement('kne_m_060328', true, 'checkbox');
    elementShouldBeEnabled('kne_m_060421');
    elementShouldBeEnabled('kne_m_060422');
    elementShouldBeEnabled('kne_m_060423');
  });
});
