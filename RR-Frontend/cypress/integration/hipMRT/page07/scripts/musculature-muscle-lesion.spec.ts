import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Muscles and Tendons', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_070107', 'hip_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_MusclesAndTendons.url + '/' + pageId);
        });
      });
    });
  });

  describe('Muscle, Tendons', () => {
    it('Musculature -> Muscle Lesion', () => {
      clickElement('hip_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('hip_m_070107');
      elementShouldBeEnabled('hip_m_070203');
      elementShouldBeEnabled('hip_m_070204');
      elementShouldBeEnabled('hip_m_070206');
      elementShouldBeEnabled('hip_m_070208');
      elementShouldBeEnabled('hip_m_070209');
      elementShouldBeEnabled('hip_m_070210');
      elementShouldBeEnabled('hip_m_070211');
      elementShouldBeEnabled('hip_m_070212');
      elementShouldBeEnabled('hip_m_070213');
      elementShouldBeEnabled('hip_m_070214');

      elementShouldBeEnabled('hip_m_070302');
      elementShouldBeEnabled('hip_m_070303');
      elementShouldBeEnabled('hip_m_070304');

      clickElement('hip_m_070302', true, 'radio');
      elementShouldBeEnabled('hip_m_070402');
      elementShouldBeEnabled('hip_m_070403');
      elementShouldBeEnabled('hip_m_070404');
      elementShouldBeEnabled('hip_m_070405');

      clickElement('hip_m_070403', true, 'radio');
      elementShouldBeEnabled('hip_m_070501');

      clickElement('hip_m_070404', true, 'radio');
      elementShouldBeEnabled('hip_m_070502');

      clickElement('hip_m_070405', true, 'radio');
      elementShouldBeEnabled('hip_m_070505');
      elementShouldBeEnabled('hip_m_070506');
      elementShouldBeEnabled('hip_m_070507');
      elementShouldBeEnabled('hip_m_070513');

      clickElement('hip_m_070507', true, 'checkbox');
      elementShouldBeEnabled('hip_m_070508');
      elementShouldBeEnabled('hip_m_070509');
      elementShouldBeEnabled('hip_m_070510');
      elementShouldBeEnabled('hip_m_070511');
      elementShouldBeEnabled('hip_m_070512');
    });
  });
});
