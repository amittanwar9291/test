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

  it('Cervix uteri mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');
    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_060213');
    elementShouldBeEnabled('pel_m_060214');
    elementShouldBeEnabled('pel_m_060215');
    elementShouldBeEnabled('pel_m_0602448');
    elementShouldBeEnabled('pel_m_0603462');

    elementShouldBeEnabled('pel_m_0604454');
    elementShouldBeEnabled('pel_m_0604455');
    elementShouldBeEnabled('pel_m_0604456');
    elementShouldBeEnabled('pel_m_0604457');
    elementShouldBeEnabled('pel_m_0604458');
    elementShouldBeEnabled('pel_m_0604460');
    // TODO: rr-id not found yet (bug 22313) elementShouldBeEnabled('pel_m_0604461');
    elementShouldBeEnabled('pel_m_0604462');

    clickElement('pel_m_060213', true, 'radio');
    elementShouldBeEnabled('pel_m_060216');
    elementShouldBeEnabled('pel_m_060217');

    clickElement('pel_m_0603462', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603463');
    elementShouldBeEnabled('pel_m_0603464');

    clickElement('pel_m_0604458', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604459');

    clickElement('pel_m_0604462', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604463');
    elementShouldBeEnabled('pel_m_0604464');
  });
});
