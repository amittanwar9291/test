import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  checkInputFieldValue,
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
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

  it('Corpus uteri inflammation', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
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

    selectElementByRadioRole(3);
    elementShouldBeEnabled('pel_m_0604430');

    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_060206');
    elementShouldBeEnabled('pel_m_060208');
    elementShouldBeEnabled('pel_m_060210');

    elementShouldBeEnabled('pel_m_060307');
    elementShouldBeEnabled('pel_m_060306');

    elementShouldBeEnabled('pel_m_0603447');
    elementShouldBeEnabled('pel_m_0603448');
    elementShouldBeEnabled('pel_m_0603449');

    elementShouldBeEnabled('pel_m_060310');
    elementShouldBeEnabled('pel_m_060311');

    elementShouldBeEnabled('pel_m_0604432');
    elementShouldBeEnabled('pel_m_0604434');

    elementShouldBeEnabled('pel_m_0605227');
    elementShouldBeEnabled('pel_m_0605228');
    elementShouldBeEnabled('pel_m_0605287');
    elementShouldBeEnabled('pel_m_0605229');

    elementShouldBeEnabled('pel_m_0605231');
    elementShouldBeEnabled('pel_m_0605232');
    elementShouldBeEnabled('pel_m_0605233');
    elementShouldBeEnabled('pel_m_0605234');
    elementShouldBeEnabled('pel_m_0605235');
    elementShouldBeEnabled('pel_m_0605236');
    elementShouldBeEnabled('pel_m_0605237');
    elementShouldBeEnabled('pel_m_0605238');

    typeValueIntoInputField('pel_m_060206', '200');
    checkInputFieldValue('pel_m_060206', 200);
    typeValueIntoInputField('pel_m_060208', '200');
    checkInputFieldValue('pel_m_060208', 200);
    typeValueIntoInputField('pel_m_060210', '200');
    checkInputFieldValue('pel_m_060210', 200);

    selectSliderValueAndCheckIt('pel_m_0604432', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0604434', 0, 3);

    elementShouldBeEnabled('pel_m_0604436');
    elementShouldBeEnabled('pel_m_0604437');

    clickElement('pel_m_0605229', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605230');
  });
});
