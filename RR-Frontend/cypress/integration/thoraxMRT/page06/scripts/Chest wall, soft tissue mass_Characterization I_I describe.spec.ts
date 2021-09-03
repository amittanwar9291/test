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
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Pleura.url + '/' + pageId);
        });
      });
    });
  });
  it('Chest wall, soft tissue mass_Characterization I_I describe', () => {
    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);

    elementShouldBeEnabled('tho_m_060344');
    elementShouldBeEnabled('tho_m_060345');
    elementShouldBeEnabled('tho_m_060346');
    elementShouldBeEnabled('tho_m_060348');
    elementShouldBeEnabled('tho_m_060349');

    elementShouldBeEnabled('tho_m_060438');
    elementShouldBeEnabled('tho_m_060440');
    elementShouldBeEnabled('tho_m_060349');

    elementShouldBeEnabled('tho_m_060525');

    clickElement('tho_m_060348', true, 'radio');
    elementShouldBeEnabled('tho_m_060351');

    clickElement('tho_m_060349', true, 'radio');
    elementShouldBeEnabled('tho_m_060353');

    cy.byRRID('tho_m_060525').type('2');
    elementShouldBeEnabled('tho_m_060417');
    cy.byRRID('tho_m_060417').type('2');
    elementShouldBeEnabled('tho_m_060420');
  });
});
