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

  it('Upper abdomen, liver/gall bladder', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_0702103');
    elementShouldBeEnabled('tho_c_070391');
    elementShouldBeEnabled('tho_c_070396');
    elementShouldBeEnabled('tho_c_070397');

    clickElement('tho_c_0702103');
    elementShouldBeEnabled('tho_c_0702105');
    elementShouldBeEnabled('tho_c_0702106');
    elementShouldBeEnabled('tho_c_0702107');
    elementShouldBeEnabled('tho_c_0702110');
    elementShouldBeEnabled('tho_c_0702117');

    clickElement('tho_c_070391');
    elementShouldBeEnabled('tho_c_070392');
    elementShouldBeEnabled('tho_c_070393');
    elementShouldBeEnabled('tho_c_070395');

    clickElement('tho_c_070395');
    elementShouldBeEnabled('tho_c_070394');
  });
});
