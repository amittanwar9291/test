import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 10 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_100107', 'pel_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Stress Fracture -> Neck', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');

      cy.byRRID('pel_m_100203').click();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[id="Rechts_Femurhals"]')
        .shadowClick();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[alt="cross-image"]')
        .shadowClick();

      elementShouldBeEnabled('pel_m_100327');
      elementShouldBeEnabled('pel_m_100328');
      elementShouldBeEnabled('pel_m_100329');

      elementShouldBeEnabled('pel_m_100466');
      elementShouldBeEnabled('pel_m_1004200');
      elementShouldBeEnabled('pel_m_100465');

      clickElement('pel_m_100329', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100331');
      elementShouldBeEnabled('pel_m_100332');

      clickElement('pel_m_100466', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100468');
      elementShouldBeEnabled('pel_m_100469');
    });
  });
});
