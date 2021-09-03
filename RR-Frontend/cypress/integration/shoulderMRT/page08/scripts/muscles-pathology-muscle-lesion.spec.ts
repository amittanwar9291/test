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
    it('Muscles Pathology -> Muscle Lesion', () => {
      clickElement('sho_m_080105', true, 'radio');
      elementShouldBeEnabled('sho_m_080106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('sho_m_080107');
      elementShouldBeEnabled('sho_m_080303-1');
      selectDropdownMenuOption('sho_m_080303-1', '.ui-dropdown-label', 1, true, true);
      elementShouldBeEnabled('sho_m_080411');
      elementShouldBeEnabled('sho_m_080412');
      elementShouldBeEnabled('sho_m_080413');
      elementShouldBeEnabled('sho_m_080414');

      clickElement('sho_m_080412', true, 'radio');
      elementShouldBeEnabled('sho_m_080507');

      clickElement('sho_m_080413', true, 'radio');
      elementShouldBeEnabled('sho_m_080508');

      clickElement('sho_m_080414', true, 'radio');
      elementShouldBeEnabled('sho_m_080509');
      elementShouldBeEnabled('sho_m_080511');
      elementShouldBeEnabled('sho_m_080512');
    });
  });
});
