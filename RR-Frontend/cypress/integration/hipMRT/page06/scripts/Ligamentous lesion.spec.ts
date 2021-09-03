import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_060106', 'hip_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_CapsuleAndLigaments.url + '/' + pageId);
        });
      });
    });
  });

  it('Ligamentous lesion', () => {
    clickElement('hip_m_060105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hip_m_060203');
    elementShouldBeEnabled('hip_m_060204');

    elementShouldBeEnabled('hip_m_060302');
    elementShouldBeEnabled('hip_m_060303');
    elementShouldBeEnabled('hip_m_060305');
    elementShouldBeEnabled('hip_m_060306');
    elementShouldBeEnabled('hip_m_060307');

    elementShouldBeEnabled('hip_m_060402');
    elementShouldBeEnabled('hip_m_060403');

    clickElement('hip_m_060403', true, 'radio');

    elementShouldBeEnabled('hip_m_060404');
    elementShouldBeEnabled('hip_m_060405');
  });
});
