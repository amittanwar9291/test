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

  it('Corpus uteri inflammation', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(1800);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    elementShouldBeEnabled('pel_m_0602437');
    elementShouldBeEnabled('pel_m_0602438');
    elementShouldBeEnabled('pel_m_0602440');
    elementShouldBeEnabled('pel_m_0602441');
    elementShouldBeEnabled('pel_m_0602122');
    elementShouldBeEnabled('pel_m_0602124');
    elementShouldBeEnabled('pel_m_0602126');

    elementShouldBeEnabled('pel_m_0603439');
    elementShouldBeEnabled('pel_m_0603441');

    elementShouldBeEnabled('pel_m_060439');
    elementShouldBeEnabled('pel_m_060440');
    elementShouldBeEnabled('pel_m_060441');

    selectSliderValueAndCheckIt('pel_m_0603439', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0603441', 0, 3);

    clickElement('pel_m_060439', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');

    clickElement('pel_m_060440', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');
  });
});
