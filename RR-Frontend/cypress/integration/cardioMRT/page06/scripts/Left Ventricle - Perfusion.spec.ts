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

  it('Left Ventricle - Perfusion.spec', () => {
    elementShouldBeEnabled('car_m_060301');
    clickElement('car_m_060301', true, 'checkbox');

    elementShouldBeEnabled('car_m_060302');

    elementShouldBeEnabled('car_m_0603101');
    elementShouldBeEnabled('car_m_0603102');

    clickElement('car_m_0603102', true, 'radio');
    elementShouldBeEnabled('car_m_060305');
  });
});
