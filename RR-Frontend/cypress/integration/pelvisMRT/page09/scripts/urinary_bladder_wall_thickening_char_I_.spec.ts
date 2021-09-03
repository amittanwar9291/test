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

context('Page 09 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080107', 'pel_m_090106-');

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

  it('Urinary bladder wall thickening Char I', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Urinary bladder standard variation anomalies
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('pel_m_090107');

    // Available options
    elementShouldBeEnabled('pel_m_0902143');
    elementShouldBeEnabled('pel_m_0902144');
    elementShouldBeEnabled('pel_m_0903100');
    elementShouldBeEnabled('pel_m_0903102');
    elementShouldBeEnabled('pel_m_0903104');
    elementShouldBeEnabled('pel_m_0904107');
    elementShouldBeEnabled('pel_m_0904108');
    elementShouldBeEnabled('pel_m_0904109');
    elementShouldBeEnabled('pel_m_090513');
    elementShouldBeEnabled('pel_m_090514');
    elementShouldBeEnabled('pel_m_090516');
    elementShouldBeEnabled('pel_m_090517');
    elementShouldBeEnabled('pel_m_090518');

    // Select Diffuse and Focal
    clickElement('pel_m_0902143', true, 'radio');
    clickElement('pel_m_0902144', true, 'radio');
    elementShouldBeEnabled('pel_m_0902146');
    elementShouldBeEnabled('pel_m_0902147');
    elementShouldBeEnabled('pel_m_0902148');
    elementShouldBeEnabled('pel_m_0902149');
    elementShouldBeEnabled('pel_m_0902150');
    elementShouldBeEnabled('pel_m_0902151');
    elementShouldBeEnabled('pel_m_0902152');
    elementShouldBeEnabled('pel_m_0902153');

    // Select under Lokalisation
    clickElement('pel_m_0902146', true, 'checkbox');
    clickElement('pel_m_0902147', true, 'checkbox');
    clickElement('pel_m_0902148', true, 'checkbox');
    clickElement('pel_m_0902149', true, 'checkbox');
    clickElement('pel_m_0902150', true, 'checkbox');
    clickElement('pel_m_0902151', true, 'checkbox');
    clickElement('pel_m_0902152', true, 'checkbox');
    clickElement('pel_m_0902153', true, 'checkbox');

    // Enter 1 in the input field 'Max. expansion in mm'
    cy.byRRID('pel_m_0903100')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903100');

    // Enter 9999 in the input field 'Max. expansion in mm'
    cy.byRRID('pel_m_0903100').type('9999');
    elementShouldBeValid('pel_m_0903100');

    // Enter 1 in the input field '2nd plane in mm'
    cy.byRRID('pel_m_0903102')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903102');

    // Enter 9999 in the input field '2nd plane in mm'
    cy.byRRID('pel_m_0903102').type('9999');
    elementShouldBeValid('pel_m_0903102');

    // Enter 1 in the input field '3rd plane  in mm'
    cy.byRRID('pel_m_0903104')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0903104');

    // Enter 9999 in the input field '3rd plane  in mm'
    cy.byRRID('pel_m_0903104').type('9999');
    elementShouldBeValid('pel_m_0903104');

    // Select No
    clickElement('pel_m_0904109', true, 'radio');

    // Select Strong
    clickElement('pel_m_0904107', true, 'radio');
    elementShouldBeEnabled('pel_m_0904110');
    elementShouldBeEnabled('pel_m_0904111');

    // Select Homogeneous and Heterogeneous
    clickElement('pel_m_0904110', true, 'radio');
    clickElement('pel_m_0904111', true, 'radio');
    elementShouldBeEnabled('pel_m_0904112');
    elementShouldBeEnabled('pel_m_0904113');
    elementShouldBeEnabled('pel_m_0904114');

    // Select Central, Peripheral, Marginal
    clickElement('pel_m_0904112', true, 'radio');
    clickElement('pel_m_0904113', true, 'radio');
    clickElement('pel_m_0904114', true, 'radio');

    // Select Low
    clickElement('pel_m_0904108', true, 'radio');
    elementShouldBeEnabled('pel_m_0904110');
    elementShouldBeEnabled('pel_m_0904111');

    // Select Homogeneous and Heterogeneous
    clickElement('pel_m_0904110', true, 'radio');
    clickElement('pel_m_0904111', true, 'radio');
    elementShouldBeEnabled('pel_m_0904112');
    elementShouldBeEnabled('pel_m_0904113');
    elementShouldBeEnabled('pel_m_0904114');

    // Select Central, Peripheral, Marginal
    clickElement('pel_m_0904112', true, 'radio');
    clickElement('pel_m_0904113', true, 'radio');
    clickElement('pel_m_0904114', true, 'radio');

    // Select options Limited assessability
    clickElement('pel_m_090513', true, 'checkbox');
    clickElement('pel_m_090514', true, 'checkbox');

    // Inserted catheter
    clickElement('pel_m_090516', true, 'checkbox');
    clickElement('pel_m_090517', true, 'checkbox');
    clickElement('pel_m_090518', true, 'checkbox');
  });
});
