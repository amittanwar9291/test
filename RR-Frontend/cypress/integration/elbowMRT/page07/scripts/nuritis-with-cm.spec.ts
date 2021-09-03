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
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Neuritis with CM', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('elb_m_070106-1');
      elementShouldBeEnabled('elb_m_070107');
      elementShouldBeEnabled('elb_m_070224');
      elementShouldBeEnabled('elb_m_070225');
      elementShouldBeEnabled('elb_m_070226');

      elementShouldBeEnabled('elb_m_070313');
      elementShouldBeEnabled('elb_m_070311');
      elementShouldBeEnabled('elb_m_070307');
      elementShouldBeEnabled('elb_m_070308');

      clickElement('elb_m_070224', true, 'radio');
      elementShouldBeEnabled('elb_m_070227');
      elementShouldBeEnabled('elb_m_070228');
      elementShouldBeEnabled('elb_m_070229');

      clickElement('elb_m_070225', true, 'radio');
      elementShouldBeEnabled('elb_m_070230');

      clickElement('elb_m_070226', true, 'radio');
      elementShouldBeEnabled('elb_m_070231');
      elementShouldBeEnabled('elb_m_070232');

      clickElement('elb_m_070308', true, 'checkbox');
      elementShouldBeEnabled('elb_m_070309');
      elementShouldBeEnabled('elb_m_070310');
      elementShouldBeEnabled('elb_m_0703210');
      elementShouldBeEnabled('elb_m_0703211');
    });
  });
});
