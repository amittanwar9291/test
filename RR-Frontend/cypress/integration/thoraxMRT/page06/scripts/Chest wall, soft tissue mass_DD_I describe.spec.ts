import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Page 06 - Thoracic MRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_060106', 'tho_m_060106-');
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
  it('Chest wall, soft tissue mass_DD_I describe', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);
    cy.byRRID('tho_m_060522').click();

    elementShouldBeEnabled('tho_m_060278');
    elementShouldBeEnabled('tho_m_060285');

    elementShouldBeEnabled('uni_06_003');
    elementShouldBeEnabled('uni_06_005');
    elementShouldBeEnabled('uni_06_006');
    selectFindingsDropdownOption('tho_m_060278', 'span', 4, true);
    elementShouldBeEnabled('tho_m_060279');
    elementShouldBeEnabled('tho_m_060281');
    selectFindingsDropdownOption('tho_m_060281', 'span', 4, true);
    elementShouldBeEnabled('tho_m_060284');
  });
});
