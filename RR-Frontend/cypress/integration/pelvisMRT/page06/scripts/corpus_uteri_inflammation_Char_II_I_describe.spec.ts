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
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');

    clickElement('pel_m_060301');
    elementShouldBeEnabled('pel_m_0602445');
    elementShouldBeEnabled('pel_m_0602447');

    elementShouldBeEnabled('pel_m_0603140');
    elementShouldBeEnabled('pel_m_0603141');
    elementShouldBeEnabled('pel_m_0603142');

    elementShouldBeEnabled('pel_m_0603145');
    elementShouldBeEnabled('pel_m_0603148');

    elementShouldBeEnabled('pel_m_0604141');
    elementShouldBeEnabled('pel_m_0604149');
    elementShouldBeEnabled('pel_m_0604153');
    elementShouldBeEnabled('pel_m_0604154');

    elementShouldBeEnabled('pel_m_0605243');
    elementShouldBeEnabled('pel_m_0605248');

    selectSliderValueAndCheckIt('pel_m_0602445', 0, 3);
    selectSliderValueAndCheckIt('pel_m_0602447', 0, 3);

    clickElement('pel_m_0603140', true, 'radio');
    elementShouldBeEnabled('pel_m_0603143');
    elementShouldBeEnabled('pel_m_0603144');

    clickElement('pel_m_0603141', true, 'radio');
    elementShouldBeEnabled('pel_m_0603143');
    elementShouldBeEnabled('pel_m_0603144');

    clickElement('pel_m_0603145', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603147');

    clickElement('pel_m_0604141', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604142');
    elementShouldBeEnabled('pel_m_0604143');

    clickElement('pel_m_0604149', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604150');
    elementShouldBeEnabled('pel_m_0604151');
    elementShouldBeEnabled('pel_m_0604152');

    clickElement('pel_m_0605243', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0605244');
    elementShouldBeEnabled('pel_m_0605245');
    elementShouldBeEnabled('pel_m_0605246');
    elementShouldBeEnabled('pel_m_0605247');

    selectDropdownOptionOS('pel_m_0605248', 1, true, true);
    elementShouldBeEnabled('pel_m_060566');
  });
});
