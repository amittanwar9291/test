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
  it('Pulmonary infarction', () => {
    clickElement('tho_c_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('tho_c_050204');
    elementShouldBeEnabled('tho_c_050205');
    elementShouldBeEnabled('tho_c_050359');
    elementShouldBeEnabled('tho_c_050360');
    elementShouldBeEnabled('tho_c_050361');

    elementShouldBeEnabled('tho_c_050363');
    elementShouldBeEnabled('tho_c_050364');
    elementShouldBeEnabled('tho_c_050365');

    clickElement('tho_c_050204', true, 'radio');

    elementShouldBeEnabled('tho_c_050214');
    cy.byRRID('tho_c_050214').click();

    cy.get('.ng-valid')
      .shadowFind('.color2')
      .eq(0)
      .click({ force: true });
    cy.get('.ng-valid')
      .shadowFind('.color2')
      .eq(0)
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('.color4')
      .eq(0)
      .click({ force: true });

    cy.get('.ng-valid')
      .shadowFind('.color2')
      .eq(0)
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('.close-button')
      .eq(0)
      .click({ force: true });

    clickElement('tho_c_050205', true, 'radio');
    elementShouldBeEnabled('tho_c_0502302');

    cy.byRRID('tho_c_0502302').click();

    cy.get('.ng-valid')
      .shadowFind('path')
      .eq(1)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('path')
      .eq(5)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.ng-valid')
      .shadowFind('.close-button')
      .eq(0)
      .click({ force: true });
  });
});
