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

  it('Fracture calcaneus', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(10)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_040334');
    elementShouldBeEnabled('anc_m_040335');
    elementShouldBeEnabled('anc_m_040336');
    elementShouldBeEnabled('anc_m_0403208');

    clickElement('anc_m_040334', true, 'radio');
    elementShouldBeEnabled('anc_m_040435');
    elementShouldBeEnabled('anc_m_040436');

    clickElement('anc_m_040335', true, 'radio');
    elementShouldBeEnabled('anc_m_040437');
    elementShouldBeEnabled('anc_m_040439');

    clickElement('anc_m_040336', true, 'radio');
    elementShouldBeEnabled('anc_m_040440');
    elementShouldBeEnabled('anc_m_040441');
    elementShouldBeEnabled('anc_m_040442');

    clickElement('anc_m_0403208', true, 'radio');
    elementShouldBeEnabled('anc_m_0403209');
    elementShouldBeEnabled('anc_m_0403210');
  });
});
