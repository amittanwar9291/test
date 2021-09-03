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
  const findingColumn = new FindingColumnPageObject('pel_m_090107', 'pel_m_090106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Bladder.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Summary -> TN Staging', () => {
      clickElement('pel_m_090105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      clickElement('pel_m_0902143', true, 'radio');
      cy.byRRID('pel_m_0903100').type('12');
      cy.byRRID('pel_m_090398').click();
      selectFindingsDropdownOption('pel_m_0904117', '.ui-dropdown-label', 21, true, true);
      cy.get('rr-top-navigation')
        .contains('12')
        .click({ force: true });
      elementShouldBeEnabled('pel_m_120403');
    });
  });
});
