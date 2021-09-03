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
  it('Characterization_Bronchial tubes', () => {
    clickElement('tho_c_0601103', true, 'radio');
    cy.byRRID('tho_c_0603100').click();

    findingColumn.selectFindingOptionByAppearance(6);

    elementShouldBeEnabled('tho_c_0603172');
    clickElement('tho_c_0603172', true, 'checkbox');

    elementShouldBeEnabled('tho_c_0603173');
    elementShouldBeEnabled('tho_c_0603174');
    elementShouldBeEnabled('tho_c_0603175');
    elementShouldBeEnabled('tho_c_0603176');
    elementShouldBeEnabled('tho_c_0603177');
    elementShouldBeEnabled('tho_c_0603178');

    elementShouldBeEnabled('tho_c_0604204');

    clickElement('tho_c_0603178', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0603179');
    elementShouldBeEnabled('tho_c_0603180');

    clickElement('tho_c_0604204', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0604205');
    elementShouldBeEnabled('tho_c_0604206');
  });
});
