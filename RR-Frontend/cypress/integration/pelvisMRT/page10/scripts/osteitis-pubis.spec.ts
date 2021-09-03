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
    it('Bones -> Osteitis pubis', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(11);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');

      elementShouldBeEnabled('pel_m_100375');
      elementShouldBeEnabled('pel_m_100378');
      elementShouldBeEnabled('pel_m_100379');
      elementShouldBeEnabled('pel_m_100383');
      elementShouldBeEnabled('pel_m_100384');

      clickElement('pel_m_100375', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100376');
      elementShouldBeEnabled('pel_m_100377');

      clickElement('pel_m_100380', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100381');
      elementShouldBeEnabled('pel_m_100382');

      clickElement('pel_m_100384', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100385');
      elementShouldBeEnabled('pel_m_100386');
    });
  });
});
