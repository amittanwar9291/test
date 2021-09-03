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
    it('Soft tissue tumor -> Characterization I -> I describe', () => {
      clickElement('elb_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('elb_m_070239');
      elementShouldBeEnabled('elb_m_070312');
      elementShouldBeEnabled('elb_m_070401');

      cy.byRRID('elb_m_070239').click();
      elementShouldBeEnabled('elb_m_070242');
      elementShouldBeEnabled('elb_m_070243');
      elementShouldBeEnabled('elb_m_070244');
      elementShouldBeEnabled('elb_m_070245');
      elementShouldBeEnabled('elb_m_070247');
      elementShouldBeEnabled('elb_m_070248');

      elementShouldBeEnabled('elb_m_070316');
      elementShouldBeEnabled('elb_m_070403');
      elementShouldBeEnabled('elb_m_070404');
      elementShouldBeEnabled('elb_m_070406');
      elementShouldBeEnabled('elb_m_070407');

      elementShouldBeEnabled('elb_m_070502');
      elementShouldBeEnabled('elb_m_070503');
      elementShouldBeEnabled('elb_m_070504');
      elementShouldBeEnabled('elb_m_070505');
      elementShouldBeEnabled('elb_m_070506');
      elementShouldBeEnabled('elb_m_070507');
      elementShouldBeEnabled('elb_m_070508');
      elementShouldBeEnabled('elb_m_070509');
      elementShouldBeEnabled('elb_m_070510');

      cy.byRRID('elb_m_070316').type('12');
      elementShouldBeEnabled('elb_m_070318');

      cy.byRRID('elb_m_070318').type('15');
      elementShouldBeEnabled('elb_m_070320');
    });
  });
});
