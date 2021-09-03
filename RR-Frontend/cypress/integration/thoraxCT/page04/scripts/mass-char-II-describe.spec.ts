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

  it('Mass Char II - describe', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('none');
    selectElementByRadioRole(2);
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('tho_c_040211');
    cy.get('.ui-tabview-nav > :nth-child(2)').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('tho_c_040438');

    cy.get('.ui-tabview-nav > :nth-child(2)').click();

    elementShouldBeEnabled('tho_c_040266');
    elementShouldBeEnabled('tho_c_040267');
    elementShouldBeEnabled('tho_c_040268');
    elementShouldBeEnabled('tho_c_040269');
    elementShouldBeEnabled('tho_c_040270');

    elementShouldBeEnabled('tho_c_040362');
    elementShouldBeEnabled('tho_c_040363');
    elementShouldBeEnabled('tho_c_040364');
    elementShouldBeEnabled('tho_c_040365');

    clickElement('tho_c_040270', true, 'radio');
    elementShouldBeEnabled('tho_c_040271');
    elementShouldBeEnabled('tho_c_040272');
    elementShouldBeEnabled('tho_c_040273');
  });
});
