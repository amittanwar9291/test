import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 12 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });

  it('Procedure-course', () => {
    clickElement('hea_m_120201');

    elementShouldBeEnabled('hea_m_120108');
    elementShouldBeEnabled('hea_m_120110');
    elementShouldBeEnabled('hea_m_120111');
    elementShouldBeEnabled('hea_m_120112');
    elementShouldBeEnabled('hea_m_120113');

    elementShouldBeEnabled('hea_m_120244');
    elementShouldBeEnabled('hea_m_120245');
    elementShouldBeEnabled('hea_m_120246');
    elementShouldBeEnabled('hea_m_120247');
    elementShouldBeEnabled('hea_m_120248');

    elementShouldBeEnabled('hea_m_120358');
    elementShouldBeEnabled('hea_m_120359');
    elementShouldBeEnabled('hea_m_120360');
    elementShouldBeEnabled('hea_m_120361');

    elementShouldBeEnabled('hea_m_120444');
    elementShouldBeEnabled('hea_m_120445');
    elementShouldBeEnabled('hea_m_120446');
    clickElement('hea_m_120446', true, 'radio');
    elementShouldBeEnabled('hea_m_120447');
    elementShouldBeEnabled('hea_m_120445');
  });
});
