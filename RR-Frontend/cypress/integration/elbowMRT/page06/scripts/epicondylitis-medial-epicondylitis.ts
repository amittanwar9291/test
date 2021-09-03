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

  // @ts-ignore
  it('Epicondylitis medial', () => {

    // Select Finding
    clickElement('elb_m_060105',  true,  'radio');
    elementShouldBeEnabled('elb_m_060106-1');

    // Select finding: Epicondylitis
    findingColumn.selectFindingOptionByAppearance(0);

    // Medial epicondylitis
    clickElement('elb_m_060205', true, 'radio');
    elementShouldBeEnabled('elb_m_0603103');
    elementShouldBeEnabled('elb_m_0603104');
    elementShouldBeEnabled('elb_m_060312');

    // Thinkening and Rupture MCL
    elementShouldBeEnabled('elb_m_060409');
    elementShouldBeEnabled('elb_m_060410');

    // Enthesiopathy of flexor/pronator tendons
    clickElement('elb_m_060312', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060313');
    elementShouldBeEnabled('elb_m_060314');
    elementShouldBeEnabled('elb_m_060315');
    elementShouldBeEnabled('elb_m_060316');

    // Tendon tear
    clickElement('elb_m_0604100', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0604101');
    elementShouldBeEnabled('elb_m_0604102');
    elementShouldBeEnabled('elb_m_0604105');
    elementShouldBeEnabled('elb_m_0604106');

    // Complete tear
    clickElement('elb_m_0604102', true, 'radio');
    elementShouldBeEnabled('elb_m_0604103');
  });
});
