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


  it('Musculature hematoma', () => {

    // Select Finding button
    clickElement('elb_m_060105',  true,  'radio');
    elementShouldBeEnabled('elb_m_060106-1');

    // Select finding: Musculature
    findingColumn.selectFindingOptionByAppearance(3);

    // Hematoma tab
    cy.byRRID('elb_m_060341').click({force: true});
    elementShouldBeEnabled('elb_m_060223');

    // Hematoma checkbox
    clickElement('elb_m_060223', true, 'checkbox');
    elementShouldBeEnabled('elb_m_060225');
    elementShouldBeEnabled('elb_m_060226');
    elementShouldBeEnabled('elb_m_060227');

    // Signal T1w and T2w
    elementShouldBeEnabled('elb_m_060230');
    elementShouldBeEnabled('elb_m_060233');

    // Hematoma characterization buttons
    elementShouldBeEnabled('elb_m_060349');
    elementShouldBeEnabled('elb_m_060350');
    elementShouldBeEnabled('elb_m_060351');
    elementShouldBeEnabled('elb_m_060352');

  });
});
