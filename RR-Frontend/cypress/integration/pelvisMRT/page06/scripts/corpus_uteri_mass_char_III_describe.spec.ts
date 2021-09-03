import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, visitPageNumber } from '../../../../shared/service';
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
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    cy.wait(1800);
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

    clickElement('pel_m_060496');

    elementShouldBeEnabled('pel_m_0602431');
    elementShouldBeEnabled('pel_m_0602432');
    elementShouldBeEnabled('pel_m_0602433');
    elementShouldBeEnabled('pel_m_0602435');

    elementShouldBeEnabled('pel_m_0603426');
    elementShouldBeEnabled('pel_m_0603427');
    elementShouldBeEnabled('pel_m_0603428');

    elementShouldBeEnabled('pel_m_0604438');
    elementShouldBeEnabled('pel_m_0604442');
    elementShouldBeEnabled('pel_m_0604443');

    elementShouldBeEnabled('pel_m_0605239');
    elementShouldBeEnabled('pel_m_0605241');
    elementShouldBeEnabled('pel_m_0605211');
    elementShouldBeEnabled('pel_m_0605206');
    elementShouldBeEnabled('pel_m_0605212');
    elementShouldBeEnabled('pel_m_0605213');

    clickElement('pel_m_0602433', true, 'radio');
    elementShouldBeEnabled('pel_m_0602434');

    clickElement('pel_m_0603426', true, 'radio');
    elementShouldBeEnabled('pel_m_0603429');
    elementShouldBeEnabled('pel_m_0603430');

    clickElement('pel_m_0603427', true, 'radio');
    elementShouldBeEnabled('pel_m_0603429');
    elementShouldBeEnabled('pel_m_0603430');

    clickElement('pel_m_0603430', true, 'radio');
    elementShouldBeEnabled('pel_m_0603450');
    elementShouldBeEnabled('pel_m_0603451');

    clickElement('pel_m_0604438', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604439');
    elementShouldBeEnabled('pel_m_0604440');
    elementShouldBeEnabled('pel_m_0604441');

    clickElement('pel_m_0605239', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605240');

    clickElement('pel_m_0605206', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605208');
    elementShouldBeEnabled('pel_m_0605209');
  });
});
