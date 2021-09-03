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

  it('Fracture Diaphyseal Radius', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040207');
    selectDropdownOptionOS('elb_m_040207', 3, true, true);

    elementShouldBeEnabled('elb_m_0403110');
    elementShouldBeEnabled('elb_m_0403111');
    elementShouldBeEnabled('elb_m_0403112');
    elementShouldBeEnabled('elb_m_0403113');

    clickElement('elb_m_0403110', true, 'radio');
    elementShouldBeEnabled('elb_m_0404101');
    elementShouldBeEnabled('elb_m_0404102');
    elementShouldBeEnabled('elb_m_0404103');
    elementShouldBeEnabled('elb_m_0404105');
    elementShouldBeEnabled('elb_m_0404106');
    elementShouldBeEnabled('elb_m_0404107');

    clickElement('elb_m_0403111', true, 'radio');
    elementShouldBeEnabled('elb_m_0404109');
    elementShouldBeEnabled('elb_m_0404110');
    elementShouldBeEnabled('elb_m_0404112');
    elementShouldBeEnabled('elb_m_0404113');
    elementShouldBeEnabled('elb_m_0404114');

    clickElement('elb_m_0403112', true, 'radio');
    elementShouldBeEnabled('elb_m_0404116');
    elementShouldBeEnabled('elb_m_0404117');
    elementShouldBeEnabled('elb_m_0404119');
    elementShouldBeEnabled('elb_m_0404120');
    elementShouldBeEnabled('elb_m_0404121');

    clickElement('elb_m_0403113', true, 'radio');
    elementShouldBeEnabled('elb_m_0403114');
    elementShouldBeEnabled('elb_m_0403115');
  });
});
