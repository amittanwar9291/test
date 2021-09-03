import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_070107', 'elb_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Aneurysm', () => {
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(6);
      elementShouldBeEnabled('elb_m_070106-1');
      elementShouldBeEnabled('elb_m_070107');
      elementShouldBeEnabled('elb_m_070234');
      elementShouldBeEnabled('elb_m_070235');
      elementShouldBeEnabled('elb_m_070236');
      elementShouldBeEnabled('elb_m_0702212');

      cy.byRRID('elb_m_0702212').type('0');
      cy.byRRID('elb_m_0702212').should('be.empty');

      cy.byRRID('elb_m_0702212').type('61');
      cy.byRRID('elb_m_0702212').should('be.empty');

      cy.byRRID('elb_m_0702212').type('1');
      cy.byRRID('elb_m_0702212').should('be.visible');

      cy.byRRID('elb_m_0702212').type('60');
      cy.byRRID('elb_m_0702212').should('be.visible');
    });
  });
});
