import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 05 - Non-enhancing', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_AnatomyEnhancement.url + '/' + pageId);
        });
      });
    });
  });

  describe('CHECK several Radio Buttons at Non-enhancing findings', () => {
    it('THEN check if Left and Right are enabled in each case', () => {
      clickElement('mam_m_050510');
      elementShouldBeEnabled('mam_m_050515');
      elementShouldBeEnabled('mam_m_050516');

      clickElement('mam_m_050511');
      elementShouldBeEnabled('mam_m_050515');
      elementShouldBeEnabled('mam_m_050516');

      clickElement('mam_m_050512');
      elementShouldBeEnabled('mam_m_050515');
      elementShouldBeEnabled('mam_m_050516');

      clickElement('mam_m_050513');
      elementShouldBeEnabled('mam_m_050515');
      elementShouldBeEnabled('mam_m_050516');
    });
  });
});
