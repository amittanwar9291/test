import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownbyValue,
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

  it('Scrotum mass DD I know', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(2000);
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');
    elementShouldBeEnabled('pel_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    selectElementByRadioRole(3);
    elementShouldBeEnabled('pel_m_050451');
    selectDropdownOptionOS('pel_m_050451', 2, true, true);
    elementShouldBeEnabled('pel_m_050490');

    selectDropdownbyValue('pel_m_050451', '.ui-dropdown-label', 'span', 'Fibrous pseudotumour');
    elementShouldBeEnabled('pel_m_050491');

    clickElement('pel_m_050426');
    elementShouldBeEnabled('pel_m_050263');
    selectDropdownOptionOS('pel_m_050263', 2, true, true);
    elementShouldBeEnabled('pel_m_050465');
    selectDropdownOptionOS('pel_m_050263', 4, true, true);
    elementShouldBeEnabled('pel_m_050264');
  });
});
