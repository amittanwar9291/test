import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
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

  it('Osteochondral lesion', () => {
    // Select Ostechondral lesion from DDL
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('elb_m_050107');

    // Checkboxes enabled
    elementShouldBeEnabled('elb_m_050204');
    elementShouldBeEnabled('elb_m_050205');
    elementShouldBeEnabled('elb_m_050206');
    elementShouldBeEnabled('elb_m_050207');
    elementShouldBeEnabled('elb_m_050208');
    elementShouldBeEnabled('elb_m_050209');
    elementShouldBeEnabled('elb_m_050210');
    elementShouldBeEnabled('elb_m_050211');

    // Input fields
    elementShouldBeEnabled('elb_m_050306');
    elementShouldBeEnabled('elb_m_050308');
    elementShouldBeEnabled('elb_m_0503100');

    // Open and closed physis
    elementShouldBeEnabled('elb_m_050502');
    elementShouldBeEnabled('elb_m_050503');

    // Joint effusion and Hemarthros
    elementShouldBeEnabled('elb_m_050508');
    elementShouldBeEnabled('elb_m_050509');

    // Anterior humeral capitulum
    clickElement('elb_m_050204', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050302');
    elementShouldBeEnabled('elb_m_050303');

    // Deselect Anterior humeral capitulum
    clickElement('elb_m_050204', true, 'checkbox');
    elementShouldHaveGivenState('false', 'elb_m_050204');

    // Posterior humeral capitum
    clickElement('elb_m_050205', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050302');
    elementShouldBeEnabled('elb_m_050303');

    // Deselect Posterior humeral capitum
    clickElement('elb_m_050205', true, 'checkbox');
    elementShouldHaveGivenState('false', 'elb_m_050205');

    // Anterior humeral capitulum
    clickElement('elb_m_050204', true, 'checkbox');

    // General radio button
    clickElement('elb_m_050302', true, 'radio');
    elementShouldBeEnabled('elb_m_0504101');
    elementShouldBeEnabled('elb_m_0504102');
    elementShouldBeEnabled('elb_m_0504103');
  });
});
