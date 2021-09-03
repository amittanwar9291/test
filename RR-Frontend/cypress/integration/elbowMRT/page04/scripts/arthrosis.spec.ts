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

  it('Arthrosis', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(4);

    elementShouldBeEnabled('elb_m_0402102');
    elementShouldBeEnabled('elb_m_0402103');
    elementShouldBeEnabled('elb_m_0402104');
    elementShouldBeEnabled('elb_m_0402105');

    clickElement('elb_m_0402105', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0402107');
    elementShouldBeEnabled('elb_m_0402154');

    clickElement('elb_m_0402154', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0402155');
  });
});
