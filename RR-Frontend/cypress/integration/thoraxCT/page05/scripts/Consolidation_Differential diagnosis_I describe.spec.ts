import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
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
  it('Consolidation_Differential diagnosis_I describe', () => {
    clickElement('tho_c_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(3);

    cy.byRRID('tho_c_050401').click();
    elementShouldBeEnabled('tho_c_050232');
    selectFindingsDropdownOption('tho_c_050232', 'span', 1, true);

    elementShouldBeEnabled('tho_c_050233');
    elementShouldBeEnabled('tho_c_050235');
    selectFindingsDropdownOption('tho_c_050235', 'span', 2, true);
    elementShouldBeEnabled('tho_c_050236');
  });
});
