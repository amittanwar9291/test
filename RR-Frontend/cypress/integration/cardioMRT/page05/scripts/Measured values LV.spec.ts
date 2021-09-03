import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Measured RV.spec Kardio page 5', () => {
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
  it('Measured values LV.spec', () => {
    elementShouldBeEnabled('car_m_050106');

    elementShouldBeEnabled('car_m_050204');
    elementShouldBeEnabled('car_m_050208');
    elementShouldBeEnabled('car_m_050206');
    elementShouldBeEnabled('car_m_050210');
    elementShouldBeEnabled('car_m_050212');
    elementShouldBeEnabled('car_m_050215');
    elementShouldBeEnabled('car_m_050217');
    elementShouldBeEnabled('car_m_050219');

    elementShouldBeEnabled('car_m_050301');
    elementShouldBeEnabled('car_m_050303');
    elementShouldBeEnabled('car_m_050305');
    elementShouldBeEnabled('car_m_050307');
    elementShouldBeEnabled('car_m_050309');
    elementShouldBeEnabled('car_m_050311');
    elementShouldBeEnabled('car_m_050313');
    elementShouldBeEnabled('car_m_050315');

    elementShouldBeEnabled('car_m_050402');
    elementShouldBeEnabled('car_m_050404');
    elementShouldBeEnabled('car_m_050417');

    elementShouldBeEnabled('uni_05_003');
    elementShouldBeEnabled('uni_05_005');
    elementShouldBeEnabled('uni_05_006');
  });
});
