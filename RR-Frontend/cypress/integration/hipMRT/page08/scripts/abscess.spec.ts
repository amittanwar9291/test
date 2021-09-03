import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_080107', 'hip_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Abscess', () => {
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('hip_m_080107');
      elementShouldBeEnabled('hip_m_080203');
      elementShouldBeEnabled('hip_m_080204');

      elementShouldBeEnabled('hip_m_080338');
      elementShouldBeEnabled('hip_m_080339');
      elementShouldBeEnabled('hip_m_080434');
      elementShouldBeEnabled('hip_m_080513');

      clickElement('hip_m_080339', true, 'checkbox');
      elementShouldBeEnabled('hip_m_080341');
      elementShouldBeEnabled('hip_m_080342');
      elementShouldBeEnabled('hip_m_080343');
      elementShouldBeEnabled('hip_m_080344');

      cy.byRRID('hip_m_080434').type('23');
      elementShouldBeEnabled('hip_m_080437');

      cy.byRRID('hip_m_080437').type('23');
      elementShouldBeEnabled('hip_m_080440');

      selectFindingsDropdownOption('hip_m_080513', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('hip_m_080514');
    });
  });
});
