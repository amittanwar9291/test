import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
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

    elementShouldBeEnabled('pel_m_060228');
    elementShouldBeEnabled('pel_m_060229');

    elementShouldBeEnabled('pel_m_0603435');
    elementShouldBeEnabled('pel_m_0603436');

    elementShouldBeEnabled('pel_m_060439');
    elementShouldBeEnabled('pel_m_060440');
    elementShouldBeEnabled('pel_m_060441');

    elementShouldBeEnabled('pel_m_0605217');
    elementShouldBeEnabled('pel_m_0605222');
    elementShouldBeEnabled('pel_m_0605223');
    elementShouldBeEnabled('pel_m_0605224');

    clickElement('pel_m_0603436', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603437');

    clickElement('pel_m_0603437', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603439');
    elementShouldBeEnabled('pel_m_0603441');

    selectSliderValueAndCheckIt('pel_m_0603439', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0603441', 0, 3);

    clickElement('pel_m_060439', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');
    elementShouldBeEnabled('pel_m_0604422');

    clickElement('pel_m_060440', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');
    elementShouldBeEnabled('pel_m_0604422');

    selectSliderValueAndCheckIt('pel_m_0605217', 0, 3);
    elementShouldBeEnabled('pel_m_0605219');
    elementShouldBeEnabled('pel_m_0605220');

    clickElement('pel_m_0605222', true, 'radio');
    elementShouldBeEnabled('pel_m_0605225');
    elementShouldBeEnabled('pel_m_0605226');

    clickElement('pel_m_0605223', true, 'radio');
    elementShouldBeEnabled('pel_m_0605225');
    elementShouldBeEnabled('pel_m_0605226');
  });
});
