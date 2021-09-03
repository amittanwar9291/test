import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectElementByRadioRole,
  selectFindingsDropdownOption
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_040107', 'elb_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Summary', () => {
    it('Summary ', () => {
      clickElement('elb_m_040105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(6);
      selectElementByRadioRole(3, true);
      selectFindingsDropdownOption('elb_m_040255', '.ui-dropdown-label', 16, true, true);
      clickElement('elb_m_0403189', true, 'checkbox');
      cy.byRRID('elb_m_0405178').type('25');
      cy.byRRID('elb_m_040339').click();
      clickElement('elb_m_0402159', true, 'radio');
      clickElement('elb_m_0402166', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('8')
        .click({ force: true });

      elementShouldBeEnabled('elb_m_080104');
      elementShouldBeEnabled('elb_m_080105');
      elementShouldBeEnabled('elb_m_080106');

      elementShouldBeEnabled('elb_m_080202');
      elementShouldBeEnabled('elb_m_080203');
      elementShouldBeEnabled('elb_m_080206');
      elementShouldBeEnabled('elb_m_080213');

      elementShouldBeEnabled('elb_m_080303');
      elementShouldBeEnabled('elb_m_080304');
      elementShouldBeEnabled('elb_m_080305');

      clickElement('elb_m_080206', true, 'checkbox');
      elementShouldBeEnabled('elb_m_080208');
      elementShouldBeEnabled('elb_m_080209');
      elementShouldBeEnabled('elb_m_080210');
      elementShouldBeEnabled('elb_m_080211');
      elementShouldBeEnabled('elb_m_080212');
    });
  });
});
