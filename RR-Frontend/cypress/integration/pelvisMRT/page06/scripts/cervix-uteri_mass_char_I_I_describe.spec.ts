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

  it('Cervix uteri mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    elementShouldBeEnabled('pel_m_0602134');
    elementShouldBeEnabled('pel_m_0602135');
    elementShouldBeEnabled('pel_m_060206');
    elementShouldBeEnabled('pel_m_060208');
    elementShouldBeEnabled('pel_m_060210');

    elementShouldBeEnabled('pel_m_0603151');
    elementShouldBeEnabled('pel_m_0603152');
    elementShouldBeEnabled('pel_m_060310');
    elementShouldBeEnabled('pel_m_060311');
    elementShouldBeEnabled('pel_m_0603158');
    elementShouldBeEnabled('pel_m_0603160');

    elementShouldBeEnabled('pel_m_0604432');
    elementShouldBeEnabled('pel_m_0604434');

    elementShouldBeEnabled('pel_m_0605227');
    elementShouldBeEnabled('pel_m_0605228');
    elementShouldBeEnabled('pel_m_0605249');
    elementShouldBeEnabled('pel_m_0605250');
    elementShouldBeEnabled('pel_m_0605231');
    elementShouldBeEnabled('pel_m_0605232');
    elementShouldBeEnabled('pel_m_0605233');
    elementShouldBeEnabled('pel_m_0605251');
    elementShouldBeEnabled('pel_m_0605252');
    elementShouldBeEnabled('pel_m_0605253');

    typeValueIntoInputField('pel_m_060206', '150');
    checkInputFieldValue('pel_m_060206', 150);
    typeValueIntoInputField('pel_m_060208', '150');
    checkInputFieldValue('pel_m_060208', 150);
    typeValueIntoInputField('pel_m_060210', '150');
    checkInputFieldValue('pel_m_060210', 150);

    selectSliderValueAndCheckIt('pel_m_0604432', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0604434', 0, 3);

    elementShouldBeEnabled('pel_m_0604436');
    elementShouldBeEnabled('pel_m_0604437');

    clickElement('pel_m_0603158', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603156');
    elementShouldBeEnabled('pel_m_0603157');
  });
});
