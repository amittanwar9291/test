import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Diff Dia describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(5);
    selectElementByRadioRole(2);
    cy.get('.ui-tabview-nav > :nth-child(3)').click();

    selectFindingsDropdownOption('tho_m_040262', 'span', 9, true);
    elementShouldBeEnabled('tho_m_040263');
    elementShouldBeEnabled('tho_m_040265');
    elementShouldBeEnabled('tho_m_040367');

    selectFindingsDropdownOption('tho_m_040265', 'span', 10, true);
    elementShouldBeEnabled('tho_m_040266');
    elementShouldBeEnabled('tho_m_040268');

    selectFindingsDropdownOption('tho_m_040268', 'span', 11, true);
  });
});
