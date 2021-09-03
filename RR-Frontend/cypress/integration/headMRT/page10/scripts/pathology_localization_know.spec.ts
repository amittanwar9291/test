import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeChecked,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  typeValueIntoInputField
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 10 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_100107', 'hea_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_SellarRegion.url + '/' + pageId);
        });
      });
    });
  });

  it('Pathology Localization I describe', () => {
    clickElement('hea_m_100105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_100107');
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
      .should('have.attr', 'aria-selected', 'true');
    elementShouldBeEnabled('hea_m_100301');
    elementShouldBeEnabled('hea_m_100401');
    elementShouldBeEnabled('hea_m_100501');

    selectElementByRadioRole(4);
    elementShouldBeEnabled('hea_m_100204');
    elementShouldBeEnabled('hea_m_100304');
    elementShouldBeEnabled('hea_m_100305');
    elementShouldBeEnabled('hea_m_100310');
    elementShouldBeEnabled('hea_m_100311');

    elementShouldBeEnabled('hea_m_100403');
    elementShouldBeEnabled('hea_m_100404');
    elementShouldBeEnabled('hea_m_100405');
    elementShouldBeEnabled('hea_m_100406');
    elementShouldBeEnabled('hea_m_100407');
    elementShouldBeEnabled('hea_m_100408');
    elementShouldBeEnabled('hea_m_100409');
    elementShouldBeEnabled('hea_m_100410');
    elementShouldBeEnabled('hea_m_100411');
    elementShouldBeEnabled('hea_m_100412');
    elementShouldBeEnabled('hea_m_100413');

    elementShouldBeEnabled('hea_m_100504');

    clickElement('hea_m_100304', true, 'radio');
    elementShouldBeChecked('hea_m_100304');

    clickElement('hea_m_100305', true, 'radio');
    elementShouldBeChecked('hea_m_100305');
    elementShouldBeEnabled('hea_m_100306');
    elementShouldBeEnabled('hea_m_100307');
    elementShouldBeEnabled('hea_m_100308');
    clickElement('hea_m_100306', true, 'checkbox');
    clickElement('hea_m_100307', true, 'checkbox');
    clickElement('hea_m_100308', true, 'checkbox');
    elementShouldBeChecked('hea_m_100306');
    elementShouldBeChecked('hea_m_100307');
    elementShouldBeChecked('hea_m_100308');

    clickElement('hea_m_100310', true, 'radio');
    elementShouldBeChecked('hea_m_100310');

    clickElement('hea_m_100311', true, 'radio');
    elementShouldBeChecked('hea_m_100311');

    clickElement('hea_m_100403', true, 'checkbox');
    elementShouldBeChecked('hea_m_100403');
    clickElement('hea_m_100404', true, 'checkbox');
    elementShouldBeChecked('hea_m_100404');
    clickElement('hea_m_100405', true, 'checkbox');
    elementShouldBeChecked('hea_m_100405');
    clickElement('hea_m_100406', true, 'checkbox');
    elementShouldBeChecked('hea_m_100406');
    clickElement('hea_m_100407', true, 'checkbox');
    elementShouldBeChecked('hea_m_100407');
    clickElement('hea_m_100408', true, 'checkbox');
    elementShouldBeChecked('hea_m_100408');
    clickElement('hea_m_100409', true, 'checkbox');
    elementShouldBeChecked('hea_m_100409');
    clickElement('hea_m_100410', true, 'checkbox');
    elementShouldBeChecked('hea_m_100410');
    clickElement('hea_m_100411', true, 'checkbox');
    elementShouldBeChecked('hea_m_100411');
    clickElement('hea_m_100412', true, 'checkbox');
    elementShouldBeChecked('hea_m_100412');
    clickElement('hea_m_100413', true, 'checkbox');
    elementShouldBeChecked('hea_m_100413');

    typeValueIntoInputField('hea_m_100504', '101');
    cy.byRRID('hea_m_100504').should('have.value', '');

    typeValueIntoInputField('hea_m_100504', '77');
    cy.byRRID('hea_m_100504').should('have.value', '77');

    elementShouldBeEnabled('hea_m_100507');

    typeValueIntoInputField('hea_m_100507', '102');
    cy.byRRID('hea_m_100507').should('have.value', '');

    typeValueIntoInputField('hea_m_100507', '50');
    cy.byRRID('hea_m_100507').should('have.value', '50');

    elementShouldBeEnabled('hea_m_100510');

    typeValueIntoInputField('hea_m_100510', '103');
    cy.byRRID('hea_m_100510').should('have.value', '');

    typeValueIntoInputField('hea_m_100510', '1');
    cy.byRRID('hea_m_100510').should('have.value', '1');
  });
});
