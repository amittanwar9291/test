import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 06 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  it('Charcot Foot_Characterization', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060277');

    elementShouldBeEnabled('anc_m_060391');
    elementShouldBeEnabled('anc_m_060393');
    elementShouldBeEnabled('anc_m_060392');
    elementShouldBeEnabled('anc_m_060393');

    elementShouldBeEnabled('anc_m_060392');
    elementShouldBeEnabled('anc_m_0603101');
    elementShouldBeEnabled('anc_m_0604140');
    elementShouldBeEnabled('anc_m_060533');

    elementShouldBeEnabled('anc_m_060535');
    elementShouldBeEnabled('anc_m_060542');

    clickElement('anc_m_060277', true, 'checkbox');

    elementShouldBeEnabled('anc_m_060278');
    elementShouldBeEnabled('anc_m_060279');
    elementShouldBeEnabled('anc_m_060280');

    elementShouldBeEnabled('anc_m_060283');
    elementShouldBeEnabled('anc_m_060284');
    elementShouldBeEnabled('anc_m_060285');
    elementShouldBeEnabled('anc_m_060286');
    elementShouldBeEnabled('anc_m_060287');

    clickElement('anc_m_060393', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060396');
    elementShouldBeEnabled('anc_m_060397');
    elementShouldBeEnabled('anc_m_060398');
    elementShouldBeEnabled('anc_m_060399');
    elementShouldBeEnabled('anc_m_0603100');

    elementShouldBeEnabled('anc_m_060392');
    elementShouldBeEnabled('anc_m_0603101');
    clickElement('anc_m_0603101', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0603102');
    clickElement('anc_m_0603102', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0603103');

    clickElement('anc_m_0604140', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0604141');
    elementShouldBeEnabled('anc_m_0604141');
    elementShouldBeEnabled('anc_m_0604145');
    elementShouldBeEnabled('anc_m_0604146');

    clickElement('anc_m_0604142', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0604143');

    clickElement('anc_m_060533', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060534');
    elementShouldBeEnabled('anc_m_060535');

    clickElement('anc_m_060542', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060543');
    elementShouldBeEnabled('anc_m_060544');
    elementShouldBeEnabled('anc_m_060545');
    elementShouldBeEnabled('anc_m_060546');
  });
});
