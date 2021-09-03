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

  it('Mass Char I - describe', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('none');
    selectElementByRadioRole(2);
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('tho_c_040211');
    cy.get('.ui-tabview-nav > :nth-child(2)').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('tho_c_040438');

    elementShouldBeEnabled('tho_c_040259');
    elementShouldBeEnabled('tho_c_040260');
    elementShouldBeEnabled('tho_c_040353');
    elementShouldBeEnabled('tho_c_040356');
    elementShouldBeEnabled('tho_c_040359');

    elementShouldBeEnabled('tho_c_040440');
    elementShouldBeEnabled('tho_c_040441');
    elementShouldBeEnabled('tho_c_040443');
    elementShouldBeEnabled('tho_c_040444');
    elementShouldBeEnabled('tho_c_040446');
    elementShouldBeEnabled('tho_c_040447');
    elementShouldBeEnabled('tho_c_040448');

    elementShouldBeEnabled('tho_c_040525');
    elementShouldBeEnabled('tho_c_040526');
    elementShouldBeEnabled('tho_c_040527');
    elementShouldBeEnabled('tho_c_040519');
    elementShouldBeEnabled('tho_c_040520');
    elementShouldBeEnabled('tho_c_040521');
    elementShouldBeEnabled('tho_c_040522');
    elementShouldBeEnabled('tho_c_040523');

    clickElement('tho_c_040260');
    elementShouldBeEnabled('tho_c_040262');
    elementShouldBeEnabled('tho_c_040263');
    elementShouldBeEnabled('tho_c_040264');

    clickElement('tho_c_040527', true, 'checkbox');
    elementShouldBeEnabled('tho_c_040528');
    elementShouldBeEnabled('tho_c_040529');
    elementShouldBeEnabled('tho_c_040530');
  });
});
