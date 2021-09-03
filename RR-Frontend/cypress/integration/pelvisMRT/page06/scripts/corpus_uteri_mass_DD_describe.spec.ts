import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, visitPageNumber } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

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

  it('Corpus uteri inflammation', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');

    clickElement('pel_m_060545');
    elementShouldBeEnabled('pel_m_0602117');

    selectDropdownOptionOS('pel_m_0602117', 4, true, true);
    elementShouldBeEnabled('pel_m_0603114');
    elementShouldBeEnabled('pel_m_0602119');
    elementShouldBeEnabled('pel_m_0603116');

    clickElement('pel_m_0603114');
    // TODO check any localizer element and check if selected
    //  RR-ID is missed here, should be clicked by rrid (BUG 22503)
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('tspan')
      .eq(3)
      .click();
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    selectDropdownOptionOS('pel_m_0603116', 2, true, true);
    cy.byRRID('pel_m_0603116').should('have.class', 'ui-inputwrapper-filled');

    selectDropdownOptionOS('pel_m_0602117', 8, true, true);
    elementShouldBeEnabled('pel_m_0603124');
    elementShouldBeEnabled('pel_m_0603125');
    elementShouldBeEnabled('pel_m_0603126');
    elementShouldBeEnabled('pel_m_0603127');

    clickElement('pel_m_0603124', true, 'radio');
    elementShouldBeEnabled('pel_m_0603453');

    selectDropdownOptionOS('pel_m_0603453', 2, true, true);
    cy.byRRID('pel_m_0603453').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0603126', true, 'radio');
    elementShouldBeEnabled('pel_m_0603455');

    selectDropdownOptionOS('pel_m_0603455', 2, true, true);
    cy.byRRID('pel_m_0603455').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0603127', true, 'radio');
    elementShouldBeEnabled('pel_m_0603459');

    selectDropdownOptionOS('pel_m_0603459', 2, true, true);
    cy.byRRID('pel_m_0603459').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_060202');
    selectDropdownOptionOS('pel_m_0604430', 2, true, true);

    clickElement('pel_m_060545');

    selectDropdownOptionOS('pel_m_0602119', 1, true, true);

    elementShouldBeEnabled('pel_m_0602120');
    elementShouldBeEnabled('pel_m_0604120');
    elementShouldBeEnabled('pel_m_0604122');

    clickElement('pel_m_0604120');
    // TODO check any localizer element and check if selected
    //  RR-ID is missed here, should be clicked by rrid (BUG 22503)
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('tspan')
      .eq(3)
      .click();
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    selectDropdownOptionOS('pel_m_0604122', 2, true, true);
    cy.byRRID('pel_m_0604122').should('have.class', 'ui-inputwrapper-filled');

    selectDropdownOptionOS('pel_m_0602117', 0, true, true);

    selectDropdownOptionOS('pel_m_0602119', 5, true, true);
    elementShouldBeEnabled('pel_m_0604129');
    elementShouldBeEnabled('pel_m_0604130');
    elementShouldBeEnabled('pel_m_0604131');
    elementShouldBeEnabled('pel_m_0604132');

    clickElement('pel_m_0604129', true, 'radio');
    elementShouldBeEnabled('pel_m_0604445');

    selectDropdownOptionOS('pel_m_0604445', 2, true, true);
    cy.byRRID('pel_m_0604445').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0604131', true, 'radio');
    elementShouldBeEnabled('pel_m_0604447');

    selectDropdownOptionOS('pel_m_0604447', 3, true, true);
    elementShouldBeEnabled('pel_m_0604449');

    selectDropdownOptionOS('pel_m_0604449', 2, true, true);
    cy.byRRID('pel_m_0604449').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0604132', true, 'radio');
    elementShouldBeEnabled('pel_m_0604451');

    selectDropdownOptionOS('pel_m_0604451', 2, true, true);
    cy.byRRID('pel_m_0604451').should('have.class', 'ui-inputwrapper-filled');
  });
});
