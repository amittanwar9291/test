import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 07 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_070107', 'hea_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BasalNuclei.url + '/' + pageId);
        });
      });
    });
  });

  it('Pathology Characterization II - I know', () => {
    // Page 3: Contrast enhanced - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');

    // Page 7
    NavigationPageObject.visitPageNumber(7);

    // Select Pathology from the dropdown menu
    clickElement('hea_m_070105', true, 'radio');
    elementShouldBeEnabled('hea_m_070106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_070107');
    /* elementShouldBeEnabled('hea_m_070111');
    elementShouldBeEnabled('hea_m_070112'); */

    // Click I know radio button
    // clickElement('hea_m_070112', true, 'radio');

    // Click on Characterization II tab
    cy.byRRID('hea_m_070401').click();
    elementShouldBeEnabled('hea_m_070223');
    elementShouldBeEnabled('hea_m_070224');
    elementShouldBeEnabled('hea_m_070225');
    elementShouldBeEnabled('hea_m_070226');
    elementShouldBeEnabled('hea_m_070227');
    elementShouldBeEnabled('hea_m_070228');
    elementShouldBeEnabled('hea_m_070229');
    elementShouldBeEnabled('hea_m_070230');
    elementShouldBeEnabled('hea_m_070231');
    elementShouldBeEnabled('hea_m_070232');
    elementShouldBeEnabled('hea_m_070326');
    elementShouldBeEnabled('hea_m_070327');
    elementShouldBeEnabled('hea_m_070328');
    elementShouldBeEnabled('hea_m_070419');
    elementShouldBeEnabled('hea_m_070420');
    elementShouldBeEnabled('hea_m_070424');
    elementShouldBeEnabled('hea_m_070431');
    elementShouldBeEnabled('hea_m_070524');
    elementShouldBeEnabled('hea_m_070525');
    elementShouldBeEnabled('hea_m_070526');

    // Check all checkboxes in Changes in internal architecture
    clickElement('hea_m_070223', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070223');
    clickElement('hea_m_070224', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070224');
    clickElement('hea_m_070225', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070225');
    clickElement('hea_m_070226', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070226');
    clickElement('hea_m_070227', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070227');
    clickElement('hea_m_070228', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070228');
    clickElement('hea_m_070229', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070229');
    clickElement('hea_m_070230', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070230');
    clickElement('hea_m_070231', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070231');
    clickElement('hea_m_070232', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070232');

    // Check all checkboxes in Changes in internal architecture
    clickElement('hea_m_070326', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070326');
    clickElement('hea_m_070327', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070327');
    clickElement('hea_m_070328', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070328');

    // Associated findings
    clickElement('hea_m_070419', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070419');
    clickElement('hea_m_070420', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070420');
    elementShouldBeEnabled('hea_m_070422');

    // Enter 1 in 'Max. Diameter' input field

    cy.byRRID('hea_m_070422').type('1');

    // Enter 99 in 'Max. Diameter' input field

    cy.byRRID('hea_m_070422')
      .clear()
      .type('99');

    // Select Midline shift checkbox
    clickElement('hea_m_070424', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070424');
    elementShouldBeEnabled('hea_m_070426');
    elementShouldBeEnabled('hea_m_070427');
    elementShouldBeEnabled('hea_m_070429');
    clickElement('hea_m_070426', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070426');
    clickElement('hea_m_070427', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070427');

    // Enter 1 in 'Extent of midline shift' input field

    cy.byRRID('hea_m_070429').type('1');

    // Enter 99 in 'Extent of midline shift' input field

    cy.byRRID('hea_m_070429')
      .clear()
      .type('99');

    // Select Involvement of ventricles checkbox
    clickElement('hea_m_070431', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070431');
    elementShouldBeEnabled('hea_m_070432');
    elementShouldBeEnabled('hea_m_070433');
    elementShouldBeEnabled('hea_m_070434');
    clickElement('hea_m_070432', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070432');
    clickElement('hea_m_070433', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070433');
    clickElement('hea_m_070434', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_070434');

    // No radio button
    clickElement('hea_m_070524', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070524');

    // Low radio button
    clickElement('hea_m_070525', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070525');
    elementShouldBeEnabled('hea_m_070527');
    elementShouldBeEnabled('hea_m_070528');
    elementShouldBeEnabled('hea_m_070530');
    elementShouldBeEnabled('hea_m_070531');
    elementShouldBeEnabled('hea_m_070532');
    elementShouldBeEnabled('hea_m_070533');
    elementShouldBeEnabled('hea_m_070534');

    clickElement('hea_m_070527', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070527');
    clickElement('hea_m_070528', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070528');
    clickElement('hea_m_070530', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070530');
    clickElement('hea_m_070531', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070531');
    clickElement('hea_m_070532', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070532');
    clickElement('hea_m_070533', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070533');
    clickElement('hea_m_070534', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070534');

    // Strong radio button
    clickElement('hea_m_070526', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070526');
    elementShouldBeEnabled('hea_m_070527');
    elementShouldBeEnabled('hea_m_070528');
    elementShouldBeEnabled('hea_m_070530');
    elementShouldBeEnabled('hea_m_070531');
    elementShouldBeEnabled('hea_m_070532');
    elementShouldBeEnabled('hea_m_070533');
    elementShouldBeEnabled('hea_m_070534');

    clickElement('hea_m_070527', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070527');
    clickElement('hea_m_070528', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070528');
    clickElement('hea_m_070530', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070530');
    clickElement('hea_m_070531', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070531');
    clickElement('hea_m_070532', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070532');
    clickElement('hea_m_070533', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070533');
    clickElement('hea_m_070534', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_070534');
  });
});
