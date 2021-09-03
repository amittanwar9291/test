import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Char II know', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(5);
    selectElementByRadioRole(2);
    cy.get(':nth-child(1) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040232');
    cy.get('.ui-tabview-nav > :nth-child(2)').should('not.have.css', 'pointer-events', 'none');
    cy.get('.ui-tabview-nav > :nth-child(3)').should('not.have.css', 'pointer-events', 'none');

    cy.get('.ui-tabview-nav > :nth-child(2)').click();
    elementShouldBeEnabled('tho_m_040246');
    elementShouldBeEnabled('tho_m_040249');
    elementShouldBeEnabled('tho_m_040252');
    elementShouldBeEnabled('tho_m_040257');
    elementShouldBeEnabled('tho_m_040258');
    elementShouldBeEnabled('tho_m_040259');

    elementShouldBeEnabled('tho_m_040362');
    elementShouldBeEnabled('tho_m_040363');
    elementShouldBeEnabled('tho_m_040364');

    elementShouldBeEnabled('tho_m_040473');
    elementShouldBeEnabled('tho_m_040474');
    elementShouldBeEnabled('tho_m_040475');
    elementShouldBeEnabled('tho_m_040476');
    elementShouldBeEnabled('tho_m_040477');

    elementShouldBeEnabled('tho_m_040482');
    elementShouldBeEnabled('tho_m_040483');
    elementShouldBeEnabled('tho_m_040484');
    elementShouldBeEnabled('tho_m_040485');

    elementShouldBeEnabled('tho_m_040546');
    elementShouldBeEnabled('tho_m_040547');
    elementShouldBeEnabled('tho_m_040548');

    clickElement('tho_m_040477', true, 'radio');
    elementShouldBeEnabled('tho_m_040478');
    elementShouldBeEnabled('tho_m_040479');
    elementShouldBeEnabled('tho_m_040480');

    clickElement('tho_m_040547', true, 'radio');
    elementShouldBeEnabled('tho_m_040549');
    elementShouldBeEnabled('tho_m_040550');
    elementShouldBeEnabled('tho_m_040552');
    elementShouldBeEnabled('tho_m_040553');
    elementShouldBeEnabled('tho_m_040554');
    elementShouldBeEnabled('tho_m_040555');
    elementShouldBeEnabled('tho_m_040556');

    clickElement('tho_m_040548', true, 'radio');
    elementShouldBeEnabled('tho_m_040549');
    elementShouldBeEnabled('tho_m_040550');
    elementShouldBeEnabled('tho_m_040552');
    elementShouldBeEnabled('tho_m_040553');
    elementShouldBeEnabled('tho_m_040554');
    elementShouldBeEnabled('tho_m_040555');
    elementShouldBeEnabled('tho_m_040556');
  });
});
