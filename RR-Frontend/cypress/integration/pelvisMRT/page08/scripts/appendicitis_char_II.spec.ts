import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldHaveGivenState, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Appendicitis Char II', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Appendicitis
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(4);

    // Char II selected
    clickElement('pel_m_080322', true);

    // Second column items
    elementShouldBeEnabled('pel_m_080280');
    elementShouldBeEnabled('pel_m_080281');
    elementShouldBeEnabled('pel_m_080282');

    elementShouldBeEnabled('pel_m_0802105');
    elementShouldBeEnabled('pel_m_0802106');

    elementShouldBeEnabled('pel_m_080397');
    elementShouldBeEnabled('pel_m_080398');

    // Third column items
    elementShouldBeEnabled('pel_m_0803130');
    elementShouldBeEnabled('pel_m_0803131');
    elementShouldBeEnabled('pel_m_0803132');

    // Fourth column items
    elementShouldBeEnabled('pel_m_080471');

    // Select Kräftig
    clickElement('pel_m_080280', true, 'radio');
    elementShouldBeEnabled('pel_m_0802100');
    elementShouldBeEnabled('pel_m_0802101');

    // Select Heterogen
    clickElement('pel_m_0802101', true, 'radio');
    elementShouldBeEnabled('pel_m_0802102');
    elementShouldBeEnabled('pel_m_0802128');
    elementShouldBeEnabled('pel_m_0802103');

    // Select Gering
    clickElement('pel_m_080281', true, 'radio');
    elementShouldBeEnabled('pel_m_0802100');
    elementShouldBeEnabled('pel_m_0802101');

    // Select Heterogen
    clickElement('pel_m_0802101', true, 'radio');
    elementShouldBeEnabled('pel_m_0802102');
    elementShouldBeEnabled('pel_m_0802128');
    elementShouldBeEnabled('pel_m_0802103');

    // DD
    selectDropdownOptionOS('pel_m_080471', 2, true, true);
    // clickElement('pel_m_080471');
    // cy.get('[rr-id="pel_m_080471"]').select('Kolitis');
    // cy.get('[rr-id="pel_m_080471"]').should('have.value', 'Kolitis');
    elementShouldBeEnabled('pel_m_080466');
  });
});
