import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 04 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_040107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Bone marrow edema', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    elementShouldBeEnabled('anc_m_040358');
    elementShouldBeEnabled('anc_m_040359');
    elementShouldBeEnabled('anc_m_040360');
    elementShouldBeEnabled('anc_m_040361');
    elementShouldBeEnabled('anc_m_040362');

    elementShouldBeEnabled('anc_m_040473');
    elementShouldBeEnabled('anc_m_040474');
    elementShouldBeEnabled('anc_m_040475');
    elementShouldBeEnabled('anc_m_0404307');

    elementShouldBeEnabled('anc_m_040582');
    elementShouldBeEnabled('anc_m_040587');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(6)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(7)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });
  });
});
