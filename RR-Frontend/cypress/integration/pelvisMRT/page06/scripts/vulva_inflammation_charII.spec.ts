import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  checkInputFieldValue,
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  typeValueIntoInputField,
  visitPageNumber
} from '../../../../shared/service';
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

  it('Vulva inflammation', () => {
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

    findingColumn.selectFindingOptionByAppearance(11);
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

    elementShouldBeEnabled('pel_m_0603478');
    elementShouldBeEnabled('pel_m_0603482');
    elementShouldBeEnabled('pel_m_0603483');

    elementShouldBeEnabled('pel_m_0604477');
    elementShouldBeEnabled('pel_m_0604478');
    elementShouldBeEnabled('pel_m_0604481');

    clickElement('pel_m_0603478', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603480');

    typeValueIntoInputField('pel_m_0603480', '150');
    checkInputFieldValue('pel_m_0603480', 150);

    clickElement('pel_m_0603483', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603484');

    clickElement('pel_m_0604478', true, 'radio');
    elementShouldBeEnabled('pel_m_0604479');
    elementShouldBeEnabled('pel_m_0604480');
  });
});
