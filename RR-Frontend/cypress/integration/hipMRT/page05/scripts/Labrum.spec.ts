import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 05 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_050106', 'hip_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_CartilageAndLabrum.url + '/' + pageId);
        });
      });
    });
  });

  it('Labrum', () => {
    clickElement('hip_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hip_m_050107');

    elementShouldBeEnabled('hip_m_050205');
    elementShouldBeEnabled('hip_m_050206');
    clickElement('hip_m_050301', true, 'checkbox');

    elementShouldBeEnabled('hip_m_050301');
    elementShouldBeEnabled('hip_m_050305');
    elementShouldBeEnabled('hip_m_050306');
    elementShouldBeEnabled('hip_m_050307');

    elementShouldBeEnabled('hip_m_050401');
    elementShouldBeEnabled('hip_m_050404');

    clickElement('hip_m_050404', true, 'checkbox');

    elementShouldBeEnabled('hip_m_050502');
    elementShouldBeEnabled('hip_m_050503');
    elementShouldBeEnabled('hip_m_050504');
    elementShouldBeEnabled('hip_m_050507');
    elementShouldBeEnabled('hip_m_050510');

    clickElement('hip_m_050401', true, 'checkbox');
    elementShouldBeEnabled('hip_m_050402');
    elementShouldBeEnabled('hip_m_050403');

    clickElement('hip_m_050510', true, 'checkbox');
    elementShouldBeEnabled('hip_m_050511');
    elementShouldBeEnabled('hip_m_050520');
  });
});
