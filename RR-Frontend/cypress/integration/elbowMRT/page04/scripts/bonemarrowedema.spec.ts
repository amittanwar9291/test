import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';

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
          cy.visit(elbowMRTRoutes.ElbowMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Bone marrow edema', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040213');
    elementShouldBeEnabled('elb_m_040214');
    elementShouldBeEnabled('elb_m_040215');
    elementShouldBeEnabled('elb_m_040216');
    elementShouldBeEnabled('elb_m_0402152');

    elementShouldBeEnabled('elb_m_040218');
    elementShouldBeEnabled('elb_m_040219');
    elementShouldBeEnabled('elb_m_040220');

    elementShouldBeEnabled('elb_m_0403177');
    elementShouldBeEnabled('elb_m_0403178');
    elementShouldBeEnabled('elb_m_0403180');

    clickElement('elb_m_040214', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0403179');

    clickElement('elb_m_0403180', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0403181');
    elementShouldBeEnabled('elb_m_0403182');
  });
});
