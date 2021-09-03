import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { hipMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole, visitPageNumber } from '../../../../shared/service';
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
          cy.visit(hipMRTRoutes.HipMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Soft Tissue Mass -> Characterization -> II know', () => {
      clickElement('uni_x_030104', true, 'radio');
      visitPageNumber(8);
      clickElement('hip_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      selectElementByRadioRole(3, true);
      cy.byRRID('hip_m_080345').click();
      elementShouldBeEnabled('hip_m_080220');
      elementShouldBeEnabled('hip_m_080221');
      elementShouldBeEnabled('hip_m_080222');
      elementShouldBeEnabled('hip_m_080223');
      elementShouldBeEnabled('hip_m_080224');
      elementShouldBeEnabled('hip_m_080225');
      elementShouldBeEnabled('hip_m_080226');

      elementShouldBeEnabled('hip_m_080352');
      elementShouldBeEnabled('hip_m_080353');
      elementShouldBeEnabled('hip_m_080355');
      elementShouldBeEnabled('hip_m_080356');

      elementShouldBeEnabled('hip_m_080454');
      elementShouldBeEnabled('hip_m_080457');

      elementShouldBeEnabled('hip_m_080522');
      elementShouldBeEnabled('hip_m_080523');
      elementShouldBeEnabled('hip_m_080524');

      clickElement('hip_m_080353', true, 'checkbox');
      elementShouldBeEnabled('hip_m_080362');
      elementShouldBeEnabled('hip_m_080363');
      elementShouldBeEnabled('hip_m_080364');
      elementShouldBeEnabled('hip_m_080365');
      elementShouldBeEnabled('hip_m_080366');
      elementShouldBeEnabled('hip_m_080367');

      clickElement('hip_m_080524', true, 'radio');
      elementShouldBeEnabled('hip_m_080525');
      elementShouldBeEnabled('hip_m_080526');
      elementShouldBeEnabled('hip_m_080528');
      elementShouldBeEnabled('hip_m_080529');
      elementShouldBeEnabled('hip_m_080530');
      elementShouldBeEnabled('hip_m_080531');
      elementShouldBeEnabled('hip_m_080532');
    });
  });
});
