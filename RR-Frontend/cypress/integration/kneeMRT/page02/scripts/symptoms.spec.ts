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

  it('Symptoms', () => {
    clickElement('kne_m_020503', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020505');
    elementShouldBeEnabled('kne_m_020506');
    elementShouldBeEnabled('kne_m_020507');
    elementShouldBeEnabled('kne_m_020508');

    clickElement('kne_m_020509', false, 'checkbox');
    elementShouldBeEnabled('kne_m_020511');
    elementShouldBeEnabled('kne_m_020512');
    elementShouldBeEnabled('kne_m_020513');
    elementShouldBeEnabled('kne_m_020514');
  });
});
