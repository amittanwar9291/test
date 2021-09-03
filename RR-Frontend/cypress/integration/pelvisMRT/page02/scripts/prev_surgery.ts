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

  it('Prev. Surgery', () => {
    // Click on Prev. Surgery tab
    clickElement('pel_m_020201');
    elementShouldBeEnabled('pel_m_020118-1');
    elementShouldBeEnabled('pel_m_020311-1');
    elementShouldBeEnabled('pel_m_020509');
    elementShouldBeEnabled('pel_m_020510');

    selectDropdownOptionOS('pel_m_020509', 2, true, true);
    selectDropdownOptionOS('pel_m_020510', 5, true, true);
  });
});
