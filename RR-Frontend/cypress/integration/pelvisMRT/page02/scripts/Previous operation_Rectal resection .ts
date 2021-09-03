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
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Previous operation: Rectal resection\n', () => {
    // Go to Page 01 and select Female radio button
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');

    // Go to Page 02
    NavigationPageObject.visitPageNumber(2);

    // Click on Prev. Surgery tab
    clickElement('pel_m_020201');

    // Select Rectal resection from Previous operation
    selectDropdownOptionOS('pel_m_020311-1', 4, true, true);
    elementShouldBeEnabled('pel_m_020312');
    elementShouldBeEnabled('pel_m_020412');
    elementShouldBeEnabled('pel_m_020413');
    elementShouldBeEnabled('pel_m_020425');
    elementShouldBeEnabled('pel_m_020427');
    elementShouldBeEnabled('pel_m_020429');
    elementShouldBeEnabled('pel_m_020430');
    elementShouldBeEnabled('pel_m_020431');

    selectDropdownOptionOS('pel_m_020412', 3, true, true);
    selectDropdownOptionOS('pel_m_020413', 4, true, true);
    clickElement('pel_m_020425', true, 'radio');
    elementShouldBeEnabled('pel_m_020426');
    clickElement('pel_m_020426', true, 'checkbox');
    clickElement('pel_m_020427', true, 'radio');

    clickElement('pel_m_020429', true, 'checkbox');
    clickElement('pel_m_020430', true, 'checkbox');
    clickElement('pel_m_020431', true, 'checkbox');
  });
});
