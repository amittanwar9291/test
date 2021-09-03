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

  it('Lymph nodes, axilla', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_0702100');
    elementShouldBeEnabled('tho_c_0702101');

    clickElement('tho_c_0702100');
    elementShouldBeEnabled('tho_c_070384');
    elementShouldBeEnabled('tho_c_070387');

    clickElement('tho_c_070384');
    elementShouldBeEnabled('tho_c_070385');
    clickElement('tho_c_070387', true, 'checkbox');
    elementShouldBeEnabled('tho_c_070388');

    clickElement('tho_c_0702101');
    elementShouldBeEnabled('tho_c_070384');
    elementShouldBeEnabled('tho_c_070479');

    clickElement('tho_c_070384');
    elementShouldBeEnabled('tho_c_070385');
    elementShouldBeEnabled('tho_c_0703136');
    elementShouldBeEnabled('tho_c_0703137');
    elementShouldBeEnabled('tho_c_0703138');

    clickElement('tho_c_070479', true, 'checkbox');
    elementShouldBeEnabled('tho_c_070480');
    elementShouldBeEnabled('tho_c_070484');
    elementShouldBeEnabled('tho_c_070485');
    elementShouldBeEnabled('tho_c_070486');
  });
});
