import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt,
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

    elementShouldBeEnabled('pel_m_0602188');
    elementShouldBeEnabled('pel_m_0602189');
    elementShouldBeEnabled('pel_m_0602192');
    elementShouldBeEnabled('pel_m_0602195');
    elementShouldBeEnabled('pel_m_0602196');
    elementShouldBeEnabled('pel_m_0602197');
    elementShouldBeEnabled('pel_m_0602213');

    elementShouldBeEnabled('pel_m_0603151');
    elementShouldBeEnabled('pel_m_0603152');
    elementShouldBeEnabled('pel_m_060310');
    elementShouldBeEnabled('pel_m_060311');
    elementShouldBeEnabled('pel_m_0603252');

    elementShouldBeEnabled('pel_m_0604432');
    elementShouldBeEnabled('pel_m_0604434');

    elementShouldBeEnabled('pel_m_0605268');
    elementShouldBeEnabled('pel_m_0605269');
    elementShouldBeEnabled('pel_m_0605270');

    clickElement('pel_m_0602189', true, 'radio');
    elementShouldBeEnabled('pel_m_0602190');
    elementShouldBeEnabled('pel_m_0602191');

    clickElement('pel_m_0602192', true, 'radio');
    elementShouldBeEnabled('pel_m_0602193');
    elementShouldBeEnabled('pel_m_0602194');

    selectSliderValueAndCheckIt('pel_m_0604432', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0604434', 0, 3);

    clickElement('pel_m_0605268', true, 'radio');
    elementShouldBeEnabled('pel_m_0605271');
    elementShouldBeEnabled('pel_m_0605272');
    elementShouldBeEnabled('pel_m_0605273');

    clickElement('pel_m_0605269', true, 'radio');
    elementShouldBeEnabled('pel_m_0605271');
    elementShouldBeEnabled('pel_m_0605272');
    elementShouldBeEnabled('pel_m_0605273');
  });
});
