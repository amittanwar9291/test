import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 12 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Rectum.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Summary -> TN Staging sigmoid colon cancer', () => {
      clickElement('pel_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      cy.byRRID('pel_m_080339').type('14');
      cy.byRRID('pel_m_080323').click();
      cy.byRRID('pel_m_080438').click();
      selectFindingsDropdownOption('pel_m_080265', '.ui-dropdown-label', 8, true, true);
      cy.get('rr-top-navigation')
        .contains('12')
        .click({ force: true });
      elementShouldBeEnabled('pel_m_120405');
      clickElement('pel_m_120405', true, 'radio');
      elementShouldBeEnabled('pel_m_120533');
      elementShouldBeEnabled('pel_m_120534');
      elementShouldBeEnabled('pel_m_120535');
      elementShouldBeEnabled('pel_m_120536');
      elementShouldBeEnabled('pel_m_120537');
      elementShouldBeEnabled('pel_m_120538');

      elementShouldBeEnabled('pel_m_120539');
      elementShouldBeEnabled('pel_m_120540');
      elementShouldBeEnabled('pel_m_120541');
      elementShouldBeEnabled('pel_m_120542');
      elementShouldBeEnabled('pel_m_120543');
      elementShouldBeEnabled('pel_m_120544');
    });
  });
});
