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

    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('tho_m_060203');
    elementShouldBeEnabled('tho_m_060204');
    clickElement('tho_m_060204', true, 'radio');

    elementShouldBeEnabled('tho_m_060206');

    elementShouldBeEnabled('tho_m_060302');
    elementShouldBeEnabled('tho_m_060303');
    elementShouldBeEnabled('tho_m_060305');
    elementShouldBeEnabled('tho_m_060306');

    elementShouldBeEnabled('tho_m_060402');
    elementShouldBeEnabled('tho_m_060403');
    elementShouldBeEnabled('tho_m_060404');

    clickElement('tho_m_060404', true, 'radio');
    elementShouldBeEnabled('tho_m_060405');
    elementShouldBeEnabled('tho_m_060406');
    clickElement('tho_m_060406', true, 'radio');
    elementShouldBeEnabled('tho_m_060407');
    elementShouldBeEnabled('tho_m_060408');
    clickElement('tho_m_060408', true, 'radio');

    elementShouldBeEnabled('tho_m_060409');
    elementShouldBeEnabled('tho_m_060410');
  });
});
