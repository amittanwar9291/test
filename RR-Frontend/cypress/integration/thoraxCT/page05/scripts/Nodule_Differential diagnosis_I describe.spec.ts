import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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
  it('Nodule_Differential diagnosis_I describe', () => {
    clickElement('tho_c_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    cy.byRRID('tho_c_050401').click();

    elementShouldBeEnabled('tho_c_050320');
    elementShouldBeEnabled('tho_c_050232');

    selectDropdownOptionOS('tho_c_050232', 3, true, true);
    elementShouldBeEnabled('tho_c_050233');
    elementShouldBeEnabled('tho_c_050235');

    selectDropdownOptionOS('tho_c_050235', 4, true, true);
    elementShouldBeEnabled('tho_c_050236');
    elementShouldBeEnabled('tho_c_050238');

    clickElement('tho_c_050320', true, 'checkbox');
    elementShouldBeEnabled('tho_c_050322');
    elementShouldBeEnabled('tho_c_050323');

    clickElement('tho_c_050322', true, 'radio');

    cy.byRRID('tho_c_0503401').click();

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

    clickElement('tho_c_050323', true, 'radio');

    elementShouldBeEnabled('tho_c_0503235');
  });
});
