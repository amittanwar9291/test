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

  it('Esophagus', () => {
    clickElement('tho_c_040105', true, 'radio');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_040283');
    elementShouldBeEnabled('tho_c_040284');
    elementShouldBeEnabled('tho_c_040285');
    elementShouldBeEnabled('tho_c_040286');
    elementShouldBeEnabled('tho_c_040287');
    elementShouldBeEnabled('tho_c_040288');
    elementShouldBeEnabled('tho_c_040289');
    elementShouldBeEnabled('tho_c_040290');
    elementShouldBeEnabled('tho_c_040291');

    clickElement('tho_c_040284');
    elementShouldBeEnabled('tho_c_040371');
    elementShouldBeEnabled('tho_c_040372');
    elementShouldBeEnabled('tho_c_040373');

    clickElement('tho_c_040286');
    elementShouldBeEnabled('tho_c_040371');
    elementShouldBeEnabled('tho_c_040372');
    elementShouldBeEnabled('tho_c_040373');
    elementShouldBeEnabled('tho_c_040375');
    elementShouldBeEnabled('tho_c_040378');

    clickElement('tho_c_040291');
    elementShouldBeEnabled('tho_c_040381');
  });
});
