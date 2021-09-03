import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HipMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_040107', 'hip_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Stress fracture', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040205');
    elementShouldBeEnabled('hip_m_040341');
    elementShouldBeEnabled('hip_m_040345');
    elementShouldBeEnabled('hip_m_040346');

    clickElement('hip_m_040205');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurhals')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.close-button')
      .eq(1)
      .click();

    elementShouldBeEnabled('hip_m_040208');
    elementShouldBeEnabled('hip_m_040209');

    elementShouldBeEnabled('hip_m_040436');
    elementShouldBeEnabled('hip_m_040437');
    elementShouldBeEnabled('hip_m_040438');
    elementShouldBeEnabled('hip_m_040439');

    clickElement('hip_m_040341');
    elementShouldBeEnabled('hip_m_040343');
    elementShouldBeEnabled('hip_m_040344');

    clickElement('hip_m_040346');
    elementShouldBeEnabled('hip_m_040348');
    elementShouldBeEnabled('hip_m_040349');
    elementShouldBeEnabled('hip_m_040352');

    clickElement('hip_m_040343', true, 'radio');
    cy.byRRID('hip_m_040436')
      .shadowFind('div[role=radio]')
      .should('have.attr', 'aria-checked', 'true');

    clickElement('hip_m_040344', true, 'radio');
    cy.byRRID('hip_m_040437')
      .shadowFind('div[role=radio]')
      .should('have.attr', 'aria-checked', 'true');

    clickElement('hip_m_040348', true, 'radio');
    cy.byRRID('hip_m_040438')
      .shadowFind('div[role=radio]')
      .should('have.attr', 'aria-checked', 'true');

    clickElement('hip_m_040349', true, 'radio');
    cy.byRRID('hip_m_040439')
      .shadowFind('div[role=radio]')
      .should('have.attr', 'aria-checked', 'true');
  });
});
