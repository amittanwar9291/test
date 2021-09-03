import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Cardiovascular/Pulmonary arteries', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040208');
    elementShouldBeEnabled('tho_m_040315');
    elementShouldBeEnabled('tho_m_040317');
    elementShouldBeEnabled('tho_m_040319');
    elementShouldBeEnabled('tho_m_040321');
    elementShouldBeEnabled('tho_m_040324');
    elementShouldBeEnabled('tho_m_040325');
    elementShouldBeEnabled('tho_m_040425');
    elementShouldBeEnabled('tho_m_040426');
    elementShouldBeEnabled('tho_m_040427');
    elementShouldBeEnabled('tho_m_040428');
    elementShouldBeEnabled('tho_m_040429');
    elementShouldBeEnabled('tho_m_040430');
    elementShouldBeEnabled('tho_m_040431');
    elementShouldBeEnabled('tho_m_040432');

    clickElement('tho_m_040208', true, 'checkbox');
    elementShouldBeEnabled('tho_m_040210');
    elementShouldBeEnabled('tho_m_040212');
    elementShouldBeEnabled('tho_m_040215');
    elementShouldBeEnabled('tho_m_040217');

    clickElement('tho_m_040210');
    cy.get('.f-horizontal > .ng-valid')
      .shadowFind('path')
      .eq(15)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal > .ng-valid')
      .shadowFind('path')
      .eq(11)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal > .ng-valid')
      .shadowFind('path')
      .eq(19)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#closeCircle')
      .click({ force: true });

    clickElement('tho_m_040212');
    elementShouldBeEnabled('tho_m_040213');
    elementShouldBeEnabled('tho_m_040214');

    selectFindingsDropdownOption('tho_m_040514', 'span', 3, true);
    elementShouldBeEnabled('tho_m_040515');

    selectFindingsDropdownOption('tho_m_040517', 'span', 6, true);
    elementShouldBeEnabled('tho_m_040518');
  });
});
