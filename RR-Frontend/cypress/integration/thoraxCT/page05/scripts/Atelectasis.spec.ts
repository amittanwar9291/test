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

context('Page 05 - Thoracic CT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_050106', 'tho_c_050106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_LungParenchyma.url + '/' + pageId);
        });
      });
    });
  });
  it('Atelectasis', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('tho_c_050274');
    elementShouldBeEnabled('tho_c_050277');
    elementShouldBeEnabled('tho_c_050279');

    clickElement('tho_c_050274', true, 'radio');

    elementShouldBeEnabled('tho_c_0502305');
    elementShouldBeEnabled('tho_c_0502306');

    clickElement('tho_c_050277', true, 'radio');

    cy.byRRID('tho_c_0502302').click();
    cy.get('.ng-valid')
      .shadowFind('#rightOL')
      .click({ force: true });
    cy.get('.ng-valid')
      .shadowFind('#rightOL')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.ng-valid')
      .shadowFind('#leftLI')
      .click({ force: true });
    cy.get('.ng-valid')
      .shadowFind('#leftLI')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.ng-valid')
      .shadowFind('#rightOL')
      .should('have.css', 'fill', 'rgb(255, 255, 255)');

    cy.get('.ng-valid')
      .shadowFind('.close-button-line')
      .eq(0)
      .click({ force: true });
    clickElement('tho_c_050279', true, 'radio');
    cy.byRRID('tho_c_050214').click();
    cy.get('.ng-valid')
      .shadowFind('.color2')
      .eq(0)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.ng-valid')
      .shadowFind('.cross-fragment')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('tho_c_0504219');
    elementShouldBeEnabled('tho_c_0504220');
    elementShouldBeEnabled('tho_c_0504222');
    elementShouldBeEnabled('tho_c_0504223');
    elementShouldBeEnabled('tho_c_0504224');
  });
});
