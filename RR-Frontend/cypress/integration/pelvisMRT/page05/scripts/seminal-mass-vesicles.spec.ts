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

  it('Seminal vesicles, infection/inflammation', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.wait(2000);
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');
    elementShouldBeEnabled('pel_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('pel_m_050107');
    elementShouldBeEnabled('pel_m_0502111');
    elementShouldBeEnabled('pel_m_0502112');

    elementShouldBeEnabled('pel_m_0502134');
    elementShouldBeEnabled('pel_m_0502136');
    elementShouldBeEnabled('pel_m_0502137');
    elementShouldBeEnabled('pel_m_0502138');

    elementShouldBeEnabled('pel_m_050397');
    elementShouldBeEnabled('pel_m_050398');
    elementShouldBeEnabled('pel_m_050399');

    elementShouldBeEnabled('pel_m_0503102');
    elementShouldBeEnabled('pel_m_0503103');
    elementShouldBeEnabled('pel_m_0503106');

    elementShouldBeEnabled('pel_m_050472');

    clickElement('pel_m_0502136', true, 'radio');
    elementShouldBeEnabled('pel_m_0502138');
    elementShouldBeEnabled('pel_m_0502139');

    clickElement('pel_m_0502137', true, 'radio');
    elementShouldBeEnabled('pel_m_0502138');
    elementShouldBeEnabled('pel_m_0502139');

    clickElement('pel_m_050472', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050473');
  });
});
