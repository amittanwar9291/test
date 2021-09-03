import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Bone marrow edema', () => {
    clickElement('hip_m_040105');
    elementShouldBeEnabled('hip_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('hip_m_040107');

    elementShouldBeEnabled('hip_m_040206');

    elementShouldBeEnabled('hip_m_040366');
    elementShouldBeEnabled('hip_m_040367');
    elementShouldBeEnabled('hip_m_040368');
    elementShouldBeEnabled('hip_m_040369');
    elementShouldBeEnabled('hip_m_040370');

    elementShouldBeEnabled('hip_m_040444');
    elementShouldBeEnabled('hip_m_040445');
    elementShouldBeEnabled('hip_m_040446');

    elementShouldBeEnabled('hip_m_040593');

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
      .shadowFind('.close-button')
      .eq(1)
      .click();

    selectDropdownOptionOS('hip_m_040593', 3, true, true);
    elementShouldBeEnabled('hip_m_040594');
  });
});
