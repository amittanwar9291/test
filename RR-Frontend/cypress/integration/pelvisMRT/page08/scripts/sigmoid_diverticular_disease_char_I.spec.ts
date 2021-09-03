import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

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

  it('Sigma mass Char I', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Sigmoid diverticular disease
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(1);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_080233');
    elementShouldBeEnabled('pel_m_080234');

    //  'Sigmoid diverticulosis'
    clickElement('pel_m_080233', true, 'radio');
    elementShouldBeEnabled('pel_m_080236');
    elementShouldBeEnabled('pel_m_080237');
    elementShouldBeEnabled('pel_m_0802420');
    elementShouldBeEnabled('pel_m_0802430');
    elementShouldBeEnabled('pel_m_0802440');

    // Single
    clickElement('pel_m_080237', true, 'radio');
    elementShouldBeEnabled('pel_m_080239');

    // Enter 1 in the input field 'Diameter'
    cy.byRRID('pel_m_080239')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080239');

    // Enter 9999 in the input field 'Diameter'
    cy.byRRID('pel_m_080239').type('9999');
    elementShouldBeValid('pel_m_080239');

    // Diverticulitis
    clickElement('pel_m_080234', true, 'radio');
    elementShouldBeEnabled('pel_m_080324');
    elementShouldBeEnabled('pel_m_0803204');
    elementShouldBeEnabled('pel_m_0803205');
    elementShouldBeEnabled('pel_m_0804126');
    elementShouldBeEnabled('pel_m_0804127');
    elementShouldBeEnabled('pel_m_080421');
    elementShouldBeEnabled('pel_m_080525');
    elementShouldBeEnabled('pel_m_080526');
    elementShouldBeEnabled('pel_m_080527');

    // 'Intestinal wall thickening'
    clickElement('pel_m_080324', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080325');
    elementShouldBeEnabled('pel_m_080326');
    elementShouldBeEnabled('pel_m_080328');
    elementShouldBeEnabled('pel_m_0803202');

    // Enter 1 in the input field 'Maximum wall thickness'
    cy.byRRID('pel_m_080328')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080328');

    // Enter 9999 in the input field 'Maximum wall thickness'
    cy.byRRID('pel_m_080328').type('9999');
    elementShouldBeValid('pel_m_080328');

    // Enter 1 in the input field 'Longitudinal expansion'
    cy.byRRID('pel_m_0803202')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0803202');

    // Enter 9999 in the input field 'Longitudinal expansion'
    cy.byRRID('pel_m_0803202').type('9999');
    elementShouldBeValid('pel_m_0803202');

    // Free perforation
    clickElement('pel_m_0804127', true, 'radio');
    elementShouldBeEnabled('pel_m_0804127');

    // Abscess
    clickElement('pel_m_080421', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080423');
    elementShouldBeEnabled('pel_m_080425');
    elementShouldBeEnabled('pel_m_080426');

    // 'Maximum diameter' - 1
    cy.byRRID('pel_m_080423')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080423');

    // 'Maximum diameter' - 10
    cy.byRRID('pel_m_080423')
      .type('10')
      .clear();
    elementShouldBeValid('pel_m_080423');

    // 'Maximum diameter' - 11
    cy.byRRID('pel_m_080423').type('11');
    elementShouldBeValid('pel_m_080423');
    elementShouldBeEnabled('pel_m_080427');

    // Free fluid
    clickElement('pel_m_080519', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080520');

    // Fistula
    clickElement('pel_m_080521', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080522');
    elementShouldBeEnabled('pel_m_080523');
    elementShouldBeEnabled('pel_m_080524');

    // Stenosis
    clickElement('pel_m_080526', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0805101');
  });
});
