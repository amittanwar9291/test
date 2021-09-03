import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  selectElementByRadioRole
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 04 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_040107', 'elb_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Osteolysis Localization I know', () => {
    clickElement('uni_x_030104', true, 'radio');
    NavigationPageObject.visitPageNumber(4);

    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('elb_m_040107');
    selectElementByRadioRole(3);
    cy.get('div[role=radio]')
      .eq(3)
      .should('not.have.css', 'pointer-events', 'none');

    elementShouldBeEnabled('elb_m_0403188');
    elementShouldBeEnabled('elb_m_0403189');
    elementShouldBeEnabled('elb_m_0403190');
    elementShouldBeEnabled('elb_m_0403191');
    elementShouldBeEnabled('elb_m_0403192');

    elementShouldBeEnabled('elb_m_0404184');
    elementShouldBeEnabled('elb_m_0404185');
    elementShouldBeEnabled('elb_m_0404186');

    elementShouldBeEnabled('elb_m_0405178');
    cy.byRRID('elb_m_0405178')
      .click()
      .type('1');
    elementShouldBeEnabled('elb_m_0405181');
    cy.byRRID('elb_m_0405181')
      .click()
      .type('2');
    elementShouldBeEnabled('elb_m_0405184');
    cy.byRRID('elb_m_0405184')
      .click()
      .type('3');

    elementShouldBeEnabled('elb_m_040255');
    selectDropdownOptionOS('elb_m_040255', 2, true, true);
    elementShouldBeEnabled('elb_m_0402129');
    clickElement('elb_m_0402129');
    elementShouldBeEnabled('elb_m_0402130');
    elementShouldBeEnabled('elb_m_0402131');
  });
});
