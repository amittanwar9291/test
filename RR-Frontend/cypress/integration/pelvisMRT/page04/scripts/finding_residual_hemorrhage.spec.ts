import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 04 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_040124', 'pel_m_040123-');

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

  it('Finding residual hemorrhage', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010205');
    cy.wait(2000);
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });
    elementShouldBeEnabled('pel_m_040103');
    elementShouldBeEnabled('pel_m_040104');

    clickElement('pel_m_040104');
    elementShouldBeEnabled('pel_m_040121');
    elementShouldBeEnabled('pel_m_040122');
    clickElement('pel_m_040122');
    elementShouldBeEnabled('pel_m_040123-1');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('pel_m_040124');
    elementShouldBeEnabled('pel_m_040220');
    elementShouldBeEnabled('pel_m_040302');
    elementShouldBeEnabled('pel_m_040303');

    clickElement('pel_m_040220');
    cy.get('.ng-valid.ng-star-inserted')
      .shadowFind('[class="prostate-lozaliser__list-element"]')
      .eq(1)
      .click()
      .should('have.attr', 'class', 'prostate-lozaliser__list-element prostate-lozaliser__list-element--selected');
    cy.get('.ng-valid.ng-star-inserted')
      .shadowFind('[class="prostate-lozaliser__list-element"]')
      .eq(1)
      .click()
      .should('have.attr', 'class', 'prostate-lozaliser__list-element prostate-lozaliser__list-element--selected');
  });
});
