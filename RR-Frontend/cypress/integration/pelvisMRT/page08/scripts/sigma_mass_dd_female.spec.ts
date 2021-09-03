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

  it('Sigma mass DD Female', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Sigma mass
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(2);

    // Select DD
    clickElement('pel_m_080438', true);

    // 'Sigmoid colon cancer'
    selectDropdownOptionOS('pel_m_080265', 8, true, true);
    elementShouldBeEnabled('pel_m_080266');
    elementShouldBeEnabled('pel_m_080269');
    elementShouldBeEnabled('pel_m_080365');
    elementShouldBeEnabled('pel_m_080366');
    elementShouldBeEnabled('pel_m_080367');
    elementShouldBeEnabled('pel_m_080369');

    // 'T4: Infiltration of visceral peritoneum or direct organ infiltration'
    clickElement('pel_m_080368', true, 'radio');
    elementShouldBeEnabled('pel_m_080451');
    elementShouldBeEnabled('pel_m_080452');

    // 'T4b: Other adjacent organs'
    clickElement('pel_m_080452', true, 'radio');
    elementShouldBeEnabled('pel_m_080542');
    elementShouldBeEnabled('pel_m_080545');
    elementShouldBeEnabled('pel_m_080546');
    elementShouldBeEnabled('pel_m_080547');
    elementShouldBeEnabled('pel_m_080548');
    elementShouldBeEnabled('pel_m_080549');
    elementShouldBeEnabled('pel_m_080550');

    // DD other option
    selectDropdownOptionOS('pel_m_080265', 2, true, true);
    elementShouldBeEnabled('pel_m_080266');
    elementShouldBeEnabled('pel_m_080269');

    // DD 2
    selectDropdownOptionOS('pel_m_080269', 4, true, true);
    elementShouldBeEnabled('pel_m_080365');
    elementShouldBeEnabled('pel_m_080366');
    elementShouldBeEnabled('pel_m_080367');
    elementShouldBeEnabled('pel_m_080369');

    // 'T4: Infiltration of visceral peritoneum or direct organ infiltration'
    clickElement('pel_m_080368', true, 'radio');
    elementShouldBeEnabled('pel_m_080451');
    elementShouldBeEnabled('pel_m_080452');

    // 'T4b: Other adjacent organs'
    clickElement('pel_m_080452', true, 'radio');
    elementShouldBeEnabled('pel_m_080542');
    elementShouldBeEnabled('pel_m_080545');
    elementShouldBeEnabled('pel_m_080546');
    elementShouldBeEnabled('pel_m_080547');
    elementShouldBeEnabled('pel_m_080548');
    elementShouldBeEnabled('pel_m_080549');
    elementShouldBeEnabled('pel_m_080550');
  });
});
