import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { cardioMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 07 - Right Ventricle', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'CardioMRT', config).then(id => {
          pageId = id;
          cy.visit(cardioMRTRoutes.CardioMRT_RightVentricle.url + '/' + pageId);
        });
      });
    });
  });
  it('Right Ventricle.spec', () => {
    clickElement('car_m_070106', true, 'radio');

    elementShouldBeEnabled('car_m_070201');

    elementShouldBeEnabled('car_m_070203');
    elementShouldBeEnabled('car_m_070206');
    elementShouldBeEnabled('car_m_070209');
    elementShouldBeEnabled('car_m_070212');
    elementShouldBeEnabled('car_m_070214');
    elementShouldBeEnabled('car_m_070301');
    elementShouldBeEnabled('car_m_070302');
    elementShouldBeEnabled('car_m_070303');
    elementShouldBeEnabled('car_m_070402');
    elementShouldBeEnabled('car_m_070403');

    clickElement('car_m_070203', true, 'checkbox');
    elementShouldBeEnabled('car_m_070204');
    elementShouldBeEnabled('car_m_070205');

    clickElement('car_m_070206', true, 'checkbox');
    elementShouldBeEnabled('car_m_070207');
    elementShouldBeEnabled('car_m_070208');

    clickElement('car_m_070209', true, 'checkbox');
    elementShouldBeEnabled('car_m_070210');
    elementShouldBeEnabled('car_m_070211');

    clickElement('car_m_070212', true, 'checkbox');
    elementShouldBeEnabled('car_m_070213');
  });
});
