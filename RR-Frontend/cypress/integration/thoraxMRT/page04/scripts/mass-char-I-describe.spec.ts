import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Char I describe', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(5);
    selectElementByRadioRole(2);
    cy.get(':nth-child(2) > .relative-container > .description-img').should('not.have.css', 'pointer-events', 'none');
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040232');
    cy.get('.ui-tabview-nav > :nth-child(2)').should('not.have.css', 'pointer-events', 'none');
    cy.get('.ui-tabview-nav > :nth-child(3)').should('not.have.css', 'pointer-events', 'none');

    elementShouldBeEnabled('tho_m_040239');
    elementShouldBeEnabled('tho_m_040240');
    elementShouldBeEnabled('tho_m_040354');
    elementShouldBeEnabled('tho_m_040462');
    elementShouldBeEnabled('tho_m_040463');
    elementShouldBeEnabled('tho_m_040465');
    elementShouldBeEnabled('tho_m_040466');
    elementShouldBeEnabled('tho_m_040468');
    elementShouldBeEnabled('tho_m_040469');
    elementShouldBeEnabled('tho_m_040470');
    elementShouldBeEnabled('tho_m_040471');

    elementShouldBeEnabled('tho_m_040536');
    elementShouldBeEnabled('tho_m_040539');
    elementShouldBeEnabled('tho_m_040543');
    elementShouldBeEnabled('tho_m_040544');
  });
});
