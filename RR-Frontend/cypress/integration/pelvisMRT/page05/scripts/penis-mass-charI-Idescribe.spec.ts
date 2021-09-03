import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

    elementShouldBeEnabled('pel_m_050232');
    elementShouldBeEnabled('pel_m_050236');

    elementShouldBeEnabled('pel_m_050240');
    elementShouldBeEnabled('pel_m_050241');
    elementShouldBeEnabled('pel_m_050242');
    elementShouldBeEnabled('pel_m_050243');

    elementShouldBeEnabled('pel_m_050319');
    elementShouldBeEnabled('pel_m_050321');
    elementShouldBeEnabled('pel_m_050324');

    elementShouldBeEnabled('pel_m_050417');
    elementShouldBeEnabled('pel_m_050418');

    elementShouldBeEnabled('pel_m_050420');
    elementShouldBeEnabled('pel_m_050421');
    elementShouldBeEnabled('pel_m_050422');

    elementShouldBeEnabled('pel_m_050424');
    elementShouldBeEnabled('pel_m_050425');

    elementShouldBeEnabled('pel_m_050511');
    elementShouldBeEnabled('pel_m_050513');
  });
});
