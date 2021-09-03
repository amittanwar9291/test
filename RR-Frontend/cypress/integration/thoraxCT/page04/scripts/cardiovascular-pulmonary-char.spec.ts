import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxCT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Cardiovascular/Pulmonary arteries', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_040209');
    elementShouldBeEnabled('tho_c_040317');

    elementShouldBeEnabled('tho_c_040212');
    elementShouldBeEnabled('tho_c_040319');
    elementShouldBeEnabled('tho_c_040321');
    elementShouldBeEnabled('tho_c_040323');
    elementShouldBeEnabled('tho_c_040325');
    elementShouldBeEnabled('tho_c_040328');
    elementShouldBeEnabled('tho_c_040229');
    elementShouldBeEnabled('tho_c_040426');
    elementShouldBeEnabled('tho_c_040427');
    elementShouldBeEnabled('tho_c_040428');
    elementShouldBeEnabled('tho_c_040429');
    elementShouldBeEnabled('tho_c_040430');
    elementShouldBeEnabled('tho_c_040431');
    elementShouldBeEnabled('tho_c_040432');
    elementShouldBeEnabled('tho_c_040433');

    clickElement('tho_c_040212', true, 'checkbox');
    elementShouldBeEnabled('tho_c_040214');
    elementShouldBeEnabled('tho_c_040216');
    elementShouldBeEnabled('tho_c_040218');
    elementShouldBeEnabled('tho_c_040221');

    clickElement('tho_c_040214', true);
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('path')
      .eq(17)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('path')
      .eq(15)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('path')
      .eq(19)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('#closeCircle')
      .click({ force: true });

    clickElement('tho_c_040216');
    elementShouldBeEnabled('tho_c_040217');
    clickElement('tho_c_040218');
    elementShouldBeEnabled('tho_c_040219');

    clickElement('tho_c_040433');
    elementShouldBeEnabled('tho_c_040513');
    elementShouldBeEnabled('tho_c_040514');
    elementShouldBeEnabled('tho_c_040515');
    elementShouldBeEnabled('tho_c_040516');
    elementShouldBeEnabled('tho_c_040517');
    elementShouldBeEnabled('tho_c_040518');
  });
});
