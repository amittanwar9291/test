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

  it('Fistula colovaginal', () => {
    // Page 1: select gender and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Fistula
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(7);

    // Select Colovaginal
    selectDropdownOptionOS('pel_m_0802117', 3, true, true);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_0802117');

    // 3rd column elements
    elementShouldBeEnabled('pel_m_0803152');
    elementShouldBeEnabled('pel_m_0803155');
    elementShouldBeEnabled('pel_m_0803157');

    // 4th column elements
    elementShouldBeEnabled('pel_m_0804103');
    elementShouldBeEnabled('pel_m_0804107');
    elementShouldBeEnabled('pel_m_0804109');

    elementShouldBeEnabled('pel_m_0804111');
    elementShouldBeEnabled('pel_m_0804112');
    elementShouldBeEnabled('pel_m_0804113');

    // 5th column elements
    elementShouldBeEnabled('pel_m_080581');
    elementShouldBeEnabled('pel_m_080587');
    elementShouldBeEnabled('pel_m_080588');
    elementShouldBeEnabled('pel_m_080589');

    // Enter 1 in the input field 'Length of fistula'
    cy.byRRID('pel_m_0803152')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0803152');

    // Enter 9999 in the input field 'Length of fistula'
    cy.byRRID('pel_m_0803152').type('9999');
    elementShouldBeValid('pel_m_0803152');

    // Select 'T2w signal elevation in perifocal soft tissue'
    clickElement('pel_m_0803157', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0803158');

    // Select 'Abscess'
    clickElement('pel_m_0804103', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0804105');

    // Enter 1 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0804105')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0804105');

    // Enter 9999 in the input field 'Maximum diameter'
    cy.byRRID('pel_m_0804105').type('9999');
    elementShouldBeValid('pel_m_0804105');

    // Select 'Additional smaller fistula branches'
    clickElement('pel_m_0804107', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0804108');

    // Select 'Fistula in malignant tumor'
    clickElement('pel_m_080581', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080582');
    elementShouldBeEnabled('pel_m_080583');
    elementShouldBeEnabled('pel_m_080585');

    // Enter 1 in the input field 'Axial expansion'
    cy.byRRID('pel_m_080585')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_080585');

    // Enter 9999 in the input field 'Axial expansion'
    cy.byRRID('pel_m_080585').type('9999');
    elementShouldBeValid('pel_m_080585');
  });
});
