import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 05 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_050107', 'pel_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Scrotum mass char II I know', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(1000);
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');
    elementShouldBeEnabled('pel_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    selectElementByRadioRole(3);

    clickElement('pel_m_050314');
    elementShouldBeEnabled('pel_m_050245');
    elementShouldBeEnabled('pel_m_050248');
    elementShouldBeEnabled('pel_m_0502127');
    elementShouldBeEnabled('pel_m_0502130');

    elementShouldBeEnabled('pel_m_050373');
    elementShouldBeEnabled('pel_m_050374');
    elementShouldBeEnabled('pel_m_050375');
    elementShouldBeEnabled('pel_m_050376');
    elementShouldBeEnabled('pel_m_050377');
    elementShouldBeEnabled('pel_m_050378');

    elementShouldBeEnabled('pel_m_050453');
    elementShouldBeEnabled('pel_m_050454');
    elementShouldBeEnabled('pel_m_050455');
    elementShouldBeEnabled('pel_m_050460');
    elementShouldBeEnabled('pel_m_050461');
    elementShouldBeEnabled('pel_m_050462');

    elementShouldBeEnabled('pel_m_050515');
    elementShouldBeEnabled('pel_m_050516');
    elementShouldBeEnabled('pel_m_050517');
    elementShouldBeEnabled('pel_m_050518');
    elementShouldBeEnabled('pel_m_050519');
    elementShouldBeEnabled('pel_m_050520');
    elementShouldBeEnabled('pel_m_050524');
    elementShouldBeEnabled('pel_m_050528');

    clickElement('pel_m_050245', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050246');
    elementShouldBeEnabled('pel_m_050247');
    elementShouldBeEnabled('pel_m_0502124');
    elementShouldBeEnabled('pel_m_0502125');

    clickElement('pel_m_0502125', true, 'radio');
    elementShouldBeEnabled('pel_m_0502126');

    clickElement('pel_m_0502127', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0502128');
    elementShouldBeEnabled('pel_m_0502129');

    clickElement('pel_m_0502130', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0502131');
    elementShouldBeEnabled('pel_m_0502132');

    clickElement('pel_m_050453', true, 'radio');
    elementShouldBeEnabled('pel_m_050456');
    elementShouldBeEnabled('pel_m_050457');

    clickElement('pel_m_050454', true, 'radio');
    elementShouldBeEnabled('pel_m_050456');
    elementShouldBeEnabled('pel_m_050457');

    clickElement('pel_m_050457', true, 'radio');
    elementShouldBeEnabled('pel_m_050458');

    clickElement('pel_m_050520', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050522');
    elementShouldBeEnabled('pel_m_050523');

    clickElement('pel_m_050524', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050526');
    elementShouldBeEnabled('pel_m_050527');
  });
});
