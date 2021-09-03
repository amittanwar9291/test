import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeChecked,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 11 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_110107', 'hea_m_110106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_FacialSkull.url + '/' + pageId);
        });
      });
    });
  });

  it('Base of Skull Localization describe', () => {
    // Buttons enabled
    elementShouldBeEnabled('hea_m_110104');
    elementShouldBeEnabled('hea_m_110105');

    // On page 11 select "Base of Skull" from dropdown
    clickElement('hea_m_110105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_110107');
    cy.get('div[role=radio]')
      .eq(3)
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');
    cy.get('div[role=radio]')
      .eq(4)
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    elementShouldBeEnabled('hea_m_110501');

    // On Localization tab elements are enabled
    selectElementByRadioRole(4);
    elementShouldBeEnabled('hea_m_110204');
    elementShouldBeEnabled('hea_m_110275');
    elementShouldBeEnabled('hea_m_110276');
    elementShouldBeEnabled('hea_m_110277');
    elementShouldBeEnabled('hea_m_110308');
    elementShouldBeEnabled('hea_m_110402');
    elementShouldBeEnabled('hea_m_110502');

    // 2nd column: Select elements and check them
    clickElement('hea_m_110275', true, 'radio');
    elementShouldBeChecked('hea_m_110275');
    clickElement('hea_m_110276', true, 'radio');
    elementShouldBeChecked('hea_m_110276');
    clickElement('hea_m_110277', true, 'radio');
    elementShouldBeChecked('hea_m_110277');
    elementShouldBeEnabled('hea_m_110278');
    elementShouldBeEnabled('hea_m_110279');

    // 3rd column: Select elements and check them
    clickElement('hea_m_110308', true, 'checkbox');
    elementShouldBeChecked('hea_m_110308');
    elementShouldBeEnabled('hea_m_110310');
    elementShouldBeEnabled('hea_m_110309');
    elementShouldBeEnabled('hea_m_1103314');
    elementShouldBeEnabled('hea_m_110311');
    elementShouldBeEnabled('hea_m_110312');
    clickElement('hea_m_110310', true, 'checkbox');
    elementShouldBeChecked('hea_m_110310');
    clickElement('hea_m_110309', true, 'checkbox');
    elementShouldBeChecked('hea_m_110309');
    clickElement('hea_m_1103314', true, 'checkbox');
    elementShouldBeChecked('hea_m_1103314');
    clickElement('hea_m_110311', true, 'checkbox');
    elementShouldBeChecked('hea_m_110311');
    clickElement('hea_m_110312', true, 'checkbox');
    elementShouldBeChecked('hea_m_110312');

    // 4th column: Select elements and check them
    clickElement('hea_m_110402', true, 'checkbox');
    elementShouldBeChecked('hea_m_110402');
    elementShouldBeEnabled('hea_m_110403');
    elementShouldBeEnabled('hea_m_110404');
    elementShouldBeEnabled('hea_m_110405');
    elementShouldBeEnabled('hea_m_110406');
    elementShouldBeEnabled('hea_m_110407');
    elementShouldBeEnabled('hea_m_110408');
    elementShouldBeEnabled('hea_m_110409');
    elementShouldBeEnabled('hea_m_110410');
    elementShouldBeEnabled('hea_m_110411');
    elementShouldBeEnabled('hea_m_110412');
    // TODO checkbox should have rr-id hea_m_1104264(bug22661)
    // elementShouldBeEnabled('hea_m_1104264');
    clickElement('hea_m_110403', true, 'checkbox');
    elementShouldBeChecked('hea_m_110403');
    clickElement('hea_m_110404', true, 'checkbox');
    elementShouldBeChecked('hea_m_110404');
    clickElement('hea_m_110405', true, 'checkbox');
    elementShouldBeChecked('hea_m_110405');
    clickElement('hea_m_110406', true, 'checkbox');
    elementShouldBeChecked('hea_m_110406');
    clickElement('hea_m_110407', true, 'checkbox');
    elementShouldBeChecked('hea_m_110407');
    clickElement('hea_m_110408', true, 'checkbox');
    elementShouldBeChecked('hea_m_110408');
    clickElement('hea_m_110409', true, 'checkbox');
    elementShouldBeChecked('hea_m_110409');
    clickElement('hea_m_110410', true, 'checkbox');
    elementShouldBeChecked('hea_m_110410');
    clickElement('hea_m_110411', true, 'checkbox');
    elementShouldBeChecked('hea_m_110411');
    clickElement('hea_m_110412', true, 'checkbox');
    elementShouldBeChecked('hea_m_110412');
    // TODO checkbox should have rr-id hea_m_1104264(bug22661)
    // clickElement('hea_m_110413', true, 'checkbox');
    // elementShouldBeChecked('hea_m_110413');

    // 5th column: Select elements and check them
    clickElement('hea_m_110502', true, 'checkbox');
    elementShouldBeChecked('hea_m_110502');
    elementShouldBeEnabled('hea_m_110503');
    elementShouldBeEnabled('hea_m_110504');
    elementShouldBeEnabled('hea_m_110505');
    elementShouldBeEnabled('hea_m_110506');
    elementShouldBeEnabled('hea_m_110507');
    elementShouldBeEnabled('hea_m_110508');
    elementShouldBeEnabled('hea_m_110509');
    elementShouldBeEnabled('hea_m_110510');
    elementShouldBeEnabled('hea_m_110511');
    elementShouldBeEnabled('hea_m_110512');
    elementShouldBeEnabled('hea_m_110513');
    elementShouldBeEnabled('hea_m_110514');
    clickElement('hea_m_110503', true, 'checkbox');
    elementShouldBeChecked('hea_m_110503');
    clickElement('hea_m_110504', true, 'checkbox');
    elementShouldBeChecked('hea_m_110504');
    clickElement('hea_m_110505', true, 'checkbox');
    elementShouldBeChecked('hea_m_110505');
    clickElement('hea_m_110506', true, 'checkbox');
    elementShouldBeChecked('hea_m_110506');
    clickElement('hea_m_110507', true, 'checkbox');
    elementShouldBeChecked('hea_m_110507');
    clickElement('hea_m_110508', true, 'checkbox');
    elementShouldBeChecked('hea_m_110508');
    clickElement('hea_m_110509', true, 'checkbox');
    elementShouldBeChecked('hea_m_110509');
    clickElement('hea_m_110510', true, 'checkbox');
    elementShouldBeChecked('hea_m_110510');
    clickElement('hea_m_110511', true, 'checkbox');
    elementShouldBeChecked('hea_m_110511');
    clickElement('hea_m_110512', true, 'checkbox');
    elementShouldBeChecked('hea_m_110512');
    clickElement('hea_m_110513', true, 'checkbox');
    elementShouldBeChecked('hea_m_110513');
    clickElement('hea_m_110514', true, 'checkbox');
    elementShouldBeChecked('hea_m_110514');
  });
});
