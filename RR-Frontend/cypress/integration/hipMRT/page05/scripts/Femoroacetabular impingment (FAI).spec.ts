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

  it('Femoroacetabular impingment', () => {
    clickElement('hip_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('hip_m_050107');

    elementShouldBeEnabled('hip_m_050205');
    elementShouldBeEnabled('hip_m_050206');

    elementShouldBeEnabled('hip_m_050321');
    elementShouldBeEnabled('hip_m_050324');
    elementShouldBeEnabled('hip_m_050421');
    elementShouldBeEnabled('hip_m_050424');

    clickElement('hip_m_050321', true, 'radio');
    elementShouldBeEnabled('hip_m_050322');
    elementShouldBeEnabled('hip_m_050323');
    elementShouldBeEnabled('hip_m_050333');

    clickElement('hip_m_050324', true, 'radio');
    elementShouldBeEnabled('hip_m_050325');
    elementShouldBeEnabled('hip_m_050326');

    clickElement('hip_m_050421', true, 'checkbox');
    elementShouldBeEnabled('hip_m_050422');
    elementShouldBeEnabled('hip_m_050423');
  });
});
