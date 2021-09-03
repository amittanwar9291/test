import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Shoulder Page 05 - AC-Joint & Rotator Cuff', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_060106', 'sho_m_060106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_LabrumAndRibbons.url + '/' + pageId);
        });
      });
    });
  });
  describe('LABRUM &RIbbons', () => {
    it('Ligamenta', () => {
      clickElement('sho_m_060105', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('sho_m_060207');
      elementShouldBeEnabled('sho_m_060305');
      elementShouldBeEnabled('sho_m_060308');

      elementShouldBeEnabled('sho_m_060417');
      elementShouldBeEnabled('sho_m_060421');
      elementShouldBeEnabled('sho_m_060422');
      elementShouldBeEnabled('sho_m_060423');
      elementShouldBeEnabled('sho_m_060424');

      elementShouldBeEnabled('uni_06_003');
      elementShouldBeEnabled('uni_06_005');
      elementShouldBeEnabled('uni_06_006');

      clickElement('sho_m_060207', true, 'checkbox');
      elementShouldBeEnabled('sho_m_060209');
      elementShouldBeEnabled('sho_m_060210');
      elementShouldBeEnabled('sho_m_060211');
      elementShouldBeEnabled('sho_m_060212');

      clickElement('sho_m_060305', true, 'checkbox');
      elementShouldBeEnabled('sho_m_060307');

      clickElement('sho_m_060308', true, 'checkbox');

      elementShouldBeEnabled('sho_m_060310');
      elementShouldBeEnabled('sho_m_060311');

      elementShouldBeEnabled('sho_m_060314');
      elementShouldBeEnabled('sho_m_060315');

      elementShouldBeEnabled('sho_m_060417');
      clickElement('sho_m_060417', true, 'checkbox');
      elementShouldBeEnabled('sho_m_060419');
      elementShouldBeEnabled('sho_m_060420');

      elementShouldBeEnabled('uni_06_003');
      elementShouldBeEnabled('uni_06_005');
    });
  });
});
