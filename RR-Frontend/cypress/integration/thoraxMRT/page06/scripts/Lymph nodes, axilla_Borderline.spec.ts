import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

    clickElement('tho_m_0602100', true, 'radio');
    elementShouldBeEnabled('tho_m_060384');
    elementShouldBeEnabled('tho_m_060388');
    clickElement('tho_m_060384', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060386');
    clickElement('tho_m_060388', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060390');
  });
});
