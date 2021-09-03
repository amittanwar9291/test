import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 07 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('pel_m_070107', 'pel_m_070107-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Morphology_Characterization_I.feature', () => {
    it('Morphology_Characterization_I.feature', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(2000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('pel_m_070204');
      elementShouldBeEnabled('pel_m_070205');
      elementShouldBeEnabled('pel_m_070206');

      elementShouldBeEnabled('pel_m_070303');
      elementShouldBeEnabled('pel_m_070308');
      elementShouldBeEnabled('pel_m_070401');

      elementShouldBeEnabled('pel_m_070502');
      elementShouldBeEnabled('pel_m_070507');

      clickElement('pel_m_070303', true, 'checkbox');
      clickElement('pel_m_070308', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070305');
      elementShouldBeEnabled('pel_m_070306');
      elementShouldBeEnabled('pel_m_070307');

      elementShouldBeEnabled('pel_m_070309');
      elementShouldBeEnabled('pel_m_070310');
      elementShouldBeEnabled('pel_m_070311');
      clickElement('pel_m_070401', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070403');
      elementShouldBeEnabled('pel_m_070404');
      elementShouldBeEnabled('pel_m_070405');
      clickElement('pel_m_070502', true, 'checkbox');
      clickElement('pel_m_070507', true, 'checkbox');

      elementShouldBeEnabled('pel_m_070503');
      elementShouldBeEnabled('pel_m_070505');
      elementShouldBeEnabled('pel_m_070506');

      elementShouldBeEnabled('pel_m_070508');
      elementShouldBeEnabled('pel_m_070510');
      elementShouldBeEnabled('pel_m_070511');
    });
  });
});
