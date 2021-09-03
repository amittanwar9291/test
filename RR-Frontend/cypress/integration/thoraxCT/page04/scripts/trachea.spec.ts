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

  it('Trachea', () => {
    clickElement('tho_c_040105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_040292');
    elementShouldBeEnabled('tho_c_040293');
    elementShouldBeEnabled('tho_c_040294');
    elementShouldBeEnabled('tho_c_040295');

    clickElement('tho_c_040292');
    elementShouldBeEnabled('tho_c_040384');
    elementShouldBeEnabled('tho_c_040385');

    clickElement('tho_c_040293');
    elementShouldBeEnabled('tho_c_040388');
    elementShouldBeEnabled('tho_c_040390');
    elementShouldBeEnabled('tho_c_040393');

    clickElement('tho_c_040294');
    elementShouldBeEnabled('tho_c_040396');
    elementShouldBeEnabled('tho_c_040397');

    clickElement('tho_c_040295');
    elementShouldBeEnabled('tho_c_0403100');
    elementShouldBeEnabled('tho_c_0403103');
    elementShouldBeEnabled('tho_c_0403104');
    elementShouldBeEnabled('tho_c_0403105');
    elementShouldBeEnabled('tho_c_0403106');
    elementShouldBeEnabled('tho_c_0403107');

    clickElement('tho_c_0403103');
    elementShouldBeEnabled('tho_c_0403108');

    clickElement('tho_c_0403104');
    elementShouldBeEnabled('tho_c_0403108');

    clickElement('tho_c_0403105');
    elementShouldBeEnabled('tho_c_0403108');

    clickElement('tho_c_0403106');
    elementShouldBeEnabled('tho_c_0403108');

    clickElement('tho_c_0403107');
    elementShouldBeEnabled('tho_c_0403108');
  });
});
