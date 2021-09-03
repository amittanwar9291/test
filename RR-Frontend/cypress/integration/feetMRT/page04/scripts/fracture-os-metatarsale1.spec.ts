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

  it('Fracture Os metatarsale 1', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(16)
      .click();

    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_040346');
    elementShouldBeEnabled('anc_m_040347');
    elementShouldBeEnabled('anc_m_040348');
    elementShouldBeEnabled('anc_m_0403224');

    clickElement('anc_m_040346', true, 'radio');
    elementShouldBeEnabled('anc_m_040454');
    elementShouldBeEnabled('anc_m_040455');
    elementShouldBeEnabled('anc_m_040456');

    clickElement('anc_m_040454', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_040455', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_040456', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_040347', true, 'radio');
    elementShouldBeEnabled('anc_m_040457');
    elementShouldBeEnabled('anc_m_040458');
    elementShouldBeEnabled('anc_m_040459');

    clickElement('anc_m_040348', true, 'radio');
    elementShouldBeEnabled('anc_m_040460');
    elementShouldBeEnabled('anc_m_040461');
    elementShouldBeEnabled('anc_m_040462');

    clickElement('anc_m_040460', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_040461', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_040462', true, 'radio');
    elementShouldBeEnabled('anc_m_0405350');
    elementShouldBeEnabled('anc_m_0405351');

    clickElement('anc_m_0403224', true, 'radio');
    elementShouldBeEnabled('anc_m_0403225');
    elementShouldBeEnabled('anc_m_0403226');
  });
});
