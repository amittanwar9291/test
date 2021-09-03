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
context('Page 06 - Thoracic CT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_LungInterstitium.url + '/' + pageId);
        });
      });
    });
  });
  it('Characterization_Nodular changes', () => {
    clickElement('tho_c_0601103', true, 'radio');
    cy.byRRID('tho_c_0603100').click();

    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('tho_c_0603109');
    elementShouldBeEnabled('tho_c_0603110');
    elementShouldBeEnabled('tho_c_0603111');

    elementShouldBeEnabled('tho_c_0604107');
    elementShouldBeEnabled('tho_c_0604202');
    elementShouldBeEnabled('tho_c_0604203');

    elementShouldBeEnabled('tho_c_0604111');
    elementShouldBeEnabled('tho_c_0604112');
    elementShouldBeEnabled('tho_c_0604114');
    elementShouldBeEnabled('tho_c_0604115');

    elementShouldBeEnabled('tho_c_0605106');
    elementShouldBeEnabled('tho_c_0605107');
    elementShouldBeEnabled('tho_c_0605108');
    elementShouldBeEnabled('tho_c_0605109');

    clickElement('tho_c_0603109', true, 'radio');
    elementShouldBeEnabled('tho_c_0603113');
    elementShouldBeEnabled('tho_c_0603114');
  });
});
