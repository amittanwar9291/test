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

  it('Fracture Proximal Ulna', () => {
    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_040207');
    selectDropdownOptionOS('elb_m_040207', 2, true, true);

    elementShouldBeEnabled('elb_m_0403103');
    elementShouldBeEnabled('elb_m_0403104');
    elementShouldBeEnabled('elb_m_0403105');
    elementShouldBeEnabled('elb_m_0403106');

    clickElement('elb_m_0403103', true, 'radio');
    elementShouldBeEnabled('elb_m_040409');
    elementShouldBeEnabled('elb_m_040410');
    elementShouldBeEnabled('elb_m_040411');

    clickElement('elb_m_0403104', true, 'radio');
    elementShouldBeEnabled('elb_m_040412');
    elementShouldBeEnabled('elb_m_040413');

    clickElement('elb_m_040412', true, 'radio');
    elementShouldBeEnabled('elb_m_040501');
    elementShouldBeEnabled('elb_m_040502');

    clickElement('elb_m_040413', true, 'radio');
    elementShouldBeEnabled('elb_m_040503');
    elementShouldBeEnabled('elb_m_040504');
    elementShouldBeEnabled('elb_m_040505');
    elementShouldBeEnabled('elb_m_040506');

    clickElement('elb_m_0403105', true, 'radio');
    elementShouldBeEnabled('elb_m_040414');

    clickElement('elb_m_040414', true, 'radio');
    elementShouldBeEnabled('elb_m_040415');
    elementShouldBeEnabled('elb_m_040416');
    elementShouldBeEnabled('elb_m_040417');

    clickElement('elb_m_0403106', true, 'radio');
    elementShouldBeEnabled('elb_m_0403107');
    elementShouldBeEnabled('elb_m_0403108');
  });
});
