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

  it('Upper abdomen, kidney/adrenal gland', () => {
    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_c_0702161');
    elementShouldBeEnabled('tho_c_0704112');

    clickElement('tho_c_0702161');
    elementShouldBeEnabled('tho_c_0702163');
    elementShouldBeEnabled('tho_c_0703139');

    clickElement('tho_c_0702163');
    elementShouldBeEnabled('tho_c_0702165');
    elementShouldBeEnabled('tho_c_0702166');
    elementShouldBeEnabled('tho_c_0702168');
    elementShouldBeEnabled('tho_c_0702171');
    elementShouldBeEnabled('tho_c_0702172');

    clickElement('tho_c_0703139');
    elementShouldBeEnabled('tho_c_0703141');
    elementShouldBeEnabled('tho_c_0703142');
    elementShouldBeEnabled('tho_c_0703144');
    elementShouldBeEnabled('tho_c_0703145');
    elementShouldBeEnabled('tho_c_0703146');
    elementShouldBeEnabled('tho_c_0703147');

    clickElement('tho_c_0704112');
    elementShouldBeEnabled('tho_c_0704114');
    elementShouldBeEnabled('tho_c_0704115');
    elementShouldBeEnabled('tho_c_0704117');
    elementShouldBeEnabled('tho_c_0702171');
  });
});
