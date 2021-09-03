import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_060106', 'hip_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Synovia, mass_Charackterization II_I describe', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('hip_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('hip_m_060107');

    clickElement('hip_m_060308');

    elementShouldBeEnabled('hip_m_060222');
    elementShouldBeEnabled('hip_m_060223');
    elementShouldBeEnabled('hip_m_060224');

    clickElement('hip_m_060224', true, 'checkbox');
    elementShouldBeEnabled('hip_m_060225');
    elementShouldBeEnabled('hip_m_060227');
    elementShouldBeEnabled('hip_m_060231');
    elementShouldBeEnabled('hip_m_060230');
    elementShouldBeEnabled('hip_m_060229');

    elementShouldBeEnabled('hip_m_060326');
    elementShouldBeEnabled('hip_m_060327');
    elementShouldBeEnabled('hip_m_060328');

    elementShouldBeEnabled('hip_m_060419');

    elementShouldBeEnabled('hip_m_060424');

    clickElement('hip_m_060328', true, 'radio');

    elementShouldBeEnabled('hip_m_060329');
    elementShouldBeEnabled('hip_m_060330');
    elementShouldBeEnabled('hip_m_060332');
    elementShouldBeEnabled('hip_m_060333');
    elementShouldBeEnabled('hip_m_060334');
    elementShouldBeEnabled('hip_m_060335');
    elementShouldBeEnabled('hip_m_060336');
    selectFindingsDropdownOption('hip_m_060419', '.ui-dropdown', 1, true);
    elementShouldBeEnabled('hip_m_060420');

    selectFindingsDropdownOption('hip_m_060422', '.ui-dropdown', 1, true);
    elementShouldBeEnabled('hip_m_060423');
  });
});
