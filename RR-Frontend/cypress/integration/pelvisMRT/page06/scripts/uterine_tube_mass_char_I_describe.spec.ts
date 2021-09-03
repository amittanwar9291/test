import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  checkInputFieldValue,
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectSliderValueAndCheckIt,
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

  it('Uterine tube mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
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

    elementShouldBeEnabled('pel_m_060261');
    elementShouldBeEnabled('pel_m_060260');

    elementShouldBeEnabled('pel_m_0603416');
    elementShouldBeEnabled('pel_m_0603419');
    elementShouldBeEnabled('pel_m_0603422');

    elementShouldBeEnabled('pel_m_060457');
    elementShouldBeEnabled('pel_m_060458');

    elementShouldBeEnabled('pel_m_060462');
    elementShouldBeEnabled('pel_m_060463');

    elementShouldBeEnabled('pel_m_0605202');
    elementShouldBeEnabled('pel_m_0605204');

    selectSliderValueAndCheckIt('pel_m_0605202', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0605204', 0, 3);

    clickElement('pel_m_060261', true, 'radio');
    elementShouldBeEnabled('pel_m_060262');
    elementShouldBeEnabled('pel_m_060263');
    elementShouldBeEnabled('pel_m_060264');
    elementShouldBeEnabled('pel_m_060265');

    clickElement('pel_m_060260', true, 'radio');
    elementShouldBeEnabled('pel_m_060262');
    elementShouldBeEnabled('pel_m_060263');
    elementShouldBeEnabled('pel_m_060264');
    elementShouldBeEnabled('pel_m_060265');

    typeValueIntoInputField('pel_m_0603416', '150');
    checkInputFieldValue('pel_m_0603416', 150);

    typeValueIntoInputField('pel_m_0603419', '150');
    checkInputFieldValue('pel_m_0603416', 150);

    typeValueIntoInputField('pel_m_0603422', '150');
    checkInputFieldValue('pel_m_0603416', 150);
  });
});
