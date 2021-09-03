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

  it('Medium interhemispheric slit, regular width of the inner and outer CSF spaces, no CSF circulation disturbance', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);
    elementShouldBeEnabled('hea_m_090104');
    elementShouldBeEnabled('hea_m_090113');
    elementShouldBeEnabled('hea_m_090105');

    // Select 'Medium interhemispheric slit, regular width of the inner and outer CSF spaces, no CSF circulation disturbance' radio button
    clickElement('hea_m_090104', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090104');
  });
});
