import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValueAndCheckIt
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 04 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_040124', 'pel_m_040123-');

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

  it('Lesion PZ PIRADS', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.get('rr-top-navigation a')
      .eq(3)
      .click({ force: true });

    clickElement('pel_m_040104');
    clickElement('pel_m_040122');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('pel_m_040124');

    elementShouldBeEnabled('pel_m_040222');
    cy.get('[id="ui-tabpanel-0-label"]').should('have.attr', 'aria-selected', 'true');
    elementShouldBeEnabled('pel_m_040304');
    elementShouldBeEnabled('pel_m_040420');

    clickElement('pel_m_040420');
    elementShouldBeEnabled('pel_m_040234');
    elementShouldBeEnabled('pel_m_040235');
    elementShouldBeEnabled('pel_m_040238');
    elementShouldBeEnabled('pel_m_040241');
    elementShouldBeEnabled('pel_m_040242');
    elementShouldBeEnabled('pel_m_040330');

    clickElement('pel_m_040241', true, 'radio');
    cy.byRRID('pel_m_040330')
      .find('[type="text"]')
      .should('have.value', 1);
    elementShouldBeEnabled('pel_m_040446');

    // TODO
    //  value in input field doesnt change when using slider

    selectSliderValueAndCheckIt('pel_m_040238', 0, 5);
    // cy.byRRID('pel_m_040330')
    //   .find('[type="text"]')
    //   .should('have.value', 5);

    selectDropdownOptionOS('pel_m_040446', 3, true, true);
    elementShouldBeEnabled('pel_m_040447');
    elementShouldBeEnabled('pel_m_040449');
    elementShouldBeEnabled('pel_m_040536');

    selectDropdownOptionOS('pel_m_040446', 1, true, true);
    elementShouldBeEnabled('pel_m_040447');
    elementShouldBeEnabled('pel_m_040449');
    elementShouldBeEnabled('pel_m_040536');

    selectDropdownOptionOS('pel_m_040449', 2, true, true);
    elementShouldBeEnabled('pel_m_040450');
  });
});
