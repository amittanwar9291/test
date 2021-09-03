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
  it('Chest wall, soft tissue mass_Characterization III.spec', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    clickElement('tho_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);
    cy.byRRID('tho_m_060437').click();

    elementShouldBeEnabled('tho_m_060267');
    elementShouldBeEnabled('tho_m_060268');
    elementShouldBeEnabled('tho_m_060269');
    clickElement('tho_m_060269', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060270');
    elementShouldBeEnabled('tho_m_060271');
    elementShouldBeEnabled('tho_m_060272');
    elementShouldBeEnabled('tho_m_060273');
    elementShouldBeEnabled('tho_m_060274');
    elementShouldBeEnabled('tho_m_060275');

    elementShouldBeEnabled('tho_m_060363');
    elementShouldBeEnabled('tho_m_060364');
    elementShouldBeEnabled('tho_m_060365');
    clickElement('tho_m_060364', true, 'radio');
    elementShouldBeEnabled('tho_m_060366');
    elementShouldBeEnabled('tho_c_070367');

    elementShouldBeEnabled('tho_m_060369');
    elementShouldBeEnabled('tho_m_060370');
    elementShouldBeEnabled('tho_m_060371');
    elementShouldBeEnabled('tho_m_060372');
    elementShouldBeEnabled('tho_m_060373');

    elementShouldBeEnabled('tho_m_060454');
    elementShouldBeEnabled('tho_m_060455');
    elementShouldBeEnabled('tho_m_060456');
    elementShouldBeEnabled('tho_m_060457');
  });
});
