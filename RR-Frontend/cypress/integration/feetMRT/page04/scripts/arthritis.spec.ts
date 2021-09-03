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
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Arthritis', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    elementShouldBeEnabled('anc_m_0402238');
    elementShouldBeEnabled('anc_m_0402239');

    elementShouldBeEnabled('anc_m_040387');
    elementShouldBeEnabled('anc_m_040388');

    elementShouldBeEnabled('anc_m_0404103');
    elementShouldBeEnabled('anc_m_0404107');
    elementShouldBeEnabled('anc_m_0404111');
    elementShouldBeEnabled('anc_m_0404112');
    elementShouldBeEnabled('anc_m_0404113');

    elementShouldBeEnabled('anc_m_0405100');
    elementShouldBeEnabled('anc_m_0405101');
    elementShouldBeEnabled('anc_m_0405102');

    elementShouldBeEnabled('anc_m_0405107');
    elementShouldBeEnabled('anc_m_0405108');
    elementShouldBeEnabled('anc_m_0405109');

    cy.get('.stroke-none').click({ force: true });
    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('tspan')
      .eq(6)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('tspan')
      .eq(7)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-70 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    clickElement('anc_m_040388', true, 'checkbox');
    elementShouldBeEnabled('anc_m_040389');
    elementShouldBeEnabled('anc_m_040390');
    elementShouldBeEnabled('anc_m_040391');
    elementShouldBeEnabled('anc_m_040392');

    clickElement('anc_m_0404103', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0404105');
    elementShouldBeEnabled('anc_m_0404106');

    clickElement('anc_m_0404107', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0404109');
    elementShouldBeEnabled('anc_m_0404110');
  });
});
