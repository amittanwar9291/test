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
context('Page 05 - Thoracic CT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_050106', 'tho_c_050106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  it('Nodule_Characterization II_I describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });
    clickElement('tho_c_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    cy.byRRID('tho_c_050301').click();

    elementShouldBeEnabled('tho_c_050216');
    elementShouldBeEnabled('tho_c_050218');
    elementShouldBeEnabled('tho_c_050219');
    elementShouldBeEnabled('tho_c_050220');

    elementShouldBeEnabled('tho_c_050315');
    elementShouldBeEnabled('tho_c_050316');
    elementShouldBeEnabled('tho_c_050317');
    elementShouldBeEnabled('tho_c_050319');
    elementShouldBeEnabled('tho_c_0503200');

    clickElement('tho_c_050221', true, 'checkbox');
    elementShouldBeEnabled('tho_c_050223');
    elementShouldBeEnabled('tho_c_050224');
    elementShouldBeEnabled('tho_c_050225');
    elementShouldBeEnabled('tho_c_050226');
    elementShouldBeEnabled('tho_c_050227');
    elementShouldBeEnabled('tho_c_050228');
    elementShouldBeEnabled('tho_c_050229');

    elementShouldBeEnabled('tho_c_0503202');
    elementShouldBeEnabled('tho_c_0503203');
    elementShouldBeEnabled('tho_c_0503204');

    clickElement('tho_c_0503204', true, 'radio');

    elementShouldBeEnabled('tho_c_0503205');
    elementShouldBeEnabled('tho_c_0503206');
  });
});
