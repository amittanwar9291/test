import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
  it('Left Ventricle - Function.spec', () => {
    elementShouldBeEnabled('car_m_060201');
    clickElement('car_m_060201', true, 'checkbox');
    elementShouldBeEnabled('car_m_060203');
    elementShouldBeEnabled('car_m_060204');
    elementShouldBeEnabled('car_m_060205');
    elementShouldBeEnabled('car_m_060206');

    clickElement('car_m_060203', true, 'checkbox');
    elementShouldBeEnabled('car_m_060210');
    clickElement('car_m_060206', true, 'checkbox');
    elementShouldBeEnabled('car_m_060207');
  });
});
