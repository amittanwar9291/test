import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectFindingsDropdownOption
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_040107', 'kne_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bone tumor', () => {
    it('Characterization II -> I know -> T-Classification', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.nav-item')
        .eq(3)
        .first()
        .click();
      clickElement('kne_m_040105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      selectElementByRadioRole(3, true);
      cy.byRRID('kne_m_040373').click();
      selectFindingsDropdownOption('kne_m_040243', '.ui-dropdown-label', 17, true, true);
      cy.byRRID('kne_m_0404110').click();
      elementShouldBeEnabled('kne_m_040485');
      elementShouldBeEnabled('kne_m_040486');
      elementShouldBeEnabled('kne_m_040487');
      cy.byRRID('kne_m_040373').click();
      selectFindingsDropdownOption('kne_m_040243', '.ui-dropdown-label', 20, true, true);
      cy.byRRID('kne_m_0404110').click();
      elementShouldBeEnabled('kne_m_040485');
      elementShouldBeEnabled('kne_m_040486');
      elementShouldBeEnabled('kne_m_040487');
    });
  });
});
