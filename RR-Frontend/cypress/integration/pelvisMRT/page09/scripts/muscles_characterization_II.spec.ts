import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, getAppConfig, selectSliderValueAndCheckIt } from '../../../../shared/service';
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

  it('Muscles Characterization II', () => {
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

    // Select Char II
    clickElement('pel_m_090341', true);
    elementShouldBeEnabled('pel_m_0902224');
    elementShouldBeEnabled('pel_m_0904208');
    elementShouldBeEnabled('pel_m_0904209');
    elementShouldBeEnabled('pel_m_0904210');
    elementShouldBeEnabled('pel_m_0904213');
    elementShouldBeEnabled('pel_m_0904214');
    elementShouldBeEnabled('pel_m_0904216');

    // Hematoma
    clickElement('pel_m_0902224', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0902226');
    elementShouldBeEnabled('pel_m_0902227');
    elementShouldBeEnabled('pel_m_0902228');
    elementShouldBeEnabled('pel_m_0902230');
    elementShouldBeEnabled('pel_m_0902232');
    elementShouldBeEnabled('pel_m_0903242');
    elementShouldBeEnabled('pel_m_0903243');
    elementShouldBeEnabled('pel_m_0903244');
    elementShouldBeEnabled('pel_m_0903245');

    // Select Lokalisation* options
    clickElement('pel_m_0902226', true, 'checkbox');
    clickElement('pel_m_0902227', true, 'checkbox');
    clickElement('pel_m_0902228', true, 'checkbox');

    // Select slider T1w

    selectSliderValueAndCheckIt('pel_m_0902230', 0, 3);

    // Select slider T2w
    selectSliderValueAndCheckIt('pel_m_0902232', 0, 3);

    // Select Hematoma characterization options
    clickElement('pel_m_0903242', true, 'radio');
    clickElement('pel_m_0903243', true, 'radio');
    clickElement('pel_m_0903244', true, 'radio');
    clickElement('pel_m_0903245', true, 'radio');

    // Associated findings
    clickElement('pel_m_0904208');
    clickElement('pel_m_0904209');
    clickElement('pel_m_0904210');
    elementShouldBeEnabled('pel_m_0904211');
    elementShouldBeEnabled('pel_m_0904212');
    clickElement('pel_m_0904211', true, 'radio');
    clickElement('pel_m_0904212', true, 'radio');

    clickElement('pel_m_0904213');
    clickElement('pel_m_0904214');
    elementShouldBeEnabled('pel_m_0904215');
    clickElement('pel_m_0904215');

    clickElement('pel_m_0904216');
    elementShouldBeEnabled('pel_m_0904218');

    // Enter 1 in the input field 'Shortest distance in mm'
    cy.byRRID('pel_m_0904218')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0904218');

    // Enter 9999 in the input field 'Shortest distance in mm'
    cy.byRRID('pel_m_0904218').type('9999');
    elementShouldBeValid('pel_m_0904218');
  });
});
