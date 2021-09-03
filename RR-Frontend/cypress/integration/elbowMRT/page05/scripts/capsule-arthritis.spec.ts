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
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

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
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  // @ts-ignore
  it('Capsule Arthritis', () => {
    // Page 3 select Ja in KM
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');

    // Open Page 5
    NavigationPageObject.visitPageNumber(5);

    // Select Capsule
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('elb_m_050107');
    elementShouldBeEnabled('elb_m_050218');
    elementShouldBeEnabled('elb_m_050219');
    elementShouldBeEnabled('elb_m_050220');

    // Select Arthritis
    clickElement('elb_m_050220', true, 'radio');
    elementShouldBeEnabled('elb_m_050351');
    elementShouldBeEnabled('elb_m_050352');
    elementShouldBeEnabled('elb_m_050353');
    elementShouldBeEnabled('elb_m_050353');
    elementShouldBeEnabled('elb_m_050354');
    elementShouldBeEnabled('elb_m_050355');
  });
});
