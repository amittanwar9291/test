import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_080107', 'han_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Soft tissue mass -> Differential diagnosis -> I describe', () => {
      clickElement('han_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('han_m_080107');
      elementShouldBeEnabled('han_m_080207');
      elementShouldBeEnabled('han_m_080317');
      elementShouldBeEnabled('han_m_0800401');

      cy.byRRID('han_m_0800401').click();
      elementShouldBeEnabled('han_m_080223');
      elementShouldBeEnabled('han_m_080337');

      selectFindingsDropdownOption('han_m_080223', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('han_m_080224');

      clickElement('han_m_080337', true, 'checkbox');
    });
  });
});
