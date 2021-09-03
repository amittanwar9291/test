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

    findingColumn.selectFindingOptionByAppearance(2);

    elementShouldBeEnabled('tho_m_060236');
    elementShouldBeEnabled('tho_m_060237');

    elementShouldBeEnabled('tho_m_060239');
    elementShouldBeEnabled('tho_m_060240');
    elementShouldBeEnabled('tho_m_060241');

    elementShouldBeEnabled('tho_m_060243');
    elementShouldBeEnabled('tho_m_060244');
    elementShouldBeEnabled('tho_m_060245');
    elementShouldBeEnabled('tho_m_060247');

    elementShouldBeEnabled('tho_m_060332');
    clickElement('tho_m_060332', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060334');
    elementShouldBeEnabled('tho_m_060335');
    elementShouldBeEnabled('tho_m_060337');
    elementShouldBeEnabled('tho_m_060338');
    elementShouldBeEnabled('tho_m_060339');
  });
});
