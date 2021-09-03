import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 02 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Clinical symptoms: Pain', () => {
    // Click on Prev. Surgery tab
    clickElement('pel_m_020201');

    // Select pain from Clinical Symptoms
    selectDropdownOptionOS('pel_m_020118-1', 0, true, true);
    elementShouldBeEnabled('pel_m_020119');
    elementShouldBeEnabled('pel_m_020214');
    elementShouldBeEnabled('pel_m_020215');
    elementShouldBeEnabled('pel_m_020219');

    clickElement('pel_m_020214', true, 'checkbox');
    clickElement('pel_m_020215', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020217');
    elementShouldBeEnabled('pel_m_020218');
    clickElement('pel_m_020217', true, 'checkbox');
    clickElement('pel_m_020218', true, 'checkbox');
    clickElement('pel_m_020219', true, 'checkbox');
  });
});
