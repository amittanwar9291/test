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

  it('Osteoarthritis lesion', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('anc_m_040107');
    elementShouldBeEnabled('anc_m_040217');

    elementShouldBeEnabled('anc_m_040368');
    elementShouldBeEnabled('anc_m_040371');
    elementShouldBeEnabled('anc_m_040373');
    elementShouldBeEnabled('anc_m_040379');

    elementShouldBeEnabled('anc_m_040486');
    elementShouldBeEnabled('anc_m_040483');
    elementShouldBeEnabled('anc_m_040484');

    clickElement('anc_m_040217');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(10)
      .click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });
    elementShouldBeEnabled('anc_m_0405303');

    clickElement('anc_m_040217');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(18)
      .click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });
    elementShouldBeEnabled('anc_m_0405304');
    elementShouldBeEnabled('anc_m_0405307');

    clickElement('anc_m_040217');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(19)
      .click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });
    elementShouldBeEnabled('anc_m_0405305');

    clickElement('anc_m_040217');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(14)
      .click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });
    elementShouldBeEnabled('anc_m_0405307');

    clickElement('anc_m_040371', true, 'radio');
    elementShouldBeEnabled('anc_m_040372');

    clickElement('anc_m_040373', true, 'radio');
    elementShouldBeEnabled('anc_m_040374');
    elementShouldBeEnabled('anc_m_040377');
    elementShouldBeEnabled('anc_m_040378');

    clickElement('anc_m_040374', true, 'checkbox');
    elementShouldBeEnabled('anc_m_040375');
    elementShouldBeEnabled('anc_m_040376');
  });
});
