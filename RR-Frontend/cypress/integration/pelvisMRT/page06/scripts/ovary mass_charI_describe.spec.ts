import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, visitPageNumber } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

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

  it('Ovary, mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(0);
    cy.get('div[role=radio]')
      .eq(2)
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('div[role=radio]')
      .eq(2)
      .should('have.attr', 'aria-checked', 'true');
    cy.get('div[role=radio]')
      .eq(3)
      .should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    clickElement('pel_m_060202');

    elementShouldBeEnabled('pel_m_060301');
    elementShouldBeEnabled('pel_m_060401');

    elementShouldBeEnabled('pel_m_060204');
    elementShouldBeEnabled('pel_m_060205');
    elementShouldBeEnabled('pel_m_060206');
    elementShouldBeEnabled('pel_m_060208');
    elementShouldBeEnabled('pel_m_060210');

    elementShouldBeEnabled('pel_m_060360');
    elementShouldBeEnabled('pel_m_060361');
    elementShouldBeEnabled('pel_m_060310');
    elementShouldBeEnabled('pel_m_060311');

    elementShouldBeEnabled('pel_m_0603401');

    elementShouldBeEnabled('pel_m_060403');
    elementShouldBeEnabled('pel_m_0604402');
    elementShouldBeEnabled('pel_m_0604404');

    elementShouldBeEnabled('pel_m_060505');
    elementShouldBeEnabled('pel_m_060506');
    elementShouldBeEnabled('pel_m_060507');

    clickElement('pel_m_0603401', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0603402');

    clickElement('pel_m_060507', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060508');
    elementShouldBeEnabled('pel_m_060509');

    clickElement('pel_m_060509', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060510');
    elementShouldBeEnabled('pel_m_060511');
  });
});
