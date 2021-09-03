import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 12 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_120106', 'hea_m_120106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Summary.url + '/' + pageId);
        });
      });
    });
  });
  it('Diagnosis_Multiple sclerosis.spec', () => {
    // elementShouldBeEnabled('hea_m_120106');
    elementShouldBeEnabled('hea_m_120201');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('hea_m_120203');
    elementShouldBeEnabled('hea_m_120204');

    elementShouldBeEnabled('hea_m_120209');
    elementShouldBeEnabled('hea_m_120210');
    elementShouldBeEnabled('hea_m_120211');

    elementShouldBeEnabled('hea_m_120302');
    elementShouldBeEnabled('hea_m_120305');
    elementShouldBeEnabled('hea_m_120308');
    elementShouldBeEnabled('hea_m_120311');
    elementShouldBeEnabled('hea_m_120314');
    elementShouldBeEnabled('hea_m_120317');

    elementShouldBeEnabled('hea_m_120402');
    elementShouldBeEnabled('hea_m_120403');
    elementShouldBeEnabled('hea_m_120407');

    elementShouldBeEnabled('hea_m_120410');
    elementShouldBeEnabled('hea_m_120411');
    elementShouldBeEnabled('hea_m_120412');
    elementShouldBeEnabled('hea_m_120413');

    elementShouldBeEnabled('hea_m_120502');
    elementShouldBeEnabled('hea_m_120503');
    elementShouldBeEnabled('hea_m_120504');

    clickElement('hea_m_120302', true, 'checkbox');
    clickElement('hea_m_120305', true, 'checkbox');
    clickElement('hea_m_120308', true, 'checkbox');
    clickElement('hea_m_120311', true, 'checkbox');
    clickElement('hea_m_120314', true, 'checkbox');
    clickElement('hea_m_120317', true, 'checkbox');

    elementShouldBeEnabled('hea_m_120303');
    elementShouldBeEnabled('hea_m_120306');
    elementShouldBeEnabled('hea_m_120309');
    elementShouldBeEnabled('hea_m_120312');
    elementShouldBeEnabled('hea_m_120315');
    elementShouldBeEnabled('hea_m_120318');
    elementShouldBeEnabled('hea_m_120319');
    clickElement('hea_m_120403', true, 'checkbox');
    elementShouldBeEnabled('hea_m_120405');

    clickElement('hea_m_120407', true, 'checkbox');
    elementShouldBeEnabled('hea_m_120408');
  });
});
