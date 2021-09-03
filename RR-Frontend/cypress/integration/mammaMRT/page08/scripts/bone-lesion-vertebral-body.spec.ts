import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 08 - Bone Lesion Vertebral body', () => {
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

  describe('Bone Lesion -> Vertebral Body', () => {
    it('select Bone Lesion -> vertebral Body', () => {
      clickElement('mam_m_080105', true, 'radio');
      elementShouldBeEnabled('mam_m_080106-1');
      selectFindingsDropdownOption('mam_m_080106-1', '.ui-dropdown-label', 3, true, true);
      elementShouldBeEnabled('mam_m_080107');
      elementShouldBeEnabled('mam_m_080209');
      elementShouldBeEnabled('mam_m_080210');
      elementShouldBeEnabled('mam_m_080211');
      elementShouldBeEnabled('mam_m_080212');
      elementShouldBeEnabled('mam_m_080213');
      elementShouldBeEnabled('mam_m_080214');
      elementShouldBeEnabled('mam_m_080215');
      elementShouldBeEnabled('mam_m_080216');
      elementShouldBeEnabled('mam_m_080217');
      elementShouldBeEnabled('mam_m_080218');
      elementShouldBeEnabled('mam_m_080219');
      elementShouldBeEnabled('mam_m_080220');
      elementShouldBeEnabled('mam_m_080205');
      elementShouldBeEnabled('mam_m_080208');
      clickElement('mam_m_080209', true, 'checkbox');
      clickElement('mam_m_080210', true, 'checkbox');
      clickElement('mam_m_080211', true, 'checkbox');
      clickElement('mam_m_080212', true, 'checkbox');
      clickElement('mam_m_080213', true, 'checkbox');
      clickElement('mam_m_080214', true, 'checkbox');
      clickElement('mam_m_080215', true, 'checkbox');
      clickElement('mam_m_080216', true, 'checkbox');
      clickElement('mam_m_080217', true, 'checkbox');
      clickElement('mam_m_080218', true, 'checkbox');
      clickElement('mam_m_080219', true, 'checkbox');
      clickElement('mam_m_080220', true, 'checkbox');
      cy.byRRID('mam_m_080205').type('40');
      selectFindingsDropdownOption('mam_m_080208', '.ui-dropdown-label', 1, true, true);
      cy.get('.button-next').click();
    });
  });
});
