import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 04 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Prostate size PSA Density', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010205');
    cy.wait(2000);
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });

    elementShouldBeEnabled('pel_m_040104');
    elementShouldBeEnabled('pel_m_040203');
    elementShouldBeEnabled('pel_m_040205');
    elementShouldBeEnabled('pel_m_040207');

    cy.byRRID('pel_m_040203').type('100');
    cy.byRRID('pel_m_040205').type('50');
    cy.byRRID('pel_m_040207').type('50');

    // TODO
    //  value in input field should be 130

    // cy.byRRID('pel_m_040210')
    //   .find('[type="text"]')
    //   .should('have.value', 130);

    elementShouldBeEnabled('pel_m_040212');
    elementShouldBeEnabled('pel_m_040213');
  });
});
