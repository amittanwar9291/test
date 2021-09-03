import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption,
  selectLocalizerMultiple
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Physis/Growth plate', () => {
    it('Physis/Growth plate', () => {
      clickElement('kne_m_040105', true, 'radio');
      elementShouldBeEnabled('kne_m_040106-1');
      selectFindingsDropdownOption('kne_m_040106-1', '.ui-dropdown-label', 8, true, true);
      elementShouldBeEnabled('kne_m_040107');
      elementShouldBeEnabled('kne_m_040238');
      elementShouldBeEnabled('kne_m_040239');
      clickElement('kne_m_040239', true, 'radio');
      elementShouldBeEnabled('kne_m_040230');
      elementShouldBeEnabled('kne_m_0403115');
      elementShouldBeEnabled('kne_m_040366');
      cy.byRRID('kne_m_040230').click();
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 0, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'tspan', 0, 1, true);
      selectLocalizerMultiple('kne_m_040230', 'g', 'circle', 0, 0, true);
      clickElement('kne_m_0403115', true, 'radio');
      elementShouldBeEnabled('kne_m_040515');
      elementShouldBeEnabled('kne_m_040516');
      elementShouldBeEnabled('kne_m_040517');
      clickElement('kne_m_040366', true, 'radio');
      elementShouldBeEnabled('kne_m_040368');
      elementShouldBeEnabled('kne_m_040369');
      elementShouldBeEnabled('kne_m_040370');
      elementShouldBeEnabled('kne_m_040371');
      elementShouldBeEnabled('kne_m_040372');
      elementShouldBeEnabled('kne_m_040466');
      clickElement('kne_m_040466', true, 'checkbox');
      elementShouldBeEnabled('kne_m_040468');
    });
  });
});
