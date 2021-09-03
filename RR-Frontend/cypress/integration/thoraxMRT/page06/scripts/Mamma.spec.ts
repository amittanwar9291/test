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
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  it('Chest wall, soft tissue mass_Characterization II.spec', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('tho_m_060287');
    elementShouldBeEnabled('tho_m_060291');
    elementShouldBeEnabled('tho_m_060295');

    clickElement('tho_m_060287', true, 'radio');
    elementShouldBeEnabled('tho_m_060289');
    elementShouldBeEnabled('tho_m_060290');

    clickElement('tho_m_060291', true, 'radio');
    elementShouldBeEnabled('tho_m_060293');
    elementShouldBeEnabled('tho_m_060294');

    clickElement('tho_m_060295', true, 'radio');
    elementShouldBeEnabled('tho_m_060297');
    elementShouldBeEnabled('tho_m_060298');

    elementShouldBeEnabled('tho_m_060375');
    clickElement('tho_m_060375', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060377');
    elementShouldBeEnabled('tho_m_060379');
    clickElement('tho_m_060379', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060381');
    elementShouldBeEnabled('tho_m_060382');

    clickElement('tho_m_060458', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060460');
    elementShouldBeEnabled('tho_m_060462');
    elementShouldBeEnabled('tho_m_060465');
    elementShouldBeEnabled('tho_m_060466');

    elementShouldBeEnabled('tho_m_060542');
    clickElement('tho_m_060542', true, 'checkbox');

    elementShouldBeEnabled('tho_m_060543');
    elementShouldBeEnabled('tho_m_060545');
    elementShouldBeEnabled('tho_m_060546');
    elementShouldBeEnabled('tho_m_060547');
    elementShouldBeEnabled('tho_m_060549');
    selectFindingsDropdownOption('tho_m_060549', 'span', 3, true);
    elementShouldBeEnabled('tho_m_060550');
  });
});
