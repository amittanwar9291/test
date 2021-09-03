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
  it('Chest wall, soft tissue mass_Characterization II', () => {
    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);
    cy.byRRID('tho_m_060341').click();

    elementShouldBeEnabled('tho_m_060256');
    elementShouldBeEnabled('tho_m_060257');

    elementShouldBeEnabled('tho_m_060259');
    elementShouldBeEnabled('tho_m_060260');

    elementShouldBeEnabled('tho_m_060262');
    elementShouldBeEnabled('tho_m_060263');
    elementShouldBeEnabled('tho_m_060264');
    elementShouldBeEnabled('tho_m_060265');

    elementShouldBeEnabled('tho_m_060356');
    elementShouldBeEnabled('tho_m_060359');

    elementShouldBeEnabled('tho_m_060443');

    clickElement('tho_m_060443', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060444');
    elementShouldBeEnabled('tho_m_060445');

    clickElement('tho_m_060446', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060447');
    elementShouldBeEnabled('tho_m_060448');

    clickElement('tho_m_060449', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060450');
    elementShouldBeEnabled('tho_m_060451');
    elementShouldBeEnabled('tho_m_060452');

    elementShouldBeEnabled('tho_m_060533');
    clickElement('tho_m_060533', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060534');
    elementShouldBeEnabled('tho_m_060535');
    elementShouldBeEnabled('tho_m_060536');
    elementShouldBeEnabled('tho_m_060537');
    elementShouldBeEnabled('tho_m_060538');
    elementShouldBeEnabled('tho_m_060539');
    elementShouldBeEnabled('tho_m_060540');
  });
});
