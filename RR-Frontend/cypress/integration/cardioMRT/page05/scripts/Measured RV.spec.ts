import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - Anterior cruciate ligament (ACL).spec', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_FindingsVentricles.url + '/' + pageId);
        });
      });
    });
  });
  it('Measured RV.spec', () => {
    cy.byRRID('car_m_050201').click();

    elementShouldBeEnabled('car_m_050110');

    elementShouldBeEnabled('car_m_050112');
    elementShouldBeEnabled('car_m_050114');
    elementShouldBeEnabled('car_m_050116');
    elementShouldBeEnabled('car_m_050118');

    elementShouldBeEnabled('car_m_050121');
    elementShouldBeEnabled('car_m_050123');
    elementShouldBeEnabled('car_m_050125');

    elementShouldBeEnabled('car_m_050221');
    elementShouldBeEnabled('car_m_050223');
    elementShouldBeEnabled('car_m_050225');
    elementShouldBeEnabled('car_m_050227');
    elementShouldBeEnabled('car_m_050229');
    elementShouldBeEnabled('car_m_050231');
    elementShouldBeEnabled('car_m_050233');
    elementShouldBeEnabled('car_m_050235');

    elementShouldBeEnabled('car_m_050318');

    elementShouldBeEnabled('car_m_050411');
    elementShouldBeEnabled('car_m_050413');
    elementShouldBeEnabled('car_m_050414');
  });
});
