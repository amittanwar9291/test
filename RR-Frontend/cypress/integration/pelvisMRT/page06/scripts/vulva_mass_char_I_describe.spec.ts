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

    elementShouldBeEnabled('pel_m_0602188');
    elementShouldBeEnabled('pel_m_0602189');
    elementShouldBeEnabled('pel_m_0602192');
    elementShouldBeEnabled('pel_m_0602195');
    elementShouldBeEnabled('pel_m_0602196');
    elementShouldBeEnabled('pel_m_0602197');

    elementShouldBeEnabled('pel_m_0603212');
    elementShouldBeEnabled('pel_m_0603214');
    elementShouldBeEnabled('pel_m_0603216');

    elementShouldBeEnabled('pel_m_0604195');
    elementShouldBeEnabled('pel_m_0604196');
    elementShouldBeEnabled('pel_m_0604199');
    elementShouldBeEnabled('pel_m_0604200');
    elementShouldBeEnabled('pel_m_0604220');
    // TODO:wrong rr-ids (bug nr 22512)
    // elementShouldBeEnabled('pel_m_0604221');
    // elementShouldBeEnabled('pel_m_0604222');
    elementShouldBeEnabled('pel_m_0604214');

    elementShouldBeEnabled('pel_m_0605202');
    elementShouldBeEnabled('pel_m_0605204');

    clickElement('pel_m_0602189', true, 'radio');
    elementShouldBeEnabled('pel_m_0602190');
    elementShouldBeEnabled('pel_m_0602191');

    clickElement('pel_m_0602192', true, 'radio');
    elementShouldBeEnabled('pel_m_0602193');
    elementShouldBeEnabled('pel_m_0602194');

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
