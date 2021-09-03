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

context('Page 08 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_BrainstemCranialNerves.url + '/' + pageId);
        });
      });
    });
  });

  it('Brainstem without evidence of pathological signal changes', () => {
    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);
    elementShouldBeEnabled('hea_m_080104');
    elementShouldBeEnabled('hea_m_080114');
    elementShouldBeEnabled('hea_m_080106');

    // Select Brainstem without evidence of pathological signal changes radio button
    clickElement('hea_m_080104', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080104');
    elementShouldBeEnabled('hea_m_080105');
    clickElement('hea_m_080105', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_080105');

    // Select No finding radio button
    clickElement('hea_m_080114', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_080114');
  });
});
