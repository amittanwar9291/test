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
context('Page 06 - Thoracic CT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_LungInterstitium.url + '/' + pageId);
        });
      });
    });
  });
  it('Localization_I describe', () => {
    clickElement('tho_c_0601103', true, 'radio');
    cy.byRRID('tho_c_0603100').click();

    findingColumn.selectFindingOptionByAppearance(1);
    cy.byRRID('tho_c_0602101').click();

    elementShouldBeEnabled('tho_c_0602105');
    elementShouldBeEnabled('tho_c_0602106');
    elementShouldBeEnabled('tho_c_0602107');
    elementShouldBeEnabled('tho_c_0602108');

    elementShouldBeEnabled('tho_c_0603103');
    elementShouldBeEnabled('tho_c_0603104');
    elementShouldBeEnabled('tho_c_0603105');
    elementShouldBeEnabled('tho_c_0603106');

    elementShouldBeEnabled('tho_c_0605101');
    elementShouldBeEnabled('tho_c_0605102');

    clickElement('tho_c_0605102', true, 'radio');
    elementShouldBeEnabled('tho_c_0605104');
    elementShouldBeEnabled('tho_c_0605105');

    cy.byRRID('tho_c_0603107').click();

    cy.get('.ng-valid')
      .shadowFind('#rightOL')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('#leftLI')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('.close-button')
      .eq(0)
      .click({ force: true });
  });
});
