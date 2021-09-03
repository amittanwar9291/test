import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 04 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_040124', 'pel_m_040123-');

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

  it('Lesion TZ Char II', () => {
    clickElement('uni_01_006', true, 'radio');
    clickElement('pel_m_010203');
    cy.get('rr-top-navigation a')
      .eq(2)
      .click({ force: true });
    clickElement('uni_x_030104', true, 'radio');
    clickElement('uni_x_030105', true);
    clickElement('uni_x_030109');
    selectDropdownOptionOS('uni_x_030210-1', 3, true, true);
    cy.get('rr-top-navigation a')
      .eq(3)
      .click({ force: true });

    clickElement('pel_m_040104');
    clickElement('pel_m_040122');
    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('pel_m_040124');

    elementShouldBeEnabled('pel_m_040222');
    cy.get('[id="ui-tabpanel-0-label"]').should('have.attr', 'aria-selected', 'true');
    elementShouldBeEnabled('pel_m_040304');
    elementShouldBeEnabled('pel_m_040420');
    clickElement('pel_m_040304');

    elementShouldBeEnabled('pel_m_040226');
    elementShouldBeEnabled('pel_m_040230');
    elementShouldBeEnabled('pel_m_040321');
    elementShouldBeEnabled('pel_m_040322');

    clickElement('pel_m_040226');
    elementShouldBeEnabled('pel_m_040227');
    elementShouldBeEnabled('pel_m_040228');
    elementShouldBeEnabled('pel_m_040229');

    clickElement('pel_m_040322');
    elementShouldBeEnabled('pel_m_040323');
    elementShouldBeEnabled('pel_m_040324');
    elementShouldBeEnabled('pel_m_040325');
    elementShouldBeEnabled('pel_m_040327');
    elementShouldBeEnabled('pel_m_040328');

    clickElement('pel_m_040325');
    elementShouldBeEnabled('pel_m_040326');

    clickElement('pel_m_040327');
    elementShouldBeEnabled('pel_m_040433');
    elementShouldBeEnabled('pel_m_040526');
    elementShouldBeEnabled('pel_m_040529');
    elementShouldBeEnabled('pel_m_040530');
    elementShouldBeEnabled('pel_m_040531');
    elementShouldBeEnabled('pel_m_040532');

    clickElement('pel_m_040433');
    elementShouldBeEnabled('pel_m_040434');
    elementShouldBeEnabled('pel_m_040435');
    elementShouldBeEnabled('pel_m_040436');
    elementShouldBeEnabled('pel_m_040437');
    elementShouldBeEnabled('pel_m_040440');
    elementShouldBeEnabled('pel_m_040441');

    clickElement('pel_m_040437');
    elementShouldBeEnabled('pel_m_040438');

    clickElement('pel_m_040526');
    elementShouldBeEnabled('pel_m_040527');
    elementShouldBeEnabled('pel_m_040528');
  });
});
