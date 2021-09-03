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

  it('Scrotum, infection/inflammation', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(2000);
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');

    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_050243');
    elementShouldBeEnabled('pel_m_050295');
    elementShouldBeEnabled('pel_m_050297');
    elementShouldBeEnabled('pel_m_050299');
    elementShouldBeEnabled('pel_m_0502100');

    elementShouldBeEnabled('pel_m_050353');
    elementShouldBeEnabled('pel_m_050354');
    elementShouldBeEnabled('pel_m_050355');
    elementShouldBeEnabled('pel_m_050358');
    elementShouldBeEnabled('pel_m_050359');
    elementShouldBeEnabled('pel_m_050360');
    elementShouldBeEnabled('pel_m_050361');
    elementShouldBeEnabled('pel_m_050362');
    elementShouldBeEnabled('pel_m_050363');

    clickElement('pel_m_050353', true, 'radio');
    elementShouldBeEnabled('pel_m_050356');
    elementShouldBeEnabled('pel_m_050357');

    clickElement('pel_m_050354', true, 'radio');
    elementShouldBeEnabled('pel_m_050356');
    elementShouldBeEnabled('pel_m_050357');
  });
});
