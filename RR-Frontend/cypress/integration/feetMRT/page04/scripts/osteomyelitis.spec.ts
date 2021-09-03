import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 04 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_040107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Osteomyelitis', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('anc_m_040107');

    elementShouldBeEnabled('anc_m_040210');
    elementShouldBeEnabled('anc_m_0402241');
    elementShouldBeEnabled('anc_m_0402242');
    elementShouldBeEnabled('anc_m_0402244');
    elementShouldBeEnabled('anc_m_0402245');

    elementShouldBeEnabled('anc_m_0403258');
    elementShouldBeEnabled('anc_m_0403259');

    elementShouldBeEnabled('anc_m_0404250');

    elementShouldBeEnabled('anc_m_0405217');
    elementShouldBeEnabled('anc_m_0405218');
    elementShouldBeEnabled('anc_m_0405219');
    elementShouldBeEnabled('anc_m_0405220');
    elementShouldBeEnabled('anc_m_0405221');
    elementShouldBeEnabled('anc_m_0405225');
    elementShouldBeEnabled('anc_m_0405227');
    elementShouldBeEnabled('anc_m_0405228');

    clickElement('anc_m_040210');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(6)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(7)
      .click()
      .should('have.class', 'text-selected');
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    clickElement('anc_m_0403259', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0403261');
    elementShouldBeEnabled('anc_m_0403264');
    elementShouldBeEnabled('anc_m_0403267');
    elementShouldBeEnabled('anc_m_0403269');
    elementShouldBeEnabled('anc_m_0403270');
    elementShouldBeEnabled('anc_m_0403271');

    clickElement('anc_m_0404250', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0404240');
    elementShouldBeEnabled('anc_m_0404243');
    elementShouldBeEnabled('anc_m_0404246');
    elementShouldBeEnabled('anc_m_0404248');
    elementShouldBeEnabled('anc_m_0404249');
    elementShouldBeEnabled('anc_m_0403271');

    clickElement('anc_m_0405221', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0405224');

    clickElement('anc_m_0405227', true, 'radio');
    elementShouldBeEnabled('anc_m_0405229');

    clickElement('anc_m_0405228', true, 'radio');
    elementShouldBeEnabled('anc_m_0405229');
  });
});
