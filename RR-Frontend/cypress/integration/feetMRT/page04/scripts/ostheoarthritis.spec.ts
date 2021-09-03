import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  it('Osteoarthritis', () => {
    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    elementShouldBeEnabled('anc_m_0402301');
    elementShouldBeEnabled('anc_m_0402302');

    elementShouldBeEnabled('anc_m_0404301');
    elementShouldBeEnabled('anc_m_0404302');
    elementShouldBeEnabled('anc_m_0404303');
    elementShouldBeEnabled('anc_m_0404304');
    elementShouldBeEnabled('anc_m_0404305');
    elementShouldBeEnabled('anc_m_0404306');

    elementShouldBeEnabled('anc_m_0405301');

    cy.get('.stroke-none').click({ force: true });
    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('tspan')
      .eq(10)
      .click();

    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_0403300');

    clickElement('anc_m_0403300', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0403302');
    elementShouldBeEnabled('anc_m_0403303');
    elementShouldBeEnabled('anc_m_0403305');
    elementShouldBeEnabled('anc_m_0403308');
    elementShouldBeEnabled('anc_m_0403310');
    elementShouldBeEnabled('anc_m_0403311');

    cy.get('.stroke-none').click({ force: true });
    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('tspan')
      .eq(13)
      .click();

    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('tspan')
      .eq(15)
      .click();

    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeDisabled('anc_m_0403300');
  });
});
