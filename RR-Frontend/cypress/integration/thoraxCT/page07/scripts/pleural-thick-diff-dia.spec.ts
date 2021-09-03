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
          cy.visit(thoraxCTRoutes.ThoraxCT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Pleural thick Diff Dia', () => {
    clickElement('tho_c_070105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');
    clickElement('tho_c_070336');
    elementShouldBeEnabled('tho_c_0702137');
    selectFindingsDropdownOption('tho_c_0702137', 'span', 3, true);
    elementShouldBeEnabled('tho_c_0702138');

    elementShouldBeEnabled('tho_c_0702139');
    selectFindingsDropdownOption('tho_c_0702139', 'span', 2, true);
    elementShouldBeEnabled('tho_c_0702136');
  });
});
