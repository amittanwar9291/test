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

  it('Osteomyelitis', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(12);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040206');
    elementShouldBeEnabled('hip_m_040235');
    elementShouldBeEnabled('hip_m_040236');
    elementShouldBeEnabled('hip_m_040238');
    elementShouldBeEnabled('hip_m_040239');

    elementShouldBeEnabled('hip_m_0403102');
    elementShouldBeEnabled('hip_m_0403103');

    elementShouldBeEnabled('hip_m_040471');
    elementShouldBeEnabled('hip_m_040483');
    elementShouldBeEnabled('hip_m_040484');

    elementShouldBeEnabled('hip_m_0405109');
    elementShouldBeEnabled('hip_m_0405111');
    elementShouldBeEnabled('hip_m_0405112');
    elementShouldBeEnabled('hip_m_0405113');
    elementShouldBeEnabled('hip_m_0405114');
    elementShouldBeEnabled('hip_m_0405118');
    elementShouldBeEnabled('hip_m_0405120');
    elementShouldBeEnabled('hip_m_0405121');

    clickElement('hip_m_040206');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Os_ilium')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Acetabulum')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Os_pubis')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Os_ischium')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Acetabulum')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurkopf')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurhals')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurschaft')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Os_ilium')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Os_pubis')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Os_ischium')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurkopf')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurhals')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurschaft')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.close-button')
      .eq(1)
      .click();

    clickElement('hip_m_0403103');
    elementShouldBeEnabled('hip_m_0403106');
    elementShouldBeEnabled('hip_m_0403114');
    elementShouldBeEnabled('hip_m_0403116');

    clickElement('hip_m_040471');
    elementShouldBeEnabled('hip_m_040474');

    clickElement('hip_m_0405109');
    elementShouldBeEnabled('hip_m_0405110');

    clickElement('hip_m_0405114');
    elementShouldBeEnabled('hip_m_0405117');

    clickElement('hip_m_0405121');
    elementShouldBeEnabled('hip_m_0405122');
  });
});
