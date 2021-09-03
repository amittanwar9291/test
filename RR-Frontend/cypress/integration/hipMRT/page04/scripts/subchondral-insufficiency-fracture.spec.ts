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

  it('Subchondral insufficiency fracture (SIF)', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040205');
    elementShouldBeEnabled('hip_m_040354');
    elementShouldBeEnabled('hip_m_040355');
    elementShouldBeEnabled('hip_m_040357');
    elementShouldBeEnabled('hip_m_040358');
    elementShouldBeEnabled('hip_m_040359');
    elementShouldBeEnabled('hip_m_040441');

    clickElement('hip_m_040205');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Rechts_Femurkopf')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#Links_Femurkopf')
      .click()
      .should('have.class', 'caption-selected');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.close-button')
      .eq(1)
      .click();

    clickElement('hip_m_040355');
    elementShouldBeEnabled('hip_m_040356');

    clickElement('hip_m_040359');
    elementShouldBeEnabled('hip_m_040362');
    elementShouldBeEnabled('hip_m_040363');

    clickElement('hip_m_040441');
    elementShouldBeEnabled('hip_m_040442');
  });
});
