import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
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
  it('Mass_Characterization I_I know', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);
    selectElementByRadioRole(3);

    elementShouldBeEnabled('tho_c_0502401');
    clickElement('tho_c_0502401', true, 'checkbox');

    elementShouldBeEnabled('tho_c_0502303');
    elementShouldBeEnabled('tho_c_0502304');

    elementShouldBeEnabled('tho_c_050204');
    elementShouldBeEnabled('tho_c_050205');

    elementShouldBeEnabled('tho_c_0503245');

    elementShouldBeEnabled('tho_c_0503240');
    elementShouldBeEnabled('tho_c_0503242');

    elementShouldBeEnabled('uni_05_003');
    elementShouldBeEnabled('uni_05_005');
    elementShouldBeEnabled('uni_05_006');

    elementShouldBeEnabled('tho_c_0504302');
    elementShouldBeEnabled('tho_c_0504303');
    elementShouldBeEnabled('tho_c_050506');
    elementShouldBeEnabled('tho_c_0504310');
    elementShouldBeEnabled('tho_c_0504311');

    elementShouldBeEnabled('tho_c_0504313');
    elementShouldBeEnabled('tho_c_0504314');

    elementShouldBeEnabled('tho_c_0505302');
    elementShouldBeEnabled('tho_c_0505303');
    elementShouldBeEnabled('tho_c_0505303');
    elementShouldBeEnabled('tho_c_0505304');
    elementShouldBeEnabled('tho_c_0505305');
    elementShouldBeEnabled('tho_c_0505306');

    elementShouldBeEnabled('tho_c_0505313');

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
      .should('have.css', 'fill', 'rgb(248, 248, 188)');

    cy.get('.ng-valid')
      .shadowFind('.close-button')
      .eq(0)
      .click({ force: true });

    clickElement('tho_c_050205', true, 'radio');
    elementShouldBeEnabled('tho_c_0502302');

    clickElement('tho_c_0504303', true, 'radio');
    elementShouldBeEnabled('tho_c_0504304');
    elementShouldBeEnabled('tho_c_0504305');

    clickElement('tho_c_050506', true, 'radio');
    elementShouldBeEnabled('tho_c_0504307');

    clickElement('tho_c_0505306', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0505307');
    elementShouldBeEnabled('tho_c_0505308');
    elementShouldBeEnabled('tho_c_0505309');
    elementShouldBeEnabled('tho_c_0505310');
    elementShouldBeEnabled('tho_c_0505311');
    elementShouldBeEnabled('tho_c_0505312');
  });
});
