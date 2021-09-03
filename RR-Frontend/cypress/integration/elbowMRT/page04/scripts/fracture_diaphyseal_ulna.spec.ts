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

  it('Fracture Diaphyseal Ulna', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040207');
    selectDropdownOptionOS('elb_m_040207', 4, true, true);

    elementShouldBeEnabled('elb_m_0403117');
    elementShouldBeEnabled('elb_m_0403118');
    elementShouldBeEnabled('elb_m_0403119');
    elementShouldBeEnabled('elb_m_0403120');

    clickElement('elb_m_0403117', true, 'radio');
    elementShouldBeEnabled('elb_m_0404123');
    elementShouldBeEnabled('elb_m_0404124');
    elementShouldBeEnabled('elb_m_0404125');
    elementShouldBeEnabled('elb_m_0404127');
    elementShouldBeEnabled('elb_m_0404128');
    elementShouldBeEnabled('elb_m_0404129');

    clickElement('elb_m_0403118', true, 'radio');
    elementShouldBeEnabled('elb_m_0404130');
    elementShouldBeEnabled('elb_m_0404131');
    elementShouldBeEnabled('elb_m_0404133');
    elementShouldBeEnabled('elb_m_0404134');
    elementShouldBeEnabled('elb_m_0404135');

    clickElement('elb_m_0403119', true, 'radio');
    elementShouldBeEnabled('elb_m_0404136');
    elementShouldBeEnabled('elb_m_0404137');
    elementShouldBeEnabled('elb_m_0404139');
    elementShouldBeEnabled('elb_m_0404140');
    elementShouldBeEnabled('elb_m_0404141');

    clickElement('elb_m_0403120', true, 'radio');
    elementShouldBeEnabled('elb_m_0403121');
    elementShouldBeEnabled('elb_m_0403122');
  });
});
