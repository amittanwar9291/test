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

  it('Previous operation: Vesiculectomy', () => {
    // Click on Prev. Surgery tab
    clickElement('pel_m_020201');

    // Select Vesiculectomy from Previous operation
    selectDropdownOptionOS('pel_m_020311-1', 1, true, true);
    elementShouldBeEnabled('pel_m_020412');
    elementShouldBeEnabled('pel_m_020413');
    elementShouldBeEnabled('pel_m_020416');
    elementShouldBeEnabled('pel_m_020418');

    selectDropdownOptionOS('pel_m_020412', 3, true, true);
    selectDropdownOptionOS('pel_m_020413', 4, true, true);
    clickElement('pel_m_020416', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020417');
    clickElement('pel_m_020417', true, 'checkbox');
    clickElement('pel_m_020418', true, 'checkbox');
    elementShouldBeEnabled('pel_m_020419');
    clickElement('pel_m_020419', true, 'checkbox');
  });
});
