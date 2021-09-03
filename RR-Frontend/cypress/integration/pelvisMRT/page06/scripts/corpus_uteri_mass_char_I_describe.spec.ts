import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, typeValueIntoInputField, visitPageNumber } from '../../../../shared/service';
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

    elementShouldBeEnabled('pel_m_060293');

    elementShouldBeEnabled('pel_m_060378');
    elementShouldBeEnabled('pel_m_060384');
    elementShouldBeEnabled('pel_m_060386');

    elementShouldBeEnabled('pel_m_060498');
    elementShouldBeEnabled('pel_m_060499');
    elementShouldBeEnabled('pel_m_0604100');

    elementShouldBeEnabled('pel_m_060532');
    elementShouldBeEnabled('pel_m_060536');
    elementShouldBeEnabled('pel_m_0604107');

    clickElement('pel_m_060293');
    // TODO check any localizer element and check if selected
    //  RR-ID is missed here, should be clicked by rrid (BUG 22502)
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('tspan')
      .eq(3)
      .click();
    cy.get('form.ng-valid > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    typeValueIntoInputField('pel_m_060378', '200');
    elementShouldBeEnabled('pel_m_060380');
    typeValueIntoInputField('pel_m_060380', '200');
    elementShouldBeEnabled('pel_m_060382');
    typeValueIntoInputField('pel_m_060382', '200');
    typeValueIntoInputField('pel_m_060384', '200');
    typeValueIntoInputField('pel_m_060386', '200');

    clickElement('pel_m_060532', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060533');
    clickElement('pel_m_060533', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060534');

    clickElement('pel_m_0604107', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604108');
    elementShouldBeEnabled('pel_m_0604111');
    clickElement('pel_m_0604108', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604109');

    typeValueIntoInputField('pel_m_060534', '200');
    typeValueIntoInputField('pel_m_0604109', '200');

    findingColumn.addFinding();
    elementShouldBeEnabled('pel_m_060106-2');
    findingColumn.selectFindingOptionByAppearance(5);

    elementShouldBeEnabled('pel_m_060498');
    elementShouldBeEnabled('pel_m_060499');
    elementShouldBeEnabled('pel_m_0604100');

    elementShouldBeEnabled('pel_m_060532');
    elementShouldBeEnabled('pel_m_060536');
    elementShouldBeEnabled('pel_m_0604107');
  });
});
