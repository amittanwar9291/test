import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft Part', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('sho_m_080107', 'sho_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });
  describe('Soft parts', () => {
    it('Sternoclavicular Joint', () => {
      clickElement('sho_m_080105', true, 'radio');
      elementShouldBeEnabled('sho_m_080106-1');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('sho_m_080107');
      elementShouldBeEnabled('sho_m_080225');
      elementShouldBeEnabled('sho_m_080229');
      elementShouldBeEnabled('sho_m_080233');

      clickElement('sho_m_080225', true, 'radio');
      elementShouldBeEnabled('sho_m_080226');
      elementShouldBeEnabled('sho_m_080227');
      elementShouldBeEnabled('sho_m_080228');

      clickElement('sho_m_080229', true, 'radio');
      elementShouldBeEnabled('sho_m_080230');
      elementShouldBeEnabled('sho_m_080231');
      elementShouldBeEnabled('sho_m_080232');

      clickElement('sho_m_080233', true, 'radio');
      elementShouldBeEnabled('sho_m_080234');
      elementShouldBeEnabled('sho_m_080235');
    });
  });
});
