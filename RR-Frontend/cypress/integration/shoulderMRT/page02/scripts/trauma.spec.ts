import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownDate } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('ShoulderMRT - page02 - Trauma', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Trauma - Checking all the options', () => {
    clickElement('sho_m_020105', false, 'checkbox');
    elementShouldBeEnabled('sho_m_020107');
    clickElement('sho_m_020107', false, 'radio');
    elementShouldBeEnabled('sho_m_020110');
    elementShouldBeEnabled('sho_m_020111');
    elementShouldBeEnabled('sho_m_020112');
    elementShouldBeEnabled('sho_m_020113');
    clickElement('sho_m_020113', false, 'radio');
    elementShouldBeEnabled('sho_m_020115');
    elementShouldBeEnabled('sho_m_020116');

    clickElement('sho_m_020201', false, 'checkbox');
    elementShouldBeEnabled('sho_m_020203');
    elementShouldBeEnabled('sho_m_020204');
    elementShouldBeEnabled('sho_m_020205');
    elementShouldBeEnabled('sho_m_020206');
    clickElement('sho_m_020206', false, 'checkbox');
    selectDropdownDate('sho_m_020208', 2, 0, false);
    selectDropdownDate('sho_m_020209', 2, 0, false);

    clickElement('sho_m_020404', false, 'checkbox');
    elementShouldBeEnabled('sho_m_020405');
    elementShouldBeEnabled('sho_m_020406');
    elementShouldBeEnabled('sho_m_020407');
    clickElement('sho_m_020407', false, 'radio');

    clickElement('sho_m_020503', false, 'checkbox');
    elementShouldBeEnabled('sho_m_020504');
    elementShouldBeEnabled('sho_m_020505');
    clickElement('sho_m_020505', false, 'radio');
  });
});
