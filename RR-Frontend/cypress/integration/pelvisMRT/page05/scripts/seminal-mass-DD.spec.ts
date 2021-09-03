import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Seminal mass DD', () => {
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

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_050341');
    elementShouldBeEnabled('pel_m_0502143');
    elementShouldBeEnabled('pel_m_0502144');
    elementShouldBeEnabled('pel_m_0502145');
    elementShouldBeEnabled('pel_m_0502146');
    elementShouldBeEnabled('pel_m_0502147');
    elementShouldBeEnabled('pel_m_0502151');

    elementShouldBeEnabled('pel_m_0503119');

    clickElement('pel_m_0502147', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0502149');
    elementShouldBeEnabled('pel_m_0502150');

    selectDropdownOptionOS('pel_m_0503119', 3, true, true);
    elementShouldBeEnabled('pel_m_0503121');

    selectDropdownOptionOS('pel_m_0503121', 4, true, true);
    elementShouldBeEnabled('pel_m_0503122');
  });
});
