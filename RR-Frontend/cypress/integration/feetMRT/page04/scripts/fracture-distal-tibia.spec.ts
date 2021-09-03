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

  it('Fracture Distal tibia', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(6)
      .click();

    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_040309');
    elementShouldBeEnabled('anc_m_040310');
    elementShouldBeEnabled('anc_m_040311');
    elementShouldBeEnabled('anc_m_040312');

    clickElement('anc_m_040309', true, 'radio');
    elementShouldBeEnabled('anc_m_040404');
    elementShouldBeEnabled('anc_m_040405');
    elementShouldBeEnabled('anc_m_040406');

    clickElement('anc_m_040404', true, 'radio');
    elementShouldBeEnabled('anc_m_040502');
    elementShouldBeEnabled('anc_m_040503');
    elementShouldBeEnabled('anc_m_040504');

    clickElement('anc_m_040405', true, 'radio');
    elementShouldBeEnabled('anc_m_040505');
    elementShouldBeEnabled('anc_m_040506');
    elementShouldBeEnabled('anc_m_040507');

    clickElement('anc_m_040406', true, 'radio');
    elementShouldBeEnabled('anc_m_040508');
    elementShouldBeEnabled('anc_m_040509');
    elementShouldBeEnabled('anc_m_040510');

    clickElement('anc_m_040310', true, 'radio');
    elementShouldBeEnabled('anc_m_040408');
    elementShouldBeEnabled('anc_m_040409');
    elementShouldBeEnabled('anc_m_040410');

    clickElement('anc_m_040408', true, 'radio');
    elementShouldBeEnabled('anc_m_040511');
    elementShouldBeEnabled('anc_m_040514');
    elementShouldBeEnabled('anc_m_040517');

    clickElement('anc_m_040511', true, 'radio');
    elementShouldBeEnabled('anc_m_040512');
    elementShouldBeEnabled('anc_m_040513');

    clickElement('anc_m_040514', true, 'radio');
    elementShouldBeEnabled('anc_m_040515');
    elementShouldBeEnabled('anc_m_040516');

    clickElement('anc_m_040311', true, 'radio');
    elementShouldBeEnabled('anc_m_040411');
    elementShouldBeEnabled('anc_m_040412');
    elementShouldBeEnabled('anc_m_040413');

    clickElement('anc_m_040411', true, 'radio');
    elementShouldBeEnabled('anc_m_0405310');
    elementShouldBeEnabled('anc_m_0405313');
    elementShouldBeEnabled('anc_m_0405314');

    clickElement('anc_m_0405310', true, 'radio');
    elementShouldBeEnabled('anc_m_0405311');
    elementShouldBeEnabled('anc_m_0405312');

    clickElement('anc_m_040312', true, 'radio');
    elementShouldBeEnabled('anc_m_040313');
    elementShouldBeEnabled('anc_m_040314');
  });
});
