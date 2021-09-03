import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectLocalizerElement } from '../../../../shared/service';
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

  it('Mass I describe', () => {
    clickElement('mam_mx_030105', false, 'checkbox');
    selectLocalizerElement('mam_mx_030108', 'path', 2, true);

    cy.wait(4000);
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('mam_mx_050105');
    elementShouldBeEnabled('mam_mx_050106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    cy.get(':nth-child(1) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    const enabledElements = [
      'mam_mx_050107',
      'mam_mx_050208',
      'mam_mx_050210',
      'mam_mx_050211',
      'mam_mx_050212',
      'mam_mx_050301',
      'mam_mx_050304',
      'mam_mx_050306',
      'mam_mx_050310',
      'mam_mx_050311',
      'mam_mx_050313',
      'mam_mx_050314',
      'mam_mx_050315',
      'mam_mx_050316',
      'mam_mx_050317',
      'mam_mx_050402',
      'mam_mx_050403',
      'mam_mx_050404',
      'mam_mx_050405',
      'mam_mx_050407',
      'mam_mx_050408',
      'mam_mx_050409',
      'mam_mx_050410',
      'mam_mx_050411',
      'mam_mx_050412',
      'mam_mx_050413',
      'mam_mx_050503'
    ];
    elementShouldBeEnabled(enabledElements);

    selectLocalizerElement('mam_mx_050208', 'path', 9, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 7, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 8, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('mam_mx_050208', 'path', 6, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    cy.get('#leftBreast').should('have.css', 'pointer-events', 'none');

    clickElement('mam_mx_050413');
    elementShouldBeEnabled('mam_mx_050414');

    selectDropdownOptionOS('mam_mx_050503', 3, false, true);
    elementShouldBeEnabled('mam_mx_050504');

    selectDropdownOptionOS('mam_mx_050506', 3, false, true);
    elementShouldBeEnabled('mam_mx_050507');

    elementShouldBeEnabled('mam_mx_050509');
  });
});
