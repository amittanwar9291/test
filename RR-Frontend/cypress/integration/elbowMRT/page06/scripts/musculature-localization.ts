import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import {
  elementShouldBeEnabled,
  getAppConfig
} from '../../../../shared/service';
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

  it('Musculature localization', () => {

    // Select Finding button
    clickElement('elb_m_060105',  true,  'radio');
    elementShouldBeEnabled('elb_m_060106-1');

    // Select finding: Musculature
    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('elb_m_060107');
    elementShouldBeEnabled('elb_m_060214'); // tab is preselected check - not implemented
    elementShouldBeEnabled('elb_m_060341');

    // Localization, by compartments
    elementShouldBeEnabled('elb_m_060216');
    elementShouldBeEnabled('elb_m_060219');
    elementShouldBeEnabled('elb_m_060220');
    elementShouldBeEnabled('elb_m_060221');
    elementShouldBeEnabled('elb_m_060222');

    // Fatty infiltration and others
    elementShouldBeEnabled('elb_m_060511');
    elementShouldBeEnabled('elb_m_060512');
    elementShouldBeEnabled('elb_m_060515');
    elementShouldBeEnabled('elb_m_060516');

    // Muscle lesion
    clickElement('elb_m_060342', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060344');
    elementShouldBeEnabled('elb_m_060345');
    elementShouldBeEnabled('elb_m_060346');
    elementShouldBeEnabled('elb_m_060347');

    // Minor partial muscle tear (type IIIa)
    clickElement('elb_m_060345', true, 'radio');
    elementShouldBeEnabled('elb_m_060414');

    // Moderate partial muscle tear (type IIIb)
    clickElement('elb_m_060346', true, 'radio');
    elementShouldBeEnabled('elb_m_060416');

    // (Sub)total muscle tear/tendinous avulsion (type IV)
    clickElement('elb_m_060347', true, 'radio');
    elementShouldBeEnabled('elb_m_060418');
    elementShouldBeEnabled('elb_m_060420');
    elementShouldBeEnabled('elb_m_060421');
    elementShouldBeEnabled('elb_m_060427');

    // Muscular atrophy
    clickElement('elb_m_060512', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060513');
    elementShouldBeEnabled('elb_m_060514');

    // Fascial laceration
    clickElement('elb_m_060516', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060517');
  });
});
