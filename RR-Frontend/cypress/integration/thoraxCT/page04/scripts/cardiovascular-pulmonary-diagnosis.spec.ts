import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
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

  it('Cardiovascular/Pulmonary arteries - Diagnosis', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_040209');
    elementShouldBeEnabled('tho_c_040317');

    clickElement('tho_c_040317', true);

    elementShouldBeEnabled('tho_c_040224');
    elementShouldBeEnabled('tho_c_040228');
    elementShouldBeEnabled('tho_c_040229');
    elementShouldBeEnabled('tho_c_040230');

    clickElement('tho_c_040224');
    elementShouldBeEnabled('tho_c_040226');
    elementShouldBeEnabled('tho_c_040227');

    clickElement('tho_c_040229');
    elementShouldBeEnabled('tho_c_040331');
    elementShouldBeEnabled('tho_c_040332');
    elementShouldBeEnabled('tho_c_040333');
    elementShouldBeEnabled('tho_c_040334');

    clickElement('tho_c_040334');
    elementShouldBeEnabled('tho_c_040435');
    elementShouldBeEnabled('tho_c_040436');
    elementShouldBeEnabled('tho_c_040437');
  });
});
