import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Shoulder Page 07 - Join and Bursae', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_070107', 'sho_m_070106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_JointAndBursae.url + '/' + pageId);
        });
      });
    });
  });

  describe('Capsule', () => {
    it('Capsule', () => {
      clickElement('sho_m_070105', true, 'radio');
      elementShouldBeEnabled('sho_m_070106-1');

      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('sho_m_070107');

      elementShouldBeEnabled('sho_m_070204');
      elementShouldBeEnabled('sho_m_070205');
      elementShouldBeEnabled('sho_m_070206');
      elementShouldBeEnabled('sho_m_070207');

      elementShouldBeEnabled('sho_m_070402');
      clickElement('sho_m_070402', true, 'checkbox');
      elementShouldBeEnabled('sho_m_070403');
      elementShouldBeEnabled('sho_m_070404');
      elementShouldBeEnabled('sho_m_070405');

      clickElement('sho_m_070205', true, 'radio');
      elementShouldBeEnabled('sho_m_070301');
      elementShouldBeEnabled('sho_m_070302');
      elementShouldBeEnabled('sho_m_070303');
      elementShouldBeEnabled('sho_m_070304');
      elementShouldBeEnabled('sho_m_070307');

      clickElement('sho_m_070206', true, 'radio');
      elementShouldBeEnabled('sho_m_070308');
    });
  });
});
