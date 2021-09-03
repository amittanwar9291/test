import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole,
  selectSliderValueAndCheckIt,
  visitPageNumber
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 05 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_050107', 'pel_m_050106-');

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

  it('Scrotum mass char I I know', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(3000);
    visitPageNumber(5);
    clickElement('pel_m_050105');
    elementShouldBeEnabled('pel_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('pel_m_050107');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    selectElementByRadioRole(3);
    elementShouldBeEnabled('pel_m_050451');

    selectDropdownOptionOS('pel_m_050451', 2, true, true);
    elementShouldBeEnabled('pel_m_050490');
    cy.wait(1000);
    selectDropdownOptionOS('pel_m_050451', 27, true, true);
    elementShouldBeEnabled('pel_m_050491');

    elementShouldBeEnabled('pel_m_0502115');
    elementShouldBeEnabled('pel_m_0502118');
    elementShouldBeEnabled('pel_m_0502121');

    elementShouldBeEnabled('pel_m_050365');
    elementShouldBeEnabled('pel_m_050369');

    elementShouldBeEnabled('pel_m_050417');
    elementShouldBeEnabled('pel_m_050418');
    elementShouldBeEnabled('pel_m_050420');
    elementShouldBeEnabled('pel_m_050421');
    elementShouldBeEnabled('pel_m_050422');
    elementShouldBeEnabled('pel_m_050424');
    elementShouldBeEnabled('pel_m_050425');

    elementShouldBeEnabled('pel_m_050511');
    elementShouldBeEnabled('pel_m_050513');

    elementShouldBeEnabled('pel_m_050424');
    elementShouldBeEnabled('pel_m_050425');

    elementShouldBeEnabled('pel_m_050511');
    elementShouldBeEnabled('pel_m_050513');

    selectSliderValueAndCheckIt('pel_m_050511', 0, 3);
    selectSliderValueAndCheckIt('pel_m_050513', 0, 3);
  });
});
