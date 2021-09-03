import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole,
  visitPageNumber
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

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

  it('Vagina mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');

    selectElementByRadioRole(3);
    elementShouldBeEnabled('pel_m_0603219');

    selectDropdownOptionOS('pel_m_0603219', 5, true, true);
    elementShouldBeEnabled('pel_m_0603231');

    cy.wait(1000);
    selectDropdownOptionOS('pel_m_0603219', 11, true, true);
    elementShouldBeEnabled('pel_m_0603232');

    clickElement('pel_m_0603232', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603233');

    selectDropdownOptionOS('pel_m_0603219', 9, true, true);
    cy.byRRID('pel_m_0603219').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_060401');
    elementShouldBeEnabled('pel_m_0602185');
    selectDropdownOptionOS('pel_m_0602185', 2, true, true);
    elementShouldBeEnabled('pel_m_0604209');
    // TODO same bug like in vagina mass char I know (bug nr 22506)
    // elementShouldBeEnabled('pel_m_0602186');

    selectDropdownOptionOS('pel_m_0602183', 11, true, true);
    elementShouldBeEnabled('pel_m_0603232');
    // TODO bug 22506
    // elementShouldBeEnabled('pel_m_0602186');

    clickElement('pel_m_0603232', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603233');
    // TODO bug 22506
    // clickElement('pel_m_0602186',true,'checkbox');
    // elementShouldBeChecked('pel_m_0602186');
  });
});
