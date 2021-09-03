import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 08 - Bone Lesion Rib', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bone Lesion -> Rib', () => {
    it('select Bone Lesion -> add new finding -> Rib', () => {
      clickElement('mam_m_080105', true, 'radio');
      elementShouldBeEnabled('mam_m_080106-1');
      selectFindingsDropdownOption('mam_m_080106-1', '.ui-dropdown-label', 4, true, true);
      elementShouldBeEnabled('mam_m_080221');
      elementShouldBeEnabled('mam_m_080222');
      elementShouldBeEnabled('mam_m_080223');
      elementShouldBeEnabled('mam_m_080224');
      elementShouldBeEnabled('mam_m_080225');
      elementShouldBeEnabled('mam_m_080226');
      elementShouldBeEnabled('mam_m_080227');
      elementShouldBeEnabled('mam_m_080228');
      elementShouldBeEnabled('mam_m_080229');
      elementShouldBeEnabled('mam_m_080230');
      elementShouldBeEnabled('mam_m_080231');
      elementShouldBeEnabled('mam_m_080232');
      elementShouldBeEnabled('mam_m_080205');
      elementShouldBeEnabled('mam_m_080208');
      clickElement('mam_m_080221', true, 'checkbox');
      elementShouldBeEnabled('mam_m_080203');
      elementShouldBeEnabled('mam_m_080204');
      clickElement('mam_m_080222', true, 'checkbox');
      elementShouldBeDisabled('mam_m_080203');
      elementShouldBeDisabled('mam_m_080204');
    });
  });
});
