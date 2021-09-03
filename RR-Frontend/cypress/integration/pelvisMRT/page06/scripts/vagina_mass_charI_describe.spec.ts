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

  it('Vagina mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');

    elementShouldBeEnabled('pel_m_0602167');
    elementShouldBeEnabled('pel_m_0602170');
    elementShouldBeEnabled('pel_m_0602173');

    elementShouldBeEnabled('pel_m_0603212');
    elementShouldBeEnabled('pel_m_0603214');
    elementShouldBeEnabled('pel_m_0603216');

    elementShouldBeEnabled('pel_m_0604195');
    elementShouldBeEnabled('pel_m_0604196');

    elementShouldBeEnabled('pel_m_0604199');
    elementShouldBeEnabled('pel_m_0604200');

    elementShouldBeEnabled('pel_m_0604201');
    elementShouldBeEnabled('pel_m_0604202');
    elementShouldBeEnabled('pel_m_0604203');
    elementShouldBeEnabled('pel_m_0604475');

    elementShouldBeEnabled('pel_m_0605202');
    elementShouldBeEnabled('pel_m_0605204');

    clickElement('pel_m_0602167', true, 'radio');
    elementShouldBeEnabled('pel_m_0602168');
    elementShouldBeEnabled('pel_m_0602169');

    clickElement('pel_m_0602170', true, 'radio');
    elementShouldBeEnabled('pel_m_0602171');
    elementShouldBeEnabled('pel_m_0602172');

    clickElement('pel_m_0602170', true, 'radio');
    elementShouldBeEnabled('pel_m_0602171');
    elementShouldBeEnabled('pel_m_0602172');

    clickElement('pel_m_0602173', true, 'radio');
    elementShouldBeEnabled('pel_m_0602174');
    elementShouldBeEnabled('pel_m_0602175');
    elementShouldBeEnabled('pel_m_0602176');

    typeValueIntoInputField('pel_m_0603212', '150');
    checkInputFieldValue('pel_m_0603212', 150);

    typeValueIntoInputField('pel_m_0603214', '150');
    checkInputFieldValue('pel_m_0603214', 150);

    typeValueIntoInputField('pel_m_0603216', '150');
    checkInputFieldValue('pel_m_0603216', 150);

    selectSliderValueAndCheckIt('pel_m_0605202', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0605204', 0, 3);

    elementShouldBeEnabled('pel_m_0605257');
    elementShouldBeEnabled('pel_m_0605258');
  });
});
