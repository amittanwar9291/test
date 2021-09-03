import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Trachea', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040278');
    elementShouldBeEnabled('tho_m_040279');
    elementShouldBeEnabled('tho_m_040280');
    elementShouldBeEnabled('tho_m_040281');

    clickElement('tho_m_040278');
    elementShouldBeEnabled('tho_m_040384');
    elementShouldBeEnabled('tho_m_040385');

    clickElement('tho_m_040279');
    elementShouldBeEnabled('tho_m_040388');
    elementShouldBeEnabled('tho_m_040390');
    elementShouldBeEnabled('tho_m_040393');

    clickElement('tho_m_040280');
    elementShouldBeEnabled('tho_m_040396');
    elementShouldBeEnabled('tho_m_040397');

    clickElement('tho_m_040281');
    elementShouldBeEnabled('tho_m_0403100');
    elementShouldBeEnabled('tho_m_0403103');

    selectFindingsDropdownOption('tho_m_0403103', 'span', 4, true);
    elementShouldBeEnabled('tho_m_0403104');
  });
});
