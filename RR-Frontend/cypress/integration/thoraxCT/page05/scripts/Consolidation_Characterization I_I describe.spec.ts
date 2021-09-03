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
  it('Consolidation_Characterization I_I describe', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(3);

    elementShouldBeEnabled('tho_c_050202');

    elementShouldBeEnabled('tho_c_0502311');
    elementShouldBeEnabled('tho_c_0502312');
    elementShouldBeEnabled('tho_c_0502303');

    elementShouldBeEnabled('tho_c_050333');
    elementShouldBeEnabled('tho_c_050334');

    elementShouldBeEnabled('tho_c_0503231');
    elementShouldBeEnabled('tho_c_0503232');
    elementShouldBeEnabled('tho_c_0503233');

    clickElement('tho_c_050334', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0503228');
    elementShouldBeEnabled('tho_c_0503229');
    elementShouldBeEnabled('tho_c_050336');

    clickElement('tho_c_0504227', true, 'radio');

    elementShouldBeEnabled('tho_c_0504228');
    elementShouldBeEnabled('tho_c_0504229');
    elementShouldBeEnabled('tho_c_0504230');
    elementShouldBeEnabled('tho_c_0504231');
    elementShouldBeEnabled('tho_c_0504232');

    clickElement('tho_c_0505215', true, 'radio');
    elementShouldBeEnabled('tho_c_0505216');
    elementShouldBeEnabled('tho_c_0505217');
    elementShouldBeEnabled('tho_c_0505218');

    clickElement('tho_c_0502311', true, 'radio');
    elementShouldBeEnabled('ho_c_0502315');

    cy.byRRID('ho_c_0502315').click();

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
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.ng-valid')
      .shadowFind('.close-button-line')
      .eq(0)
      .click({ force: true });

    clickElement('tho_c_0502312', true, 'radio');
    elementShouldBeEnabled('tho_c_0502205');
  });
});
