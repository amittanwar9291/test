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
    it('Soft tissue -> Articular Effusion', () => {
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('elb_m_070106-1');
      elementShouldBeEnabled('elb_m_070107');
      elementShouldBeEnabled('elb_m_070203');
      elementShouldBeEnabled('elb_m_070204');
      elementShouldBeEnabled('elb_m_070205');
      elementShouldBeEnabled('elb_m_070206');
      elementShouldBeEnabled('elb_m_070207');

      elementShouldBeEnabled('elb_m_0703218');
      clickElement('elb_m_0703218', true, 'checkbox');

      elementShouldBeEnabled('elb_m_0703220');
      elementShouldBeEnabled('elb_m_0703223');
      elementShouldBeEnabled('elb_m_0703224');
      elementShouldBeEnabled('elb_m_0703226');
      elementShouldBeEnabled('elb_m_0703227');
      elementShouldBeEnabled('elb_m_0703228');

      cy.byRRID('elb_m_0703220').type('100');
      cy.byRRID('elb_m_0703220').should('be.empty');

      cy.byRRID('elb_m_0703220').type('0');
      cy.byRRID('elb_m_0703220').should('be.empty');

      cy.byRRID('elb_m_0703220').type('1');
      cy.byRRID('elb_m_0703220').should('be.visible');

      cy.byRRID('elb_m_0703220').type('99');
      cy.byRRID('elb_m_0703220').should('be.visible');
    });
  });
});
