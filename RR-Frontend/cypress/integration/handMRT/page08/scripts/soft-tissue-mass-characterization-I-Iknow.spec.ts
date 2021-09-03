import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectFindingsDropdownOption
} from '../../../../shared/service';
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
    it('Soft tissue -> Soft tissue mass ->Characterization I -> I know', () => {
      clickElement('han_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('han_m_080107');
      selectElementByRadioRole(3, true);

      elementShouldBeEnabled('han_m_080207');
      elementShouldBeEnabled('han_m_080317');
      elementShouldBeEnabled('han_m_0800401');
      elementShouldBeEnabled('han_m_080209');

      elementShouldBeEnabled('han_m_080319');
      elementShouldBeEnabled('han_m_080320');
      elementShouldBeEnabled('han_m_080321');
      elementShouldBeEnabled('han_m_080322');
      elementShouldBeEnabled('han_m_080324');

      elementShouldBeEnabled('han_m_0800404');

      elementShouldBeEnabled('han_m_0800502');
      elementShouldBeEnabled('han_m_0800503');
      elementShouldBeEnabled('han_m_0800505');
      elementShouldBeEnabled('han_m_0800506');

      elementShouldBeEnabled('han_m_0800508');
      elementShouldBeEnabled('han_m_0800509');
      elementShouldBeEnabled('han_m_0800510');
      elementShouldBeEnabled('han_m_0800511');
      elementShouldBeEnabled('han_m_0800512');
      elementShouldBeEnabled('han_m_0800513');

      selectFindingsDropdownOption('han_m_080209', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('han_m_080210');

      clickElement('han_m_080210', true, 'checkbox');
      elementShouldBeEnabled('han_m_080211');
      elementShouldBeEnabled('han_m_080212');

      cy.byRRID('han_m_0800404').type('24');
      elementShouldBeEnabled('han_m_0800407');

      cy.byRRID('han_m_0800407').type('44');
      elementShouldBeEnabled('han_m_0800410');
    });
  });
});
