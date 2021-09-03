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

  it('Penis mass char I I describe', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(2000);
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

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_050314');

    elementShouldBeEnabled('pel_m_050245');
    elementShouldBeEnabled('pel_m_050248');

    elementShouldBeEnabled('pel_m_050328');
    elementShouldBeEnabled('pel_m_050329');
    elementShouldBeEnabled('pel_m_050330');
    elementShouldBeEnabled('pel_m_050333');

    elementShouldBeEnabled('pel_m_050429');
    elementShouldBeEnabled('pel_m_050430');
    elementShouldBeEnabled('pel_m_050433');
    elementShouldBeEnabled('pel_m_050434');
    elementShouldBeEnabled('pel_m_050435');
    elementShouldBeEnabled('pel_m_050436');

    clickElement('pel_m_050245', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050246');
    elementShouldBeEnabled('pel_m_050247');

    clickElement('pel_m_050328', true, 'radio');
    elementShouldBeEnabled('pel_m_050331');
    elementShouldBeEnabled('pel_m_050332');

    clickElement('pel_m_050329', true, 'radio');
    elementShouldBeEnabled('pel_m_050331');
    elementShouldBeEnabled('pel_m_050332');

    clickElement('pel_m_050430', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050431');
    elementShouldBeEnabled('pel_m_050432');

    clickElement('pel_m_050436', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050437');
    elementShouldBeEnabled('pel_m_050438');
  });
});
