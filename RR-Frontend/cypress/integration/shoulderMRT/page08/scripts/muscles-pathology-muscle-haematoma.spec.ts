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
    it('Mucles Pathology -> Muscles haermatoma', () => {
      clickElement('sho_m_080105', true, 'radio');
      elementShouldBeEnabled('sho_m_080106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('sho_m_080107');
      elementShouldBeEnabled('sho_m_080303-1');
      selectDropdownMenuOption('sho_m_080303-1', '.ui-dropdown-label', 0, true, true);
      elementShouldBeEnabled('sho_m_080305');
      elementShouldBeEnabled('sho_m_080402');
      elementShouldBeEnabled('sho_m_080403');
      elementShouldBeEnabled('sho_m_080404');

      elementShouldBeEnabled('sho_m_080406');
      elementShouldBeEnabled('sho_m_080408');

      elementShouldBeEnabled('sho_m_080503');
      elementShouldBeEnabled('sho_m_080504');
      elementShouldBeEnabled('sho_m_080505');
      elementShouldBeEnabled('sho_m_080506');
    });
  });
});
