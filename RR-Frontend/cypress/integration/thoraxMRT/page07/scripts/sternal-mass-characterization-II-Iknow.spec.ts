import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Sternal Mass -> Characterization II -> I know', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(8);
      cy.byRRID('tho_m_070347').click();

      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('tho_m_070239');
      elementShouldBeEnabled('tho_m_070242');
      elementShouldBeEnabled('tho_m_070244');

      elementShouldBeEnabled('tho_m_070359');
      elementShouldBeEnabled('tho_m_070360');
      elementShouldBeEnabled('tho_m_070361');
      elementShouldBeEnabled('tho_m_070362');
      elementShouldBeEnabled('tho_m_070363');
      elementShouldBeEnabled('tho_m_070366');
      elementShouldBeEnabled('tho_m_070368');
      elementShouldBeEnabled('tho_m_070369');

      elementShouldBeEnabled('tho_m_070440');
      elementShouldBeEnabled('tho_m_070441');
      elementShouldBeEnabled('tho_m_070446');
      elementShouldBeEnabled('tho_m_070447');

      elementShouldBeEnabled('tho_m_070540');
      elementShouldBeEnabled('tho_m_070541');
      elementShouldBeEnabled('tho_m_070542');
      elementShouldBeEnabled('tho_m_070543');
      elementShouldBeEnabled('tho_m_070544');
      elementShouldBeEnabled('tho_m_070546');

      clickElement('tho_m_070363', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070364');
      elementShouldBeEnabled('tho_m_070365');

      clickElement('tho_m_070366', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070367');

      clickElement('tho_m_070441', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070443');
      elementShouldBeEnabled('tho_m_070445');

      clickElement('tho_m_070544', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070545');
    });
  });
});
