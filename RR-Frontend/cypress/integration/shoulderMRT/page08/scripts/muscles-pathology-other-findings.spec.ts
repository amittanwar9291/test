import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownMenuOption } from '../../../../shared/service';
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
    it('Muscles Pathology -> Other findings', () => {
      clickElement('sho_m_080105', true, 'radio');
      elementShouldBeEnabled('sho_m_080106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('sho_m_080107');
      elementShouldBeEnabled('sho_m_080303-1');
      selectDropdownMenuOption('sho_m_080303-1', '.ui-dropdown-label', 2, true, true);
      elementShouldBeEnabled('sho_m_080416');
      elementShouldBeEnabled('sho_m_080417');
      elementShouldBeEnabled('sho_m_080418');
      elementShouldBeEnabled('sho_m_080421');
      elementShouldBeEnabled('sho_m_080422');

      clickElement('sho_m_080418', true, 'checkbox');
      elementShouldBeEnabled('sho_m_080419');
      elementShouldBeEnabled('sho_m_080420');

      clickElement('sho_m_080422', true, 'checkbox');
      elementShouldBeEnabled('sho_m_080423');
    });
  });
});
