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

  it('Luxation', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040226');
    elementShouldBeEnabled('elb_m_040227');
    elementShouldBeEnabled('elb_m_040228');
    elementShouldBeEnabled('elb_m_040229');
    elementShouldBeEnabled('elb_m_040230');
    elementShouldBeEnabled('elb_m_040205');

    elementShouldBeEnabled('elb_m_040323');
    elementShouldBeEnabled('elb_m_040324');
    elementShouldBeEnabled('elb_m_040325');
    elementShouldBeEnabled('elb_m_040326');
    elementShouldBeEnabled('elb_m_0403186');

    clickElement('elb_m_040326', true, 'radio');
    elementShouldBeEnabled('elb_m_040427');
    elementShouldBeEnabled('elb_m_040428');
    elementShouldBeEnabled('elb_m_040429');
    elementShouldBeEnabled('elb_m_040430');
  });
});
