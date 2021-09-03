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

  it('Fistula Complex', () => {
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

    // Select Complex
    selectDropdownOptionOS('pel_m_0802117', 7, true, true);

    // 2nd column options enabled
    elementShouldBeEnabled('pel_m_0802119');
    elementShouldBeEnabled('pel_m_0802120');
    elementShouldBeEnabled('pel_m_0802121');
    elementShouldBeEnabled('pel_m_0802122');
    elementShouldBeEnabled('pel_m_0802123');
    elementShouldBeEnabled('pel_m_0802124');
    elementShouldBeEnabled('pel_m_0802125');
    elementShouldBeEnabled('pel_m_0802126');
    elementShouldBeEnabled('pel_m_0802127');

    // 3rd column elements
    elementShouldBeEnabled('pel_m_0803164');
    elementShouldBeEnabled('pel_m_0803165');
    elementShouldBeEnabled('pel_m_0803167');
    elementShouldBeEnabled('pel_m_0803155');

    elementShouldBeEnabled('pel_m_0803156');
    elementShouldBeEnabled('pel_m_0803157');
    elementShouldBeEnabled('pel_m_0803159');

    // 4th column elements
    elementShouldBeEnabled('pel_m_0804103');
    elementShouldBeEnabled('pel_m_0804107');
    elementShouldBeEnabled('pel_m_0804114');

    elementShouldBeEnabled('pel_m_0804109');
    elementShouldBeEnabled('pel_m_0804116');

    // 5th column elements
    elementShouldBeEnabled('pel_m_080581');
    elementShouldBeEnabled('pel_m_080587');
    elementShouldBeEnabled('pel_m_080588');
    elementShouldBeEnabled('pel_m_080589');

    // Enter 1 in the input field 'Maximum length'
    cy.byRRID('pel_m_0803167')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0803167');

    // Enter 9999 in the input field 'Maximum length'
    cy.byRRID('pel_m_0803167').type('9999');
    elementShouldBeValid('pel_m_0803167');

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

    // Select 'Osteomyelitis'
    clickElement('pel_m_0804116', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0804117');

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
