import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole, selectFindingsDropdownOption } from '../../../../shared/service';
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
          cy.visit(thoraxCTRoutes.ThoraxCT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Diff Dia - I describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('tho_c_040105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(5);
    selectElementByRadioRole(2);

    cy.get('.ui-tabview-nav > :nth-child(3)').click();
    elementShouldBeEnabled('tho_c_040276');

    selectFindingsDropdownOption('tho_c_040276', 'span', 9, true);
    elementShouldBeEnabled('tho_c_040277');
    elementShouldBeEnabled('tho_c_040279');
    elementShouldBeEnabled('tho_c_040368');

    selectFindingsDropdownOption('tho_c_040279', 'span', 5, true);
    elementShouldBeEnabled('tho_c_040280');

    selectFindingsDropdownOption('tho_c_040282', 'span', 4, true);
  });
});
