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

    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_0602463');
    elementShouldBeEnabled('pel_m_0602451');
    elementShouldBeEnabled('pel_m_0602452');
    elementShouldBeEnabled('pel_m_0602466');
    elementShouldBeEnabled('pel_m_0602454');
    elementShouldBeEnabled('pel_m_0602455');
    elementShouldBeEnabled('pel_m_0602456');
    elementShouldBeEnabled('pel_m_0602457');
    elementShouldBeEnabled('pel_m_0602458');
    elementShouldBeEnabled('pel_m_0602459');
    elementShouldBeEnabled('pel_m_0602464');

    elementShouldBeEnabled('pel_m_0603426');
    elementShouldBeEnabled('pel_m_0603427');
    elementShouldBeEnabled('pel_m_0603428');

    elementShouldBeEnabled('pel_m_0602199');

    elementShouldBeEnabled('pel_m_0605241');
    elementShouldBeEnabled('pel_m_0605263');
    elementShouldBeEnabled('pel_m_0605264');
    elementShouldBeEnabled('pel_m_0605212');
    elementShouldBeEnabled('pel_m_0605265');
    elementShouldBeEnabled('pel_m_0605266');
  });
});
