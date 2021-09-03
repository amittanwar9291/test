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

    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('tho_m_060107');

    elementShouldBeEnabled('tho_m_0602129');
    elementShouldBeEnabled('tho_m_060476');

    clickElement('tho_m_0602129', true, 'checkbox');
    elementShouldBeEnabled('tho_m_0602131');

    clickElement('tho_m_0602131', true, 'checkbox');
    elementShouldBeEnabled('tho_m_0602133');
    elementShouldBeEnabled('tho_m_0602134');

    elementShouldBeEnabled('tho_m_0602136');
    elementShouldBeEnabled('tho_m_0602139');
    selectFindingsDropdownOption('tho_m_0602139', 'span', 4, true);
    elementShouldBeEnabled('tho_m_0602140');
    elementShouldBeEnabled('tho_m_0602172');

    clickElement('tho_m_0603112', true, 'checkbox');
    elementShouldBeEnabled('tho_m_0603114');
    elementShouldBeEnabled('tho_m_0603115');
    elementShouldBeEnabled('tho_m_0603117');
    elementShouldBeEnabled('tho_m_0603118');
    elementShouldBeEnabled('tho_m_0603119');
    elementShouldBeEnabled('tho_m_0603120');

    clickElement('tho_m_060476', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060478');
    elementShouldBeEnabled('tho_m_060479');
    elementShouldBeEnabled('tho_m_060481');
    elementShouldBeEnabled('tho_m_060484');
    selectFindingsDropdownOption('tho_m_060484', 'span', 4, true);
    elementShouldBeEnabled('tho_m_060485');
  });
});
