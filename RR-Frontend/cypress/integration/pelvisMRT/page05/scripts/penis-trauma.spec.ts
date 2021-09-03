import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 05 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_050107', 'pel_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Penis, trauma', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(3000);
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('pel_m_050107');
    elementShouldBeEnabled('pel_m_050205');
    elementShouldBeEnabled('pel_m_050210');

    elementShouldBeEnabled('pel_m_050212');
    elementShouldBeEnabled('pel_m_050213');

    elementShouldBeEnabled('pel_m_050215');
    elementShouldBeEnabled('pel_m_050216');
    elementShouldBeEnabled('pel_m_050217');

    elementShouldBeEnabled('pel_m_050302');
    elementShouldBeEnabled('pel_m_050303');

    clickElement('pel_m_050205', true, 'radio');
    elementShouldBeEnabled('pel_m_050207');
    elementShouldBeEnabled('pel_m_050208');
    elementShouldBeEnabled('pel_m_050209');

    clickElement('pel_m_050302', true, 'radio');
    elementShouldBeEnabled('pel_m_0503101');

    clickElement('pel_m_050303', true, 'radio');
    elementShouldBeEnabled('pel_m_0503101');
  });
});
