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

  it('Scrotum cryptorchidism', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(2000);
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');
    elementShouldBeEnabled('pel_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('pel_m_050107');
    elementShouldBeEnabled('pel_m_050281');
    elementShouldBeEnabled('pel_m_050279');
    elementShouldBeEnabled('pel_m_050340');
    elementShouldBeEnabled('pel_m_050341');
    elementShouldBeEnabled('pel_m_050342');

    clickElement('pel_m_050281');
    elementShouldBeEnabled('pel_m_050282');

    clickElement('pel_m_050279', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050280');
  });
});
