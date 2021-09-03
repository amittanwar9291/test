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

  it('Endometriosis', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(12);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_060496');

    elementShouldBeEnabled('pel_m_0602469');
    elementShouldBeEnabled('pel_m_0602470');

    elementShouldBeEnabled('pel_m_0603254');
    elementShouldBeEnabled('pel_m_0603255');
    elementShouldBeEnabled('pel_m_0603256');

    elementShouldBeEnabled('pel_m_0603260');
    elementShouldBeEnabled('pel_m_0603261');
    elementShouldBeEnabled('pel_m_0603262');

    elementShouldBeEnabled('pel_m_0604278');
    elementShouldBeEnabled('pel_m_0604279');
    elementShouldBeEnabled('pel_m_0604280');
    elementShouldBeEnabled('pel_m_0604281');
    elementShouldBeEnabled('pel_m_0604282');

    clickElement('pel_m_0602470', true, 'radio');
    elementShouldBeEnabled('pel_m_0602471');
    elementShouldBeEnabled('pel_m_0602472');

    clickElement('pel_m_0603254', true, 'radio');
    elementShouldBeEnabled('pel_m_0603257');
    elementShouldBeEnabled('pel_m_0603258');

    clickElement('pel_m_0603258', true, 'radio');
    elementShouldBeEnabled('pel_m_0603259');

    clickElement('pel_m_0603255', true, 'radio');
    elementShouldBeEnabled('pel_m_0603257');
    elementShouldBeEnabled('pel_m_0603258');

    clickElement('pel_m_0603258', true, 'radio');
    elementShouldBeEnabled('pel_m_0603259');

    clickElement('pel_m_0604278', true, 'radio');
    elementShouldBeEnabled('pel_m_0605286');

    clickElement('pel_m_0604279', true, 'radio');
    elementShouldBeEnabled('pel_m_0605277');
    elementShouldBeEnabled('pel_m_0605278');

    clickElement('pel_m_0604282', true, 'radio');
    elementShouldBeEnabled('pel_m_0605280');
    elementShouldBeEnabled('pel_m_0605281');
    elementShouldBeEnabled('pel_m_0605283');
    elementShouldBeEnabled('pel_m_0605284');

    clickElement('pel_m_0605281', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605282');
  });
});
