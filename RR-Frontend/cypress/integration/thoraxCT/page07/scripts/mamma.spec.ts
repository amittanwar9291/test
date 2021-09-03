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

  it('Mamma', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('7')
      .click({ force: true });

    clickElement('tho_c_070105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('tho_c_070293');
    elementShouldBeEnabled('tho_c_070297');
    elementShouldBeEnabled('tho_c_0702150');
    elementShouldBeEnabled('tho_c_070377');
    elementShouldBeEnabled('tho_c_070380');
    elementShouldBeEnabled('tho_c_070461');

    clickElement('tho_c_070293');
    elementShouldBeEnabled('tho_c_070295');
    elementShouldBeEnabled('tho_c_070296');

    clickElement('tho_c_070297');
    elementShouldBeEnabled('tho_c_070299');

    clickElement('tho_c_0702150');
    elementShouldBeEnabled('tho_c_0702152');
    elementShouldBeEnabled('tho_c_0702153');

    clickElement('tho_c_070377');

    selectLocalizerElement('tho_c_070375', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');

    selectLocalizerElement('tho_c_070375', 'path', 12, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 13, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 11, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070375', 'path', 10, true).should('have.css', 'fill', 'rgb(254, 0, 0)');

    clickElement('tho_c_070380');
    elementShouldBeEnabled('tho_c_070381');
    elementShouldBeEnabled('tho_c_070382');

    clickElement('tho_c_070461', true, 'checkbox');
    elementShouldBeEnabled('tho_c_070463');
    elementShouldBeEnabled('tho_c_070464');
    elementShouldBeEnabled('tho_c_070467');
    elementShouldBeEnabled('tho_c_070468');
    elementShouldBeEnabled('tho_c_070469');
    elementShouldBeEnabled('tho_c_070553');
    elementShouldBeEnabled('tho_c_070560');
    elementShouldBeEnabled('tho_c_070559');
    elementShouldBeEnabled('tho_c_070558');
    elementShouldBeEnabled('tho_c_070557');
    elementShouldBeEnabled('tho_c_070562');

    selectLocalizerElement('tho_c_070463', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');

    selectLocalizerElement('tho_c_070463', 'path', 12, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 13, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 11, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('tho_c_070463', 'path', 10, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
