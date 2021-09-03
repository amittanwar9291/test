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

context('Page 07 - ThoraxCT', () => {
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

  it('Pleural mass Diff Dia know', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('7')
      .click({ force: true });

    clickElement('tho_c_070105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);

    selectElementByRadioRole(2);

    clickElement('tho_c_070410');

    elementShouldBeEnabled('tho_c_070233');
    elementShouldBeEnabled('tho_c_070239');

    selectFindingsDropdownOption('tho_c_070233', 'span', 14, true);
    elementShouldBeEnabled('tho_c_0702132');
    elementShouldBeEnabled('tho_c_070235');
    elementShouldBeEnabled('tho_c_070332');

    selectFindingsDropdownOption('tho_c_070235', 'span', 13, true);
    elementShouldBeEnabled('tho_c_070236');
    elementShouldBeEnabled('tho_c_070238');

    selectFindingsDropdownOption('tho_c_070238', 'span', 12, true);
  });
});
