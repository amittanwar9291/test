import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, elementShouldBeChecked } from '../../../../shared/service';
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
  it('Diagnosis_Seizure', () => {
    elementShouldBeEnabled('hea_m_120201');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('hea_m_120228');
    elementShouldBeEnabled('hea_m_120229');
    elementShouldBeEnabled('hea_m_120230');
    elementShouldBeEnabled('hea_m_120231');
    elementShouldBeEnabled('hea_m_120232');
    elementShouldBeEnabled('hea_m_120233');
    elementShouldBeEnabled('hea_m_120234');
    elementShouldBeEnabled('hea_m_120235');
    elementShouldBeEnabled('hea_m_120236');
    elementShouldBeEnabled('hea_m_120237');
    elementShouldBeEnabled('hea_m_120238');
    elementShouldBeEnabled('hea_m_120239');
    elementShouldBeEnabled('hea_m_120240');
    elementShouldBeEnabled('hea_m_120241');

    clickElement('hea_m_120228', true, 'radio');
    elementShouldBeChecked('hea_m_120228');
    clickElement('hea_m_120229', true, 'radio');
    elementShouldBeChecked('hea_m_120229');
    clickElement('hea_m_120230', true, 'radio');
    elementShouldBeChecked('hea_m_120230');
    clickElement('hea_m_120231', true, 'radio');
    elementShouldBeChecked('hea_m_120231');

    clickElement('hea_m_120232', true, 'radio');
    elementShouldBeChecked('hea_m_120232');
    clickElement('hea_m_120233', true, 'radio');
    elementShouldBeChecked('hea_m_120233');

    clickElement('hea_m_120234', true, 'radio');
    elementShouldBeChecked('hea_m_120234');

    clickElement('hea_m_120235', true, 'radio');
    elementShouldBeChecked('hea_m_120235');

    clickElement('hea_m_120236', true, 'radio');
    elementShouldBeChecked('hea_m_120236');

    clickElement('hea_m_120237', true, 'radio');
    elementShouldBeChecked('hea_m_120237');

    clickElement('hea_m_120238', true, 'radio');
    elementShouldBeChecked('hea_m_120238');

    clickElement('hea_m_120239', true, 'radio');
    elementShouldBeChecked('hea_m_120239');

    clickElement('hea_m_120240', true, 'radio');
    elementShouldBeChecked('hea_m_120240');

    clickElement('hea_m_120241', true, 'radio');
    elementShouldBeChecked('hea_m_120241');
  });
});
