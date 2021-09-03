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
  it('Lesion of the triceps tendon rupture', () => {

    // Select Finding button
    clickElement('elb_m_060105',  true,  'radio');
    elementShouldBeEnabled('elb_m_060106-1');

    // Select finding: Lesion of the triceps tendon
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('elb_m_060209');
    elementShouldBeEnabled('elb_m_060210');
    elementShouldBeEnabled('elb_m_060207');

    // Rupture
    clickElement('elb_m_060209', true, 'radio');
    elementShouldBeEnabled('elb_m_060324');
    elementShouldBeEnabled('elb_m_060326');
    elementShouldBeEnabled('elb_m_060338');
    elementShouldBeEnabled('elb_m_060339');

    // Complete tear
    clickElement('elb_m_060326', true, 'radio');
    elementShouldBeEnabled('elb_m_060327');
    elementShouldBeEnabled('elb_m_060328');

    // Retraction
    clickElement('elb_m_060328', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060329');



  });
});
