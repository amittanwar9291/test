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

  it('Urinary bladder wall thickening Male Char II', () => {
    // Page 1: select Male and Pelvis
    clickElement('uni_01_006', true, 'radio');
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

    // Select Characterization II
    clickElement('pel_m_090398', true);

    // Available options
    elementShouldBeEnabled('pel_m_0902154');
    elementShouldBeEnabled('pel_m_0902156');
    elementShouldBeEnabled('pel_m_0902157');
    elementShouldBeEnabled('pel_m_0903107');
    elementShouldBeEnabled('pel_m_0903108');
    elementShouldBeEnabled('pel_m_0904117');
    elementShouldBeEnabled('pel_m_0904121');
    elementShouldBeEnabled('pel_m_090513');
    elementShouldBeEnabled('pel_m_090514');
    elementShouldBeEnabled('pel_m_090516');
    elementShouldBeEnabled('pel_m_090517');
    elementShouldBeEnabled('pel_m_090518');

    // Select Calcification
    clickElement('pel_m_0902154', true, 'checkbox');

    // Select Exophytic growth, Infiltrative growth
    clickElement('pel_m_0902156', true, 'radio');
    clickElement('pel_m_0902157', true, 'radio');
    elementShouldBeEnabled('pel_m_0902158');
    elementShouldBeEnabled('pel_m_0902159');
    elementShouldBeEnabled('pel_m_0902161');
    elementShouldBeEnabled('pel_m_0902162');

    clickElement('pel_m_0902158', true, 'radio');
    clickElement('pel_m_0902159', true, 'radio');
    clickElement('pel_m_0902161', true, 'radio');
    clickElement('pel_m_0902162', true, 'radio');

    // Select buttons 3rd column
    clickElement('pel_m_0903107', true, 'radio');
    clickElement('pel_m_0903108', true, 'radio');

    // DD1 - Endometriosis
    selectDropdownOptionOS('pel_m_0904117', 7, true, true);
    elementShouldBeEnabled('pel_m_0904119');

    // DD2 - Infiltrated by uterus/ovarian carcinoma
    selectDropdownOptionOS('pel_m_0904119', 22, true, true);
    elementShouldBeEnabled('pel_m_0904120');

    // Select Subordinate
    clickElement('pel_m_0904120', true, 'checkbox');

    // Select > 1 lesion, same entity
    clickElement('pel_m_0904121', true, 'checkbox');

    // Select options Limited assessability
    clickElement('pel_m_090513', true, 'checkbox');
    clickElement('pel_m_090514', true, 'checkbox');

    // Inserted catheter
    clickElement('pel_m_090516', true, 'checkbox');
    clickElement('pel_m_090517', true, 'checkbox');
    clickElement('pel_m_090518', true, 'checkbox');
  });
});
