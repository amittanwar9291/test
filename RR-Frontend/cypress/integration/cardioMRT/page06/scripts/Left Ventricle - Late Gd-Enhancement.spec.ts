import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Kardio page 6', () => {
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

  it('Left Ventricle - Late Gd-Enhancement.spec', () => {
    elementShouldBeEnabled('car_m_060401');
    clickElement('car_m_060401', true, 'checkbox');

    cy.byRRID('car_m_0604200').click();

    elementShouldBeEnabled('car_m_060403');
    selectFindingsDropdownOption('car_m_060403', '.ui-dropdown-label', 2, true, true);
    elementShouldBeEnabled('car_m_060409');
    cy.byRRID('car_m_0604201').click();

    elementShouldBeEnabled('uni_06_003_01');
    elementShouldBeEnabled('uni_06_005_01');
    elementShouldBeEnabled('uni_06_006_01');
  });
});
