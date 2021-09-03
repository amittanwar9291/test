import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
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
    it('Soft tissue tumor -> Characterization II -> without CM', () => {
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('elb_m_070239');
      elementShouldBeEnabled('elb_m_070312');
      elementShouldBeEnabled('elb_m_070401');

      cy.byRRID('elb_m_070312').click();
      elementShouldBeEnabled('elb_m_070250');
      elementShouldBeEnabled('elb_m_070251');
      elementShouldBeEnabled('elb_m_070252');
      elementShouldBeEnabled('elb_m_070253');
      elementShouldBeEnabled('elb_m_070254');
      elementShouldBeEnabled('elb_m_070256');
      elementShouldBeEnabled('elb_m_070257');
      elementShouldBeEnabled('elb_m_070258');

      elementShouldBeEnabled('elb_m_0703214');
      elementShouldBeEnabled('elb_m_0703217');
    });
  });
});
