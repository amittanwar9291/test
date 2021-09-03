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

  it('Uterine tube mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');

    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_0602413');
    elementShouldBeEnabled('pel_m_0602419');

    elementShouldBeEnabled('pel_m_0603426');
    elementShouldBeEnabled('pel_m_0603427');
    elementShouldBeEnabled('pel_m_0603428');

    elementShouldBeEnabled('pel_m_0603433');

    elementShouldBeEnabled('pel_m_0604411');
    elementShouldBeEnabled('pel_m_0604413');
    elementShouldBeEnabled('pel_m_0604417');

    elementShouldBeEnabled('pel_m_0605206');
    elementShouldBeEnabled('pel_m_0605210');
    elementShouldBeEnabled('pel_m_0605211');
    elementShouldBeEnabled('pel_m_0605212');
    elementShouldBeEnabled('pel_m_0605213');
    elementShouldBeEnabled('pel_m_0605214');

    clickElement('pel_m_0602413', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0602414');
    elementShouldBeEnabled('pel_m_0602415');
    elementShouldBeEnabled('pel_m_0602418');

    clickElement('pel_m_0602415', true, 'radio');
    elementShouldBeEnabled('pel_m_0602416');
    elementShouldBeEnabled('pel_m_0602417');

    clickElement('pel_m_0603426', true, 'radio');
    elementShouldBeEnabled('pel_m_0603429');
    elementShouldBeEnabled('pel_m_0603430');

    clickElement('pel_m_0603430', true, 'radio');
    elementShouldBeEnabled('pel_m_0603431');

    clickElement('pel_m_0603427', true, 'radio');
    elementShouldBeEnabled('pel_m_0603429');
    elementShouldBeEnabled('pel_m_0603430');

    clickElement('pel_m_0603430', true, 'radio');
    elementShouldBeEnabled('pel_m_0603431');

    clickElement('pel_m_0604411', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604412');

    clickElement('pel_m_0604413', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604414');
    elementShouldBeEnabled('pel_m_0604415');
    elementShouldBeEnabled('pel_m_0604416');

    clickElement('pel_m_0604417', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604418');
    elementShouldBeEnabled('pel_m_0604419');
    elementShouldBeEnabled('pel_m_0604420');
    elementShouldBeEnabled('pel_m_0604421');

    clickElement('pel_m_0605206', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605208');
    elementShouldBeEnabled('pel_m_0605209');
  });
});
