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

  it('Uterine tube inflammation', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_060237');
    elementShouldBeEnabled('pel_m_060240');

    elementShouldBeEnabled('pel_m_0602423');
    elementShouldBeEnabled('pel_m_0602427');
    elementShouldBeEnabled('pel_m_0602428');

    elementShouldBeEnabled('pel_m_0603406');

    elementShouldBeEnabled('pel_m_0604425');

    clickElement('pel_m_060237', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060238');
    elementShouldBeEnabled('pel_m_060239');

    clickElement('pel_m_060240', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060241');

    typeValueIntoInputField('pel_m_060241', '150');
    checkInputFieldValue('pel_m_060241', 150);

    clickElement('pel_m_0602423', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0602424');
    elementShouldBeEnabled('pel_m_0602425');
    elementShouldBeEnabled('pel_m_0602426');

    clickElement('pel_m_0603406', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603407');
    elementShouldBeEnabled('pel_m_0603408');
    elementShouldBeEnabled('pel_m_0603409');
    elementShouldBeEnabled('pel_m_0603410');

    selectDropdownOptionOS('pel_m_0604425', 2, true, true);
    elementShouldBeEnabled('pel_m_0604427');

    selectDropdownOptionOS('pel_m_0604427', 3, true, true);
    elementShouldBeEnabled('pel_m_0604428');
  });
});
