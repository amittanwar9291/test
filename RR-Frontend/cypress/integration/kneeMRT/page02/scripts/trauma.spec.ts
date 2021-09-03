import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('page02 - Anamnese Symptoms', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Trauma', () => {
    clickElement('kne_m_020105', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020107');
    elementShouldBeEnabled('kne_m_020110');
    elementShouldBeEnabled('kne_m_020111');
    clickElement('kne_m_020107', false, 'radio');
    elementShouldBeEnabled('kne_m_020108');
    elementShouldBeEnabled('kne_m_020109');
    clickElement('kne_m_020201', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020202');
    clickElement('kne_m_020205', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020207');
    elementShouldBeEnabled('kne_m_020208');
    elementShouldBeEnabled('kne_m_020209');
    elementShouldBeEnabled('kne_m_020210');
  });
});
