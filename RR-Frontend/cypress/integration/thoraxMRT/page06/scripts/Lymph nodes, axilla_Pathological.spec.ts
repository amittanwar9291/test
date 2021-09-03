import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

    findingColumn.selectFindingOptionByAppearance(5);

    elementShouldBeEnabled('tho_m_0602100');
    elementShouldBeEnabled('tho_m_0602101');

    clickElement('tho_m_0602101', true, 'radio');
    elementShouldBeEnabled('tho_m_060393');

    clickElement('tho_m_060393', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060395');
    elementShouldBeEnabled('tho_m_060397');
    elementShouldBeEnabled('tho_m_060399');
    elementShouldBeEnabled('tho_m_0603100');

    elementShouldBeEnabled('tho_m_060468');
    clickElement('tho_m_060468', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060470');
    elementShouldBeEnabled('tho_m_060473');
    elementShouldBeEnabled('tho_m_060474');
    elementShouldBeEnabled('tho_m_060475');

    elementShouldBeEnabled('tho_m_060553');
    elementShouldBeEnabled('tho_m_060554');

    clickElement('tho_m_060554', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060556');
    elementShouldBeEnabled('tho_m_060557');
    elementShouldBeEnabled('tho_m_060558');

    elementShouldBeEnabled('tho_m_060560');
    elementShouldBeEnabled('tho_m_060561');
    elementShouldBeEnabled('tho_m_060562');
    elementShouldBeEnabled('tho_m_060563');

    cy.get('rr-top-navigation')
      .contains('3')
      .click({ force: true });

    cy.get('.overlay').click();
    clickElement('uni_x_030109', true, 'radio');

    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    elementShouldBeEnabled('tho_m_060552');
    elementShouldBeEnabled('tho_m_060553');
  });
});
