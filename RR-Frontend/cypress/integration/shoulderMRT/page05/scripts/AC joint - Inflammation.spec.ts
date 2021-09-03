import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Shoulder Page 05 - AC-Joint & Rotator Cuff', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_050111', 'sho_m_050110-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Rotator.url + '/' + pageId);
        });
      });
    });
  });
  describe('AC joint - Degeneration', () => {
    it('AC joint', () => {
      clickElement('sho_m_050109', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('sho_m_050111');
      elementShouldBeEnabled('sho_m_050202');
      elementShouldBeEnabled('sho_m_050204');
      elementShouldBeEnabled('sho_m_050206');

      elementShouldBeEnabled('uni_05_003');
      elementShouldBeEnabled('uni_05_004');
      elementShouldBeEnabled('uni_05_006');
      elementShouldBeEnabled('uni_05_006');

      clickElement('sho_m_050206', true, 'radio');

      elementShouldBeEnabled('sho_m_050208');
    });
  });
});
