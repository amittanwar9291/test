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
    it('Soft tissue -> Abscess', () => {
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('elb_m_070106-1');
      elementShouldBeEnabled('elb_m_070107');

      elementShouldBeEnabled('elb_m_070242');
      elementShouldBeEnabled('elb_m_070243');
      elementShouldBeEnabled('elb_m_070244');
      elementShouldBeEnabled('elb_m_070245');
      elementShouldBeEnabled('elb_m_070247');
      elementShouldBeEnabled('elb_m_070248');
      elementShouldBeEnabled('elb_m_070237');

      cy.byRRID('elb_m_070237').type('151');
      cy.byRRID('elb_m_070237').should('be.empty');

      cy.byRRID('elb_m_070237').type('0');
      cy.byRRID('elb_m_070237').should('be.empty');

      cy.byRRID('elb_m_070237').type('1');
      cy.byRRID('elb_m_070237').should('be.visible');

      cy.byRRID('elb_m_070237').type('150');
      cy.byRRID('elb_m_070237').should('be.visible');
    });
  });
});
