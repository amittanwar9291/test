import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS, selectElementByRadioRole } from '../../../../shared/service';
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

    findingColumn.selectFindingOptionByAppearance(1);
    selectElementByRadioRole(3);

    elementShouldBeEnabled('tho_m_060308');
    elementShouldBeEnabled('tho_m_060215');
    elementShouldBeEnabled('tho_m_060216');
    elementShouldBeEnabled('tho_m_060410');

    elementShouldBeEnabled('tho_m_0603121');
    elementShouldBeEnabled('tho_m_0603122');
    elementShouldBeEnabled('tho_m_060414');

    elementShouldBeEnabled('tho_m_060505');
    elementShouldBeEnabled('tho_m_060506');

    elementShouldBeEnabled('tho_m_060508');
    elementShouldBeEnabled('tho_m_060509');
    elementShouldBeEnabled('tho_m_060510');
    elementShouldBeEnabled('tho_m_060511');
    elementShouldBeEnabled('tho_m_060512');

    elementShouldBeEnabled('tho_m_060514');
    elementShouldBeEnabled('tho_m_060515');

    elementShouldBeEnabled('tho_m_060423');
    elementShouldBeEnabled('tho_m_060424');

    clickElement('tho_m_0603122', true, 'radio');
    elementShouldBeEnabled('tho_m_060310');
    elementShouldBeEnabled('tho_m_060311');
    elementShouldBeEnabled('tho_m_060313');
    elementShouldBeEnabled('tho_m_060314');
    elementShouldBeEnabled('tho_m_060315');
    elementShouldBeEnabled('tho_m_060316');
    elementShouldBeEnabled('tho_m_060317');

    cy.byRRID('tho_m_060414').type('5');
    elementShouldBeEnabled('tho_m_060417');

    cy.byRRID('tho_m_060417').type('5');
    elementShouldBeEnabled('tho_m_060418');

    elementShouldBeEnabled('tho_m_060210');
    selectDropdownOptionOS('tho_m_060210', 3, true, true);

    elementShouldBeEnabled('tho_m_060211');
    clickElement('tho_m_060211', true, 'checkbox');
    elementShouldBeEnabled('tho_m_060212');
    elementShouldBeEnabled('tho_m_060213');

    elementShouldBeEnabled('tho_m_060215');
    elementShouldBeEnabled('tho_m_060216');
  });
});
