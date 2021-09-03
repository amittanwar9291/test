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

  it('Plica Syndrome', () => {
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('elb_m_050107');
    elementShouldBeEnabled('elb_m_050218');
    elementShouldBeEnabled('elb_m_050219');
    elementShouldBeEnabled('elb_m_050220');

    clickElement('elb_m_050219', true, 'radio');
    elementShouldBeEnabled('elb_m_050338');
    elementShouldBeEnabled('elb_m_050343');
    elementShouldBeEnabled('elb_m_050344');
    elementShouldBeEnabled('elb_m_050345');
    elementShouldBeEnabled('elb_m_050424');
    elementShouldBeEnabled('elb_m_050427');
    elementShouldBeEnabled('elb_m_050426');

    clickElement('elb_m_050338', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050339');
    elementShouldBeEnabled('elb_m_050341');

    clickElement('elb_m_050339', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050340');
  });
});
