import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 04 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_040107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Fracture Os talus', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(9)
      .click();

    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_040327');
    elementShouldBeEnabled('anc_m_040328');
    elementShouldBeEnabled('anc_m_040329');
    elementShouldBeEnabled('anc_m_040330');

    clickElement('anc_m_040327', true, 'radio');
    elementShouldBeEnabled('anc_m_040425');
    elementShouldBeEnabled('anc_m_040426');
    elementShouldBeEnabled('anc_m_040427');

    clickElement('anc_m_040425', true, 'radio');
    elementShouldBeEnabled('anc_m_040571');
    elementShouldBeEnabled('anc_m_040572');
    elementShouldBeEnabled('anc_m_040573');

    clickElement('anc_m_040426', true, 'radio');
    elementShouldBeEnabled('anc_m_040574');
    elementShouldBeEnabled('anc_m_040575');
    elementShouldBeEnabled('anc_m_040576');

    clickElement('anc_m_040427', true, 'radio');
    elementShouldBeEnabled('anc_m_040577');
    elementShouldBeEnabled('anc_m_040578');

    clickElement('anc_m_040328', true, 'radio');
    elementShouldBeEnabled('anc_m_040428');
    elementShouldBeEnabled('anc_m_040429');
    elementShouldBeEnabled('anc_m_040430');
    elementShouldBeEnabled('anc_m_040431');

    clickElement('anc_m_040429', true, 'radio');
    elementShouldBeEnabled('anc_m_040579');
    elementShouldBeEnabled('anc_m_040580');

    clickElement('anc_m_040430', true, 'radio');
    elementShouldBeEnabled('anc_m_040579');
    elementShouldBeEnabled('anc_m_040580');

    clickElement('anc_m_040431', true, 'radio');
    elementShouldBeEnabled('anc_m_040579');
    elementShouldBeEnabled('anc_m_040580');

    clickElement('anc_m_040329', true, 'radio');
    elementShouldBeEnabled('anc_m_040432');
    elementShouldBeEnabled('anc_m_040433');
    elementShouldBeEnabled('anc_m_040434');

    clickElement('anc_m_040433', true, 'radio');
    elementShouldBeEnabled('anc_m_0405348');
    elementShouldBeEnabled('anc_m_0405349');

    clickElement('anc_m_040434', true, 'radio');
    elementShouldBeEnabled('anc_m_0405348');
    elementShouldBeEnabled('anc_m_0405349');

    clickElement('anc_m_040330', true, 'radio');
    elementShouldBeEnabled('anc_m_040331');
    elementShouldBeEnabled('anc_m_040332');
  });
});
