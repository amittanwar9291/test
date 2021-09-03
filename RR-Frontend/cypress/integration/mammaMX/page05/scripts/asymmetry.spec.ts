import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import {
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectLocalizerElement
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - MammaMX', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_050107', 'mam_mx_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Asymmetry', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('mam_mx_050105');
    elementShouldBeEnabled('mam_mx_050106-1');
    findingColumn.selectFindingOptionByAppearance(3);
    const enabledElements = [
      'mam_mx_050208',
      'mam_mx_050107',
      'mam_mx_050210',
      'mam_mx_050211',
      'mam_mx_050212',
      'mam_mx_050213',
      'mam_mx_050340',
      'mam_mx_050341',
      'mam_mx_050342',
      'mam_mx_050343',
      'mam_mx_050345',
      'mam_mx_050347',
      'mam_mx_050348',
      'mam_mx_050349',
      'mam_mx_050430',
      'mam_mx_050431',
      'mam_mx_050432',
      'mam_mx_050433',
      'mam_mx_050434',
      'mam_mx_050435',
      'mam_mx_050436',
      'mam_mx_050514'
    ];
    elementShouldBeEnabled(enabledElements);

    selectLocalizerElement('mam_mx_050208', 'path', 9, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 8, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.get('#leftBreast').should('have.css', 'pointer-events', 'none');

    clickElement('mam_mx_050341');
    elementShouldBeDisabled('mam_mx_050436');

    selectDropdownOptionOS('mam_mx_050514', 3, false, true);
    elementShouldBeEnabled('mam_mx_050515');
  });
});
