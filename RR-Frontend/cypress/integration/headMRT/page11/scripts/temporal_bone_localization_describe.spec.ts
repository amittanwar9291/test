import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeChecked, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
    // On page 11 two first button and finding button are enabled
    elementShouldBeEnabled('hea_m_110104');
    elementShouldBeEnabled('hea_m_110105');

    // Select "Temporal bone" from dropdown
    clickElement('hea_m_110105', true, 'radio');
    elementShouldBeEnabled('hea_m_110106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('hea_m_110107');

    // I describe button is enabled and selected
    cy.get('div[role=radio]')
      .eq(3)
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');

    // I know button is enabled and Localization tab selected
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

    // On Localization tab
    elementShouldBeEnabled('hea_m_110334');
    elementShouldBeEnabled('hea_m_110335');
    elementShouldBeEnabled('hea_m_110336');

    // Details column is enabled
    elementShouldBeEnabled('hea_m_110432');
    elementShouldBeEnabled('hea_m_110433');
    elementShouldBeEnabled('hea_m_110434');
    elementShouldBeEnabled('hea_m_110435');
    elementShouldBeEnabled('hea_m_110436');
    elementShouldBeEnabled('hea_m_110437');
    elementShouldBeEnabled('hea_m_110441');
    elementShouldBeEnabled('hea_m_110442');

    // 5th is enabled
    elementShouldBeEnabled('hea_m_110534');
    elementShouldBeEnabled('hea_m_110535');
    elementShouldBeEnabled('hea_m_110537');
    elementShouldBeEnabled('hea_m_110538');
    elementShouldBeEnabled('hea_m_110539');

    // 3th Column: Select elements and check
    clickElement('hea_m_110334', true, 'radio');
    elementShouldBeChecked('hea_m_110334');
    clickElement('hea_m_110335', true, 'radio');
    elementShouldBeChecked('hea_m_110335');
    clickElement('hea_m_110336', true, 'radio');
    elementShouldBeChecked('hea_m_110336');
    elementShouldBeEnabled('hea_m_110337');
    elementShouldBeEnabled('hea_m_110338');

    // 4th Column: Select and check elements
    clickElement('hea_m_110432', true, 'checkbox');
    elementShouldBeChecked('hea_m_110432');
    clickElement('hea_m_110433', true, 'checkbox');
    elementShouldBeChecked('hea_m_110433');
    clickElement('hea_m_110434', true, 'checkbox');
    elementShouldBeChecked('hea_m_110434');
    clickElement('hea_m_110435', true, 'checkbox');
    elementShouldBeChecked('hea_m_110435');
    clickElement('hea_m_110436', true, 'checkbox');
    elementShouldBeChecked('hea_m_110436');
    clickElement('hea_m_110441', true, 'checkbox');
    elementShouldBeChecked('hea_m_110441');
    clickElement('hea_m_110442', true, 'checkbox');
    elementShouldBeChecked('hea_m_110442');

    clickElement('hea_m_110437', true, 'checkbox');
    elementShouldBeChecked('hea_m_110437');
    elementShouldBeEnabled('hea_m_110438');
    elementShouldBeEnabled('hea_m_110439');
    elementShouldBeEnabled('hea_m_110440');
    clickElement('hea_m_110438', true, 'checkbox');
    elementShouldBeChecked('hea_m_110438');
    clickElement('hea_m_110439', true, 'checkbox');
    elementShouldBeChecked('hea_m_110439');
    clickElement('hea_m_110440', true, 'checkbox');
    elementShouldBeChecked('hea_m_110440');

    // 5th column
    clickElement('hea_m_110534', true, 'checkbox');
    elementShouldBeChecked('hea_m_110534');
    clickElement('hea_m_110537', true, 'checkbox');
    elementShouldBeChecked('hea_m_110537');
    clickElement('hea_m_110538', true, 'checkbox');
    elementShouldBeChecked('hea_m_110538');
    clickElement('hea_m_110539', true, 'checkbox');
    elementShouldBeChecked('hea_m_110539');

    clickElement('hea_m_110535', true, 'checkbox');
    elementShouldBeChecked('hea_m_110535');
    elementShouldBeEnabled('hea_m_110536');
    clickElement('hea_m_110536', true, 'checkbox');
    elementShouldBeChecked('hea_m_110536');
  });
});
