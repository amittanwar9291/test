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

  it('Endometriosis', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
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

    elementShouldBeEnabled('pel_m_0602465');

    elementShouldBeEnabled('pel_m_060206');
    elementShouldBeEnabled('pel_m_060208');
    elementShouldBeEnabled('pel_m_060210');

    elementShouldBeEnabled('pel_m_0603151');
    elementShouldBeEnabled('pel_m_0603152');
    elementShouldBeEnabled('pel_m_060310');
    elementShouldBeEnabled('pel_m_060311');

    elementShouldBeEnabled('pel_m_0604483');
    elementShouldBeEnabled('pel_m_0604484');
    elementShouldBeEnabled('pel_m_0604485');
    elementShouldBeEnabled('pel_m_0604486');

    selectDropdownOptionOS('pel_m_0602465', 2, true, true);
    cy.byRRID('pel_m_0602465').should('have.class', 'ui-inputwrapper-filled');

    typeValueIntoInputField('pel_m_060206', '150');
    checkInputFieldValue('pel_m_060206', 150);

    typeValueIntoInputField('pel_m_060208', '150');
    checkInputFieldValue('pel_m_060208', 150);

    typeValueIntoInputField('pel_m_060210', '150');
    checkInputFieldValue('pel_m_060210', 150);

    clickElement('pel_m_0603151', true, 'radio');
    elementShouldBeEnabled('pel_m_0603485');

    clickElement('pel_m_0603152', true, 'radio');
    elementShouldBeEnabled('pel_m_0603486');
  });
});
