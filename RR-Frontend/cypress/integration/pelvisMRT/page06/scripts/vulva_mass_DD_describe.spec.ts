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

  it('Vulva mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_060401');

    elementShouldBeEnabled('pel_m_0602202');
    selectDropdownOptionOS('pel_m_0602202', 10, true, true);
    elementShouldBeEnabled('pel_m_0603241');
    elementShouldBeEnabled('pel_m_0603242');
    elementShouldBeEnabled('pel_m_0602204');

    cy.wait(1000);
    selectDropdownOptionOS('pel_m_0602202', 12, true, true);
    elementShouldBeEnabled('pel_m_0603243');

    selectDropdownOptionOS('pel_m_0602202', 14, true, true);
    elementShouldBeEnabled('pel_m_0602204');

    selectDropdownOptionOS('pel_m_0602204', 7, true, true);
    elementShouldBeEnabled('pel_m_0604216');
    elementShouldBeEnabled('pel_m_0604217');
    elementShouldBeEnabled('pel_m_0602205');

    selectDropdownOptionOS('pel_m_0602202', 12, true, true);
    elementShouldBeEnabled('pel_m_0603243');
    elementShouldBeEnabled('pel_m_0602205');
  });
});
