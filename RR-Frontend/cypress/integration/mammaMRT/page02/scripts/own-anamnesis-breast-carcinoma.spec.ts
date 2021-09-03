import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectLocalizerElement } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('page02 - Anamnesis', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_m_020107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Own anamnesis - Breast carcinoma', () => {
    clickElement('mam_m_020105', false, 'radio');
    cy.get('.c-col-2.c-pad-r').within(() => {
      elementShouldBeEnabled('none-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_m_020107');
      elementShouldBeEnabled('mam_m_020306');
      elementShouldBeEnabled('mam_m_020214');
      elementShouldBeEnabled('mam_m_020215');
      elementShouldBeEnabled('mam_m_020216');
      elementShouldBeEnabled('mam_m_020218');
      cy.get('.ui-dropdown-label-container > .ng-tns-c58-9')
        .click()
        .get(':nth-child(4) > .ui-dropdown-item')
        .click();
      cy.wait(1000);
      cy.get('.ui-dropdown-label-container > .ng-tns-c58-10')
        .click()
        .get(':nth-child(4) > .ui-dropdown-item')
        .click();
      clickElement('mam_m_020214');
      selectLocalizerElement('mam_m_020218', 'tspan', 1, true);
      cy.byRRID('mam_m_020218')
        .shadowFind('#right-breast.breast-circle-inner.breast-inner-checked')
        .should('have.css', 'fill', 'rgb(254, 0, 0)');
      selectLocalizerElement('mam_m_020218', 'tspan', 0, true);
      cy.byRRID('mam_m_020218')
        .shadowFind('#left-breast.breast-circle-inner.breast-inner-checked')
        .should('have.css', 'fill', 'rgb(254, 0, 0)');
    });
  });
});
