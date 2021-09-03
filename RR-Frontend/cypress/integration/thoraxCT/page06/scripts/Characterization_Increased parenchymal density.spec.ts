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
  it('Characterization_Increased parenchymal density.spec.ts', () => {
    clickElement('tho_c_0601103', true, 'radio');
    cy.byRRID('tho_c_0603100').click();

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_0603126');
    elementShouldBeEnabled('tho_c_0604200');
    elementShouldBeEnabled('tho_c_0605114');

    clickElement('tho_c_0603126', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0603128');
    elementShouldBeEnabled('tho_c_0603129');

    clickElement('tho_c_0604200', true, 'checkbox');
    elementShouldBeEnabled('tho_c_0604108');
    elementShouldBeEnabled('tho_c_0604139');
    elementShouldBeEnabled('tho_c_0604141');
    elementShouldBeEnabled('tho_c_0604142');
  });
});
