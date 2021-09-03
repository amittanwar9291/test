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

  describe('Morphology_Levator_ani_muscle.feature', () => {
    it('Morphology_Levator_ani_muscle.feature.spec', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(2000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('pel_m_070108');

      clickElement('pel_m_070301');

      elementShouldBeEnabled('pel_m_070208');
      elementShouldBeEnabled('pel_m_070314');
      elementShouldBeEnabled('pel_m_070409');

      clickElement('pel_m_070208', true, 'checkbox');
      clickElement('pel_m_070314', true, 'checkbox');

      clickElement('pel_m_070409', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070209');
      elementShouldBeEnabled('pel_m_070210');
      elementShouldBeEnabled('pel_m_070211');
      elementShouldBeEnabled('pel_m_070212');
      elementShouldBeEnabled('pel_m_070213');
      elementShouldBeEnabled('pel_m_070214');

      elementShouldBeEnabled('pel_m_070315');
      elementShouldBeEnabled('pel_m_070316');
      elementShouldBeEnabled('pel_m_070317');
      elementShouldBeEnabled('pel_m_070318');
      elementShouldBeEnabled('pel_m_070319');
      elementShouldBeEnabled('pel_m_070320');

      elementShouldBeEnabled('pel_m_070410');
      elementShouldBeEnabled('pel_m_070411');
      elementShouldBeEnabled('pel_m_070412');

      elementShouldBeEnabled('pel_m_070413');
      elementShouldBeEnabled('pel_m_070414');
      elementShouldBeEnabled('pel_m_070415');
    });
  });
});
