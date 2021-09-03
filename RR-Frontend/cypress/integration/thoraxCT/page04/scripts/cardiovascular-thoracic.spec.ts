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

  it('Cardiovascular/Thoracic aorta', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_040243');
    elementShouldBeEnabled('tho_c_040244');

    clickElement('tho_c_040244');
    elementShouldBeEnabled('tho_c_040246');
    elementShouldBeEnabled('tho_c_040247');
    elementShouldBeEnabled('tho_c_040249');
    elementShouldBeEnabled('tho_c_040250');
    elementShouldBeEnabled('tho_c_040251');
    elementShouldBeEnabled('tho_c_040252');
    elementShouldBeEnabled('tho_c_040254');
  });
});
