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

  const findingColumn = new FindingColumnPageObject('sho_m_050111', 'sho_m_050110-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Rotator.url + '/' + pageId);
        });
      });
    });
  });
  describe('Rotator cuff - Partial lesions.spec.ts', () => {
    it('AC joint', () => {
      clickElement('sho_m_050109', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('sho_m_050111');
      elementShouldBeEnabled('sho_m_050209');
      elementShouldBeEnabled('sho_m_050210');

      clickElement('sho_m_050210', true, 'radio');

      elementShouldBeEnabled('uni_05_002');
      elementShouldBeEnabled('uni_05_005');
      elementShouldBeEnabled('uni_05_007');

      elementShouldBeEnabled('sho_m_0503202');
      elementShouldBeEnabled('sho_m_0503203');
      elementShouldBeEnabled('sho_m_0503204');
      elementShouldBeEnabled('sho_m_0503205');

      elementShouldBeEnabled('sho_m_0503207');
      elementShouldBeEnabled('sho_m_0503212');

      clickElement('sho_m_0503207', true, 'radio');
      elementShouldBeEnabled('sho_m_0503209');
      elementShouldBeEnabled('sho_m_0503210');
      elementShouldBeEnabled('sho_m_0503211');

      clickElement('sho_m_0503202', true, 'radio');
      elementShouldBeEnabled('sho_m_0504204');
      elementShouldBeEnabled('sho_m_0504208');
      elementShouldBeEnabled('sho_m_0504209');

      elementShouldBeEnabled('sho_m_0502211');
      elementShouldBeEnabled('sho_m_0502212');
      elementShouldBeEnabled('sho_m_0502213');

      elementShouldBeEnabled('sho_m_0505203');
      elementShouldBeEnabled('sho_m_0505204');

      elementShouldBeEnabled('sho_m_050511');
      elementShouldBeEnabled('sho_m_050512');

      clickElement('sho_m_0504204', true, 'radio');
      elementShouldBeEnabled('sho_m_0504206');
      elementShouldBeEnabled('sho_m_0504207');

      clickElement('sho_m_0502213', true, 'radio');
      elementShouldBeEnabled('sho_m_0504215');
      elementShouldBeEnabled('sho_m_0504217');

      clickElement('sho_m_0503212', true, 'radio');

      elementShouldBeEnabled('sho_m_0504237');
      elementShouldBeEnabled('sho_m_0504238');
      elementShouldBeEnabled('sho_m_0504239');
      elementShouldBeEnabled('sho_m_0504240');
      elementShouldBeEnabled('sho_m_0504243');

      clickElement('sho_m_0504240', true, 'checkbox');
      elementShouldBeEnabled('sho_m_0504241');

      clickElement('sho_m_0504243', true, 'checkbox');
      elementShouldBeEnabled('sho_m_0504244');
      elementShouldBeEnabled('sho_m_0504246');
    });
  });
});
