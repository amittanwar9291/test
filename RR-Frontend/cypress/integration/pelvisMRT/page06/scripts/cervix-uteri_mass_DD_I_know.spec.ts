import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole,
  visitPageNumber
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Cervix uteri mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109', true, 'radio');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);

    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('.ui-state-active').should('have.attr', 'aria-checked', 'true');
    selectElementByRadioRole(3);

    elementShouldBeEnabled('pel_m_0602143');
    selectDropdownOptionOS('pel_m_0602143', 6, true, true);
    clickElement('pel_m_060401');

    elementShouldBeEnabled('pel_m_0603175');
    elementShouldBeEnabled('pel_m_0603176');
    elementShouldBeEnabled('pel_m_0603177');
    elementShouldBeEnabled('pel_m_0603178');

    clickElement('pel_m_0603175', true, 'radio');
    elementShouldBeEnabled('pel_m_0603179');

    clickElement('pel_m_0603179', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603467');

    selectDropdownOptionOS('pel_m_0603467', 2, true, true);
    cy.byRRID('pel_m_0603467').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0603176', true, 'radio');
    elementShouldBeEnabled('pel_m_0603469');

    clickElement('pel_m_0603177', true, 'radio');
    elementShouldBeEnabled('pel_m_0603472');

    selectDropdownOptionOS('pel_m_0603472', 2, true, true);
    cy.byRRID('pel_m_0603472').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0603178', true, 'radio');
    elementShouldBeEnabled('pel_m_060363');

    clickElement('pel_m_060202');

    // select Lymphoma from Diff Diagnosis 1 dropdown
    selectDropdownOptionOS('pel_m_0602143', 5, true, true);
    cy.byRRID('pel_m_0602143').should('have.class', 'ui-inputwrapper-filled');

    // go back to diff diagnose tab
    clickElement('pel_m_060401');

    // select Cervical carcinoma from Diff Diagnosis 2 dropdown
    selectDropdownOptionOS('pel_m_0602152', 6, true, true);

    elementShouldBeEnabled('pel_m_0604163');
    elementShouldBeEnabled('pel_m_0604164');
    elementShouldBeEnabled('pel_m_0604165');
    elementShouldBeEnabled('pel_m_0604166');

    clickElement('pel_m_0604163', true, 'radio');
    elementShouldBeEnabled('pel_m_0604167');

    clickElement('pel_m_0604167', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0604468');

    selectDropdownOptionOS('pel_m_0604468', 2, true, true);
    cy.byRRID('pel_m_0604468').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0604164', true, 'radio');
    elementShouldBeEnabled('pel_m_0604470');

    selectDropdownOptionOS('pel_m_0604470', 1, true, true);
    cy.byRRID('pel_m_0604470').should('have.class', 'ui-inputwrapper-filled');

    elementShouldBeEnabled('pel_m_0604471');
    selectDropdownOptionOS('pel_m_0604471', 1, true, true);
    cy.byRRID('pel_m_0604471').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0604165', true, 'radio');
    elementShouldBeEnabled('pel_m_0604473');

    selectDropdownOptionOS('pel_m_0604473', 2, true, true);
    cy.byRRID('pel_m_0604473').should('have.class', 'ui-inputwrapper-filled');

    clickElement('pel_m_0604166', true, 'radio');
    elementShouldBeEnabled('pel_m_0604500');
  });
});
