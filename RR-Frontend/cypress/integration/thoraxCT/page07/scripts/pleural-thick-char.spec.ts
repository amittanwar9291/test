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
          cy.visit(thoraxCTRoutes.ThoraxCT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Pleural thick char', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('7')
      .click({ force: true });

    clickElement('tho_c_070105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_c_0702133');
    elementShouldBeEnabled('tho_c_070336');

    elementShouldBeEnabled('tho_c_070241');
    elementShouldBeEnabled('tho_c_070244');
    elementShouldBeEnabled('tho_c_070246');
    elementShouldBeEnabled('tho_c_070348');
    elementShouldBeEnabled('tho_c_070338');

    elementShouldBeEnabled('tho_c_0704107');
    elementShouldBeEnabled('tho_c_0704108');
    elementShouldBeEnabled('tho_c_0704109');
    elementShouldBeEnabled('tho_c_0704110');

    elementShouldBeEnabled('tho_c_070510');
    elementShouldBeEnabled('tho_c_070509');
    elementShouldBeEnabled('tho_c_070518');

    clickElement('tho_c_070338', true, 'radio');
    elementShouldBeEnabled('tho_c_070340');
    elementShouldBeEnabled('tho_c_070341');
    elementShouldBeEnabled('tho_c_070343');
    elementShouldBeEnabled('tho_c_070344');
    elementShouldBeEnabled('tho_c_070345');
    elementShouldBeEnabled('tho_c_070346');
    elementShouldBeEnabled('tho_c_070347');

    clickElement('tho_c_070509', true, 'radio');
    elementShouldBeEnabled('tho_c_070511');
    elementShouldBeEnabled('tho_c_070512');

    clickElement('tho_c_070518', true, 'radio');
    elementShouldBeEnabled('tho_c_070511');
    elementShouldBeEnabled('tho_c_070512');
  });
});
