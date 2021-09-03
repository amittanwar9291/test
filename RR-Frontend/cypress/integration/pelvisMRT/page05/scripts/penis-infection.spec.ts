import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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

  it('Penis, infection/inflammation', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    cy.get('rr-top-navigation a')
      .eq(4)
      .click({ force: true });
    clickElement('pel_m_050105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('pel_m_050107');
    elementShouldBeEnabled('pel_m_050220');
    elementShouldBeEnabled('pel_m_050222');
    elementShouldBeEnabled('pel_m_050223');

    elementShouldBeEnabled('pel_m_050225');
    elementShouldBeEnabled('pel_m_050226');
    elementShouldBeEnabled('pel_m_050227');

    elementShouldBeEnabled('pel_m_050304');
    elementShouldBeEnabled('pel_m_050305');
    elementShouldBeEnabled('pel_m_050307');

    elementShouldBeEnabled('pel_m_050312');
    elementShouldBeEnabled('pel_m_050313');

    elementShouldBeEnabled('pel_m_050502');
    elementShouldBeEnabled('pel_m_050503');

    elementShouldBeEnabled('pel_m_050506');

    clickElement('pel_m_050225', true, 'radio');
    elementShouldBeEnabled('pel_m_050228');
    elementShouldBeEnabled('pel_m_050229');

    clickElement('pel_m_050226', true, 'radio');
    elementShouldBeEnabled('pel_m_050228');
    elementShouldBeEnabled('pel_m_050229');

    clickElement('pel_m_050307', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050308');
    elementShouldBeEnabled('pel_m_050311');

    clickElement('pel_m_050308', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050309');

    clickElement('pel_m_050312', true, 'checkbox');
    elementShouldBeEnabled('pel_m_050402');
    elementShouldBeEnabled('pel_m_050403');
    elementShouldBeEnabled('pel_m_050404');
    elementShouldBeEnabled('pel_m_050407');
    elementShouldBeEnabled('pel_m_050408');
    elementShouldBeEnabled('pel_m_050409');
    elementShouldBeEnabled('pel_m_050411');
    elementShouldBeEnabled('pel_m_050412');
    elementShouldBeEnabled('pel_m_050413');
    elementShouldBeEnabled('pel_m_050414');

    selectDropdownOptionOS('pel_m_050506', 2, true, true);
    elementShouldBeEnabled('pel_m_050508');
    selectDropdownOptionOS('pel_m_050508', 3, true, true);
    elementShouldBeEnabled('pel_m_050509');
  });
});
