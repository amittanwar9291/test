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

context('Page 09 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_CerebrospinalFluidSpace.url + '/' + pageId);
        });
      });
    });
  });

  it('Norm variant ventricle', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Norm variant ventricle from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_090107');

    elementShouldBeEnabled('hea_m_090203');
    elementShouldBeEnabled('hea_m_090204');
    elementShouldBeEnabled('hea_m_090205');
    elementShouldBeEnabled('hea_m_090206');

    clickElement('hea_m_090203', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090203');
    clickElement('hea_m_090204', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090204');
    clickElement('hea_m_090205', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090205');
    clickElement('hea_m_090206', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090206');
  });
});
