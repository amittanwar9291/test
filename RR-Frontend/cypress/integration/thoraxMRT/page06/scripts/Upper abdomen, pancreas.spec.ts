import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Page 06 - Thoracic MRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_060106', 'tho_m_060106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Pleura.url + '/' + pageId);
        });
      });
    });
  });
  it('Chest wall, soft tissue mass_Characterization II.spec', () => {
    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('tho_m_060107');

    elementShouldBeEnabled('tho_m_0602115');
    clickElement('tho_m_0602115', true, 'checkbox');

    elementShouldBeEnabled('tho_m_0602117');
    elementShouldBeEnabled('tho_m_0602118');
    elementShouldBeEnabled('tho_m_0602119');
    elementShouldBeEnabled('tho_m_0602120');
    elementShouldBeEnabled('tho_m_0602122');

    elementShouldBeEnabled('tho_m_0602190');
    elementShouldBeEnabled('tho_m_0602125');
    selectFindingsDropdownOption('tho_m_0602125', 'span', 4, true);
    elementShouldBeEnabled('tho_m_0603109');
    elementShouldBeEnabled('tho_m_0603111');

    clickElement('tho_m_0603109', true, 'checkbox');
    elementShouldBeEnabled('tho_m_0603110');
  });
});
