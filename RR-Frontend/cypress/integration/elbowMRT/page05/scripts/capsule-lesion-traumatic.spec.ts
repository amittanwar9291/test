import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_050107', 'elb_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Cartilage.url + '/' + pageId);
        });
      });
    });
  });

  it('Cartilage Lesion Traumatic', () => {
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('elb_m_050107');
    elementShouldBeEnabled('elb_m_050204');
    elementShouldBeEnabled('elb_m_050205');
    elementShouldBeEnabled('elb_m_050206');
    elementShouldBeEnabled('elb_m_050207');
    elementShouldBeEnabled('elb_m_050208');
    elementShouldBeEnabled('elb_m_050209');
    elementShouldBeEnabled('elb_m_050210');
    elementShouldBeEnabled('elb_m_050211');

    elementShouldBeEnabled('elb_m_050311');
    elementShouldBeEnabled('elb_m_050312');

    clickElement('elb_m_050311', true, 'radio');
    elementShouldBeEnabled('elb_m_050411');
    elementShouldBeEnabled('elb_m_050413');
    elementShouldBeEnabled('elb_m_050414');
    elementShouldBeEnabled('elb_m_050415');
    elementShouldBeEnabled('elb_m_050416');
  });
});
