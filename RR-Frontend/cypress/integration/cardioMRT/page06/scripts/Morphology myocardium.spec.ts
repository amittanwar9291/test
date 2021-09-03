import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Measured RV.spec Kardio page 6', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_LeftVentricle.url + '/' + pageId);
        });
      });
    });
  });
  it('Morphology myocardium.spec', () => {
    selectFindingsDropdownOption('car_m_060104', '.ui-dropdown-label', 0, true, true);
    elementShouldBeEnabled('car_m_060112');

    selectFindingsDropdownOption('car_m_060104', '.ui-dropdown-label', 2, false, false);
    elementShouldBeDisabled('car_m_060112');

    selectFindingsDropdownOption('car_m_060105', '.ui-dropdown-label', 1, true, true);
    elementShouldBeEnabled('car_m_060113');

    selectFindingsDropdownOption('car_m_060105', '.ui-dropdown-label', 2, false, false);
    elementShouldBeDisabled('car_m_060113');

    selectFindingsDropdownOption('car_m_060106', '.ui-dropdown-label', 1, true, true);
    elementShouldBeEnabled('car_m_060116');

    selectFindingsDropdownOption('car_m_060106', '.ui-dropdown-label', 2, false, false);
    elementShouldBeDisabled('car_m_060116');

    selectFindingsDropdownOption('car_m_060107', '.ui-dropdown-label', 1, true, true);
    elementShouldBeEnabled('car_m_060117');

    selectFindingsDropdownOption('car_m_060107', '.ui-dropdown-label', 2, false, false);
    elementShouldBeDisabled('car_m_060117');
  });
});
