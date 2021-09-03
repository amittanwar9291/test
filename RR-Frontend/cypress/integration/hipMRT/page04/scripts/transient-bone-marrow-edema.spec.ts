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

  it('Transient bone marrow edema', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040206');
    elementShouldBeEnabled('hip_m_040372');
    elementShouldBeEnabled('hip_m_040373');
    elementShouldBeEnabled('hip_m_040374');
    elementShouldBeEnabled('hip_m_040448');
    elementShouldBeEnabled('hip_m_040449');
    elementShouldBeEnabled('hip_m_040450');

    clickElement('hip_m_040450');
    elementShouldBeEnabled('hip_m_040451');
    elementShouldBeEnabled('hip_m_040452');
    elementShouldBeEnabled('hip_m_040453');
    elementShouldBeEnabled('hip_m_040454');

    clickElement('hip_m_040206');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurkopf')
      .click()
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurkopf')
      .click()
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurhals')
      .click()
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurhals')
      .click()
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.close-button')
      .eq(1)
      .click();
  });
});
