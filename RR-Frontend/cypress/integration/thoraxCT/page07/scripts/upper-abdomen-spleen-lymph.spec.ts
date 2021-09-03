import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  it('Upper abdomen, pancreas', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_0702192');
    elementShouldBeEnabled('tho_c_0702174');
    elementShouldBeEnabled('tho_c_0702180');

    clickElement('tho_c_0702174');
    elementShouldBeEnabled('tho_c_0702175');
    elementShouldBeEnabled('tho_c_0702177');

    clickElement('tho_c_0702177');
    elementShouldBeEnabled('tho_c_0702178');
    elementShouldBeEnabled('tho_c_0702179');
  });
});
