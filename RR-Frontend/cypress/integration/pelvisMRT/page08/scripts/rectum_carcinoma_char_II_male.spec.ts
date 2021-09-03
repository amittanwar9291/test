import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS
} from '../../../../shared/service';
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

  it('Rectum carcinoma Char II Male', () => {
    // Page 1: select Male and Pelvis
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Rectum carcinoma
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(0);

    // Select Characterization II
    clickElement('pel_m_080301', true);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_080220');
    elementShouldBeEnabled('pel_m_080221');
    elementShouldBeEnabled('pel_m_080222');
    elementShouldBeEnabled('pel_m_080223');
    elementShouldBeEnabled('pel_m_080224');

    // 4th column elements
    elementShouldBeEnabled('pel_m_080412');
    elementShouldBeEnabled('pel_m_080413');
    elementShouldBeEnabled('pel_m_080414');
    elementShouldBeEnabled('pel_m_080419');

    // 5th column elements
    elementShouldBeEnabled('pel_m_080513');

    // Select 'T3: Infiltration of subserosa or perirectal fat tissue'
    clickElement('pel_m_080222', true, 'radio');
    elementShouldBeEnabled('pel_m_080306');
    elementShouldBeEnabled('pel_m_080307');
    elementShouldBeEnabled('pel_m_080308');
    elementShouldBeEnabled('pel_m_080309');

    // Select 'T4: Infiltration of visceral peritoneum or direct organ infiltration'
    clickElement('pel_m_080223', true, 'radio');
    elementShouldBeEnabled('pel_m_080311');
    elementShouldBeEnabled('pel_m_080312');

    // Select 'T4b: Organ'
    clickElement('pel_m_080312', true, 'radio');
    elementShouldBeEnabled('pel_m_080314');
    elementShouldBeEnabled('pel_m_080316');
    elementShouldBeEnabled('pel_m_080322');
    elementShouldBeEnabled('pel_m_080318');
    elementShouldBeEnabled('pel_m_080319');
    elementShouldBeEnabled('pel_m_080320');
    elementShouldBeEnabled('pel_m_080321');

    // Char I
    clickElement('pel_m_080202');
    clickElement('pel_m_080208', true, 'checkbox');
    clickElement('pel_m_0803124', true, 'radio');

    // Char II
    clickElement('pel_m_080301');
    elementShouldBeEnabled('pel_m_080227');
    elementShouldBeEnabled('pel_m_080228');
    elementShouldBeEnabled('pel_m_080229');
    elementShouldBeEnabled('pel_m_080230');
    elementShouldBeEnabled('pel_m_080231');

    // Select 'T4: Direct infiltration into other organs'
    clickElement('pel_m_080230');
    elementShouldBeEnabled('pel_m_080314');
    elementShouldBeEnabled('pel_m_080316');
    elementShouldBeEnabled('pel_m_080322');
    elementShouldBeEnabled('pel_m_080318');
    elementShouldBeEnabled('pel_m_080319');
    elementShouldBeEnabled('pel_m_080320');
    elementShouldBeEnabled('pel_m_080321');

    // Select '≤ 1 mm, CRM positive'
    clickElement('pel_m_080414', true, 'radio');
    elementShouldBeEnabled('pel_m_080416');
    selectDropdownOptionOS('pel_m_080417', 1, true, true);

    // Enter 1 in the input field 'Maximum extramural tumor extension'
    cy.byRRID('pel_m_080419')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080419');

    // Enter 9999 in the input field 'Maximum extramural tumor extension'
    cy.byRRID('pel_m_080419').type('9999');
    elementShouldBeValid('pel_m_080419');

    // Select 'Extramural venous invasion (EMVI)'
    clickElement('pel_m_080513');
    elementShouldBeEnabled('pel_m_080515');
    elementShouldBeEnabled('pel_m_080516');
    elementShouldBeEnabled('pel_m_080517');
  });
});
