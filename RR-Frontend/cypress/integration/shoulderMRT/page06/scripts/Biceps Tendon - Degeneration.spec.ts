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

  const findingColumn = new FindingColumnPageObject('sho_m_060107', 'sho_m_060106-');
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
    it('Biceps Tendon - Degeneration', () => {
      clickElement('sho_m_060105', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('sho_m_060223');
      elementShouldBeEnabled('sho_m_060224');
      elementShouldBeEnabled('sho_m_060225');
      elementShouldBeEnabled('sho_m_060226');
      elementShouldBeEnabled('uni_06_003');
      elementShouldBeEnabled('uni_06_005');
      elementShouldBeEnabled('uni_06_007');
      elementShouldBeEnabled('sho_m_060517');

      clickElement('sho_m_060224', true, 'radio');

      elementShouldBeEnabled('sho_m_060328');
      elementShouldBeEnabled('sho_m_060329');
      elementShouldBeEnabled('sho_m_060330');
      elementShouldBeEnabled('sho_m_060333');

      clickElement('sho_m_060330', true, 'checkbox');
      elementShouldBeEnabled('sho_m_060331');
    });
  });
});
