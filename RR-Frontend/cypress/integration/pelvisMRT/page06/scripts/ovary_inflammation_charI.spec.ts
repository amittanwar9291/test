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
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('pel_m_060107');
    cy.get('.c-main-slide')
      .find('a')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');

    elementShouldBeEnabled('pel_m_060228');
    elementShouldBeEnabled('pel_m_060229');

    elementShouldBeEnabled('pel_m_060230');
    elementShouldBeEnabled('pel_m_060231');
    elementShouldBeEnabled('pel_m_060232');
    elementShouldBeEnabled('pel_m_060233');
    elementShouldBeEnabled('pel_m_060234');
    elementShouldBeEnabled('pel_m_060235');

    elementShouldBeEnabled('pel_m_060331');
    elementShouldBeEnabled('pel_m_060332');
    elementShouldBeEnabled('pel_m_060333');

    elementShouldBeEnabled('pel_m_060435');
    elementShouldBeEnabled('pel_m_060439');
    elementShouldBeEnabled('pel_m_060440');
    elementShouldBeEnabled('pel_m_060441');

    clickElement('pel_m_060331', true, 'radio');
    elementShouldBeEnabled('pel_m_060334');
    elementShouldBeEnabled('pel_m_060335');

    clickElement('pel_m_060332', true, 'radio');
    elementShouldBeEnabled('pel_m_060334');
    elementShouldBeEnabled('pel_m_060335');

    clickElement('pel_m_060435', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060436');
    elementShouldBeEnabled('pel_m_060437');

    clickElement('pel_m_060439', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');

    clickElement('pel_m_060440', true, 'radio');
    elementShouldBeEnabled('pel_m_060442');
    elementShouldBeEnabled('pel_m_060443');
  });
});
