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

  it('Lymph nodes', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_c_040207');
    elementShouldBeEnabled('tho_c_040208');

    clickElement('tho_c_040207');
    elementShouldBeEnabled('tho_c_040202');
    elementShouldBeEnabled('tho_c_040204');

    clickElement('tho_c_040208');
    elementShouldBeEnabled('tho_c_040312');
    elementShouldBeEnabled('tho_c_040313');
    elementShouldBeEnabled('tho_c_040314');
    elementShouldBeEnabled('tho_c_040315');
    elementShouldBeEnabled('tho_c_040316');

    elementShouldBeEnabled('tho_c_040503');
    elementShouldBeEnabled('tho_c_040507');
    elementShouldBeEnabled('tho_c_040508');
    elementShouldBeEnabled('tho_c_040509');

    clickElement('tho_c_040312');
    elementShouldBeEnabled('tho_c_040402');
    elementShouldBeEnabled('tho_c_040403');

    clickElement('tho_c_040315');
    elementShouldBeEnabled('tho_c_040413');
    elementShouldBeEnabled('tho_c_040414');
    elementShouldBeEnabled('tho_c_040415');
    elementShouldBeEnabled('tho_c_040416');

    clickElement('tho_c_040316');
    elementShouldBeEnabled('tho_c_040417');
    elementShouldBeEnabled('tho_c_040418');
    elementShouldBeEnabled('tho_c_040419');
    elementShouldBeEnabled('tho_c_040420');
    elementShouldBeEnabled('tho_c_040421');
    elementShouldBeEnabled('tho_c_040423');
    elementShouldBeEnabled('tho_c_040424');

    cy.byRRID('tho_c_040503').type('4');

    elementShouldBeEnabled('tho_c_040505');
    elementShouldBeEnabled('tho_c_040506');

    clickElement('tho_c_040509');
    elementShouldBeEnabled('tho_c_040510');
    elementShouldBeEnabled('tho_c_040511');
  });
});
