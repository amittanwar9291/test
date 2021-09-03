import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, typeValueIntoField } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Axillary lymph nodes lymphadenopathy', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Lymphs.url + '/' + pageId);
        });
      });
    });
  });

  describe('SELECT Lymphadenoptahy', () => {
    it('THEN check right checkbox and check if following is enabled', () => {
      clickElement('mam_m_070118');
      elementShouldBeEnabled('mam_m_070106');
      elementShouldBeEnabled('mam_m_070112');
      clickElement('mam_m_070106');
      elementShouldBeEnabled('mam_m_070107');
      elementShouldBeEnabled('mam_m_070109');
      elementShouldBeEnabled('mam_m_070110');
      elementShouldBeEnabled('mam_m_070111');
    });

    it('THEN select left checkbox and check if following is enabled', () => {
      clickElement('mam_m_070112', true, 'checkbox');
      elementShouldBeEnabled('mam_m_070113');
      elementShouldBeEnabled('mam_m_070115');
      elementShouldBeEnabled('mam_m_070116');
      elementShouldBeEnabled('mam_m_070117');
    });

    it('THEN check checkboxes under right and left and insert values, then go to page 08', () => {
      typeValueIntoField('mam_m_070107', '20');
      clickElement('mam_m_070109');
      clickElement('mam_m_070110');
      clickElement('mam_m_070111');
      typeValueIntoField('mam_m_070113', '10');
      clickElement('mam_m_070115');
      clickElement('mam_m_070116');
      clickElement('mam_m_070117');
      clickElement('mam_m_070112');
      clickElement('nav-header-btn-next');
    });
  });
});
