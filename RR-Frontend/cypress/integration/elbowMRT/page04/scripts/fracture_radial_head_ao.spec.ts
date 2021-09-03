import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Fracture Radial head AO', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040207');
    selectDropdownOptionOS('elb_m_040207', 1, true, true);

    elementShouldBeEnabled('elb_m_040208');
    elementShouldBeEnabled('elb_m_040209');

    clickElement('elb_m_040208', true, 'radio');
    elementShouldBeEnabled('elb_m_040307');
    elementShouldBeEnabled('elb_m_040308');
    elementShouldBeEnabled('elb_m_040309');
    elementShouldBeEnabled('elb_m_040310');

    clickElement('elb_m_040307', true, 'radio');
    elementShouldBeEnabled('elb_m_040402');
    elementShouldBeEnabled('elb_m_040403');
    elementShouldBeEnabled('elb_m_040404');

    clickElement('elb_m_040308', true, 'radio');
    elementShouldBeEnabled('elb_m_040405');
    elementShouldBeEnabled('elb_m_040406');

    clickElement('elb_m_040309', true, 'radio');
    elementShouldBeEnabled('elb_m_040407');
    elementShouldBeEnabled('elb_m_040408');

    clickElement('elb_m_040310', true, 'radio');
    elementShouldBeEnabled('elb_m_040311');
    elementShouldBeEnabled('elb_m_040312');
  });
});
