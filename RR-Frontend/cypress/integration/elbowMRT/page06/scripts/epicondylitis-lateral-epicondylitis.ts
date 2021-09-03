import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import {elementShouldBeEnabled, getAppConfig} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 06 - Tendons & Muscles - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_060107', 'elb_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_TendonsAndMuscles.url + '/' + pageId);
        });
      });
    });
  });

  it('Epicondylitis lateral', () => {

    // Select Finding
    clickElement('elb_m_060105',  true,  'radio');
    elementShouldBeEnabled('elb_m_060106-1');

    // Select finding: Epicondylitis
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('elb_m_060203');
    elementShouldBeEnabled('elb_m_060205');

    // Checkboxes enabled
    elementShouldBeEnabled('elb_m_060502');
    elementShouldBeEnabled('elb_m_060503');
    elementShouldBeEnabled('elb_m_060504');
    elementShouldBeEnabled('elb_m_060505');
    elementShouldBeEnabled('elb_m_060506');
    elementShouldBeEnabled('elb_m_060507');
    elementShouldBeEnabled('elb_m_060508');
    elementShouldBeEnabled('elb_m_060509');

    // Select Lateral Spondylitis
    clickElement('elb_m_060203', true, 'radio');
    elementShouldBeEnabled('elb_m_0603100');
    elementShouldBeEnabled('elb_m_060302');
    elementShouldBeEnabled('elb_m_060306');

    // Thinkening and Rupture LUCL
    elementShouldBeEnabled('elb_m_060402');
    elementShouldBeEnabled('elb_m_060403');

    // Thinkening and Rupture RCL
    elementShouldBeEnabled('elb_m_060405');
    elementShouldBeEnabled('elb_m_060406');

    // Enthesiopathy deep extensor tendons
    clickElement('elb_m_060302', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060303');
    elementShouldBeEnabled('elb_m_060304');
    elementShouldBeEnabled('elb_m_060305');

    // Rupture of deep extensor tendons
    clickElement('elb_m_060306', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060307');
    elementShouldBeEnabled('elb_m_060308');
    elementShouldBeEnabled('elb_m_060310');

    // Complete tear
    clickElement('elb_m_060308');
    elementShouldBeEnabled('elb_m_060309');
  });
});
