import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 08 - Bone Lesion', () => {
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

  describe('Bone Lesion -> Add a new finding -> Clavicle', () => {
    it('select Bone Lesion -> Clavicle', () => {
      clickElement('mam_m_080105', true, 'radio');
      elementShouldBeEnabled('mam_m_080106-1');
      selectFindingsDropdownOption('mam_m_080106-1', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('mam_m_080107');
      elementShouldBeEnabled('mam_m_080203');
      elementShouldBeEnabled('mam_m_080204');
      elementShouldBeEnabled('mam_m_080205');
      elementShouldBeEnabled('mam_m_080207');
      elementShouldBeEnabled('mam_m_080208');
      clickElement('mam_m_080204', true, 'radio');
      cy.byRRID('mam_m_080205').type('50');
      selectFindingsDropdownOption('mam_m_080208', '.ui-dropdown-label', 1, true, true);
      cy.get('.button-next').click();
    });
  });
});
