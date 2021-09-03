import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Muscles Characterization I', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Muscles
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('pel_m_090107');

    // 2nd column options
    elementShouldBeEnabled('pel_m_0902211');
    elementShouldBeEnabled('pel_m_0902212');
    elementShouldBeEnabled('pel_m_0902215');

    // Select Right
    clickElement('pel_m_0902211', true, 'radio');
    // checkMandatoryGroup(['pel_m_090221', 'pel_m_0902212']);

    // Select Left
    clickElement('pel_m_0902212', true, 'radio');
    // checkMandatoryGroup(['pel_m_090221', 'pel_m_0902212']);

    // Select from Localization
    selectDropdownOptionOS('pel_m_0902215', 2, true, true);
    elementShouldBeEnabled('pel_m_0903233');
    elementShouldBeEnabled('pel_m_0903234');
    elementShouldBeEnabled('pel_m_0903235');
    elementShouldBeEnabled('pel_m_0903236');
    elementShouldBeEnabled('pel_m_0903237');
    elementShouldBeEnabled('pel_m_0903238');
    elementShouldBeEnabled('pel_m_0903239');

    // Select 3rd column options
    clickElement('pel_m_0903233', true, 'radio');
    clickElement('pel_m_0903234', true, 'radio');
    clickElement('pel_m_0903235', true, 'radio');
    clickElement('pel_m_0903236', true, 'radio');
    clickElement('pel_m_0903237', true, 'radio');
    clickElement('pel_m_0903238', true, 'radio');
    clickElement('pel_m_0903239', true, 'radio');

    // Select Muscle lesion
    clickElement('pel_m_0904200', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0904203');
    elementShouldBeEnabled('pel_m_0904204');
    elementShouldBeEnabled('pel_m_0904205');
    elementShouldBeEnabled('pel_m_0904206');

    // Select Muscular edema
    clickElement('pel_m_0904203', true, 'radio');

    // Select Muscle fibre rupture (Type IIIa)
    clickElement('pel_m_0904204', true, 'radio');
    elementShouldBeEnabled('pel_m_0905200');
    clickElement('pel_m_0905200', true, 'checkbox');

    // Muscle bundle tear (Type IIIb)
    clickElement('pel_m_0904205', true, 'radio');
    elementShouldBeEnabled('pel_m_0905201');
    clickElement('pel_m_0905201', true, 'checkbox');

    // Muscle/tendon rupture (Type IV)
    clickElement('pel_m_0904206', true, 'radio');
    elementShouldBeEnabled('pel_m_090537');
    elementShouldBeEnabled('pel_m_090539');
    elementShouldBeEnabled('pel_m_090540');

    // Enter 1 in the input field 'Retraction in mm'
    cy.byRRID('pel_m_090537')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_090537');

    // Enter 9999 in the input field 'Retraction in mm'
    cy.byRRID('pel_m_090537').type('9999');
    elementShouldBeValid('pel_m_090537');

    clickElement('pel_m_090539');
    clickElement('pel_m_090540');
    elementShouldBeEnabled('pel_m_090542');
    elementShouldBeEnabled('pel_m_090543');

    selectDropdownOptionOS('pel_m_090542', 2, true, true);
    clickElement('pel_m_090543');
  });
});
