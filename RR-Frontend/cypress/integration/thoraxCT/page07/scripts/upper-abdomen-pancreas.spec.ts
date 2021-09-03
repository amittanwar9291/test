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

  it('Upper abdomen, spleen/lymph nodes/hiatus hernia', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_0702191');
    elementShouldBeEnabled('tho_c_070323');
    elementShouldBeEnabled('tho_c_070325');

    clickElement('tho_c_0702191');
    elementShouldBeEnabled('tho_c_0702183');
    elementShouldBeEnabled('tho_c_0702184');
    elementShouldBeEnabled('tho_c_0702185');
    elementShouldBeEnabled('tho_c_0702186');
    elementShouldBeEnabled('tho_c_0702187');
    elementShouldBeEnabled('tho_c_0702159');
    elementShouldBeEnabled('tho_c_0702190');

    clickElement('tho_c_070323');
    elementShouldBeEnabled('tho_c_070324');
  });
});
