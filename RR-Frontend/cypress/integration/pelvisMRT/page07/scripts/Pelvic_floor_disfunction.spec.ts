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

  describe('Pelvic_floor_disfunction.feature', () => {
    it('Pelvic_floor_disfunction.feature', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(2000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(2);

      elementShouldBeEnabled('pel_m_070108');

      elementShouldBeEnabled('pel_m_070242');
      elementShouldBeEnabled('pel_m_070342');
      elementShouldBeEnabled('pel_m_070434');

      clickElement('pel_m_070242', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070243');

      clickElement('pel_m_070342', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070343');
    });
  });
});
