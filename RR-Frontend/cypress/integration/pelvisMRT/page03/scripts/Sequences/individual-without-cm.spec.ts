import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS
} from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../../page objects/navigation-page-object';

context('PelvisMRT page03 - Contrast Enhanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Sequences', () => {
    it('Individual with CM -> Yes', () => {
      // Select female radio button from page 1
      NavigationPageObject.visitPageNumber(1);
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010205', true, 'radio');

      // Go to Page 3 and select No radio button
      NavigationPageObject.visitPageNumber(3);
      clickElement('uni_x_030110', true, 'radio');

      // Click on Sequences box
      cy.byRRID('uni_x_030105').click({ force: true });
      elementShouldBeEnabled('uni_x_030107');
      elementShouldBeEnabled('uni_x_030108');
      elementShouldBeEnabled('uni_x_030109');

      elementShouldBeEnabled('uni_x_030112');
      elementShouldBeEnabled('uni_x_030113');

      elementShouldBeEnabled('pel_m_030105');
      elementShouldBeEnabled('pel_m_030106');
      elementShouldBeEnabled('uni_x_030210-1');

      elementShouldBeEnabled('pel_m_030502');
      elementShouldBeEnabled('pel_m_030510');
      elementShouldBeEnabled('pel_m_030510');
      elementShouldBeEnabled('pel_m_030506');

      elementShouldBeEnabled('uni_x_030509');
      elementShouldBeEnabled('uni_x_030511');
      elementShouldBeEnabled('uni_y_030502');
      elementShouldBeEnabled('uni_y_030503');
      elementShouldBeEnabled('uni_x_030520');
      elementShouldBeEnabled('uni_x_030521');

      clickElement('uni_x_030112', true, 'radio');
      clickElement('uni_x_030113', true, 'radio');
      clickElement('pel_m_030105', true, 'radio');
      clickElement('pel_m_030106', true, 'radio');
      clickElement('pel_m_030502', true, 'checkbox');
      elementShouldBeEnabled('pel_m_030503');
      elementShouldBeEnabled('pel_m_030504');

      clickElement('pel_m_030503', true, 'radio');
      clickElement('pel_m_030504', true, 'radio');
      clickElement('pel_m_030510', true, 'checkbox');
      clickElement('pel_m_030505', true, 'checkbox');
      clickElement('pel_m_030506', true, 'checkbox');

      clickElement('uni_x_030509', true, 'checkbox');
      clickElement('uni_x_030511', true, 'checkbox');
      clickElement('uni_y_030502', true, 'checkbox');
      clickElement('uni_y_030503', true, 'checkbox');
      clickElement('uni_x_030520', true, 'checkbox');
      clickElement('uni_x_030521', true, 'checkbox');

      // Select Individual radio button
      clickElement('uni_x_030109', true, 'radio');

      // Select DWI from weighting dropdown
      selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
      elementShouldBeEnabled('uni_x_030211');
      elementShouldBeEnabled('uni_x_030421');

      // 3rd column
      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      elementShouldBeEnabled('uni_x_030314');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeEnabled('uni_x_0303102');
      elementShouldBeEnabled('uni_x_0303103');
      elementShouldBeEnabled('pel_m_030301');

      // 4th column
      elementShouldBeDisabled('uni_y_030401');
      elementShouldBeEnabled('uni_x_030424');
      elementShouldBeEnabled('uni_x_030425');
      elementShouldBeEnabled('uni_x_030426');
      elementShouldBeEnabled('uni_x_030427');
      elementShouldBeEnabled('uni_x_030428');
      elementShouldBeEnabled('uni_x_030429');
      elementShouldBeEnabled('uni_x_030431');

      selectDropdownOptionOS('uni_x_030308', 3, true, true);
      selectDropdownOptionOS('uni_x_030310', 3, true, true);
      clickElement('uni_x_030314', true, 'checkbox');
      clickElement('uni_x_030315', true, 'checkbox');
      clickElement('uni_x_0303102', true, 'checkbox');
      clickElement('uni_x_0303103', true, 'checkbox');
      clickElement('pel_m_030301', true, 'checkbox');

      clickElement('uni_x_030424', true, 'checkbox');
      clickElement('uni_x_030425', true, 'checkbox');
      clickElement('uni_x_030426', true, 'checkbox');
      clickElement('uni_x_030427', true, 'checkbox');
      clickElement('uni_x_030428', true, 'checkbox');
      clickElement('uni_x_030429', true, 'checkbox');
      elementShouldBeEnabled('uni_x_030430');
      clickElement('uni_x_030430', true, 'checkbox');
      clickElement('uni_x_030431', true, 'checkbox');
    });
  });
});
