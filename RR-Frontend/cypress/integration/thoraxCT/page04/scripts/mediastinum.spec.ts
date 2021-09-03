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

  it('Mediastinum', () => {
    clickElement('tho_c_040105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_c_040203');
    elementShouldBeEnabled('tho_c_040204');
    elementShouldBeEnabled('tho_c_040205');

    clickElement('tho_c_040203');
    elementShouldBeEnabled('tho_c_040302');
    elementShouldBeEnabled('tho_c_040303');

    clickElement('tho_c_040204');
    elementShouldBeEnabled('tho_c_040305');
    elementShouldBeEnabled('tho_c_040306');
  });
});
