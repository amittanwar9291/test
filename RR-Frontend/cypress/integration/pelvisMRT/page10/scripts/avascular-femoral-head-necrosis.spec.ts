import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
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
    it('Bones -> Avascular femoral head necrosis', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(8);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100362');

      elementShouldBeEnabled('pel_m_100319');
      elementShouldBeEnabled('pel_m_100320');
      elementShouldBeEnabled('pel_m_100352');
      elementShouldBeEnabled('pel_m_100353');

      elementShouldBeEnabled('pel_m_100479');
      elementShouldBeEnabled('pel_m_100481');
      elementShouldBeEnabled('pel_m_100484');
      elementShouldBeEnabled('pel_m_100485');
      elementShouldBeEnabled('pel_m_100486');

      elementShouldBeEnabled('pel_m_100488');
      elementShouldBeEnabled('pel_m_100489');
      elementShouldBeEnabled('pel_m_100490');
      elementShouldBeEnabled('pel_m_100491');

      elementShouldBeEnabled('pel_m_100544');
      elementShouldBeEnabled('pel_m_100550');

      clickElement('pel_m_100544', true, 'checkbox');
      elementShouldBeEnabled('pel_m_100545');
      elementShouldBeEnabled('pel_m_100546');
      elementShouldBeEnabled('pel_m_100547');

      selectFindingsDropdownOption('pel_m_100550', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('pel_m_100557');
    });
  });
});
