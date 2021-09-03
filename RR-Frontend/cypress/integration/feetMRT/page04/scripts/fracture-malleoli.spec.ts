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

  it('Fracture Malleoli', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('anc_m_040107');
    cy.get('.stroke-none').should('not.have.css', 'pointer-events', 'none');

    cy.get('.stroke-none').click();
    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('tspan')
      .eq(8)
      .click();

    cy.get('.m-t-79 > .ng-valid')
      .shadowFind('circle')
      .eq(0)
      .click({ force: true });

    elementShouldBeEnabled('anc_m_040322');
    elementShouldBeEnabled('anc_m_040323');
    elementShouldBeEnabled('anc_m_040324');
    elementShouldBeEnabled('anc_m_0403205');

    clickElement('anc_m_040322', true, 'radio');
    elementShouldBeEnabled('anc_m_040416');
    elementShouldBeEnabled('anc_m_040417');
    elementShouldBeEnabled('anc_m_040418');

    clickElement('anc_m_040416', true, 'radio');
    elementShouldBeEnabled('anc_m_040536');
    elementShouldBeEnabled('anc_m_040537');
    elementShouldBeEnabled('anc_m_040538');

    clickElement('anc_m_040417', true, 'radio');
    elementShouldBeEnabled('anc_m_040539');
    elementShouldBeEnabled('anc_m_040540');
    elementShouldBeEnabled('anc_m_040541');

    clickElement('anc_m_040418', true, 'radio');
    elementShouldBeEnabled('anc_m_040542');
    elementShouldBeEnabled('anc_m_040543');
    elementShouldBeEnabled('anc_m_040544');

    clickElement('anc_m_040323', true, 'radio');
    elementShouldBeEnabled('anc_m_040419');
    elementShouldBeEnabled('anc_m_040420');
    elementShouldBeEnabled('anc_m_040421');

    clickElement('anc_m_040419', true, 'radio');
    elementShouldBeEnabled('anc_m_0405320');
    elementShouldBeEnabled('anc_m_0405321');
    elementShouldBeEnabled('anc_m_0405322');

    clickElement('anc_m_0405322', true, 'radio');
    elementShouldBeEnabled('anc_m_0405323');
    elementShouldBeEnabled('anc_m_0405324');
    elementShouldBeEnabled('anc_m_0405325');

    clickElement('anc_m_040420', true, 'radio');
    elementShouldBeEnabled('anc_m_040545');
    elementShouldBeEnabled('anc_m_040546');
    elementShouldBeEnabled('anc_m_040550');

    clickElement('anc_m_040545', true, 'radio');
    elementShouldBeEnabled('anc_m_0405329');
    elementShouldBeEnabled('anc_m_0405330');
    elementShouldBeEnabled('anc_m_0405331');

    clickElement('anc_m_040546', true, 'radio');
    elementShouldBeEnabled('anc_m_0405329');
    elementShouldBeEnabled('anc_m_0405330');
    elementShouldBeEnabled('anc_m_0405331');

    clickElement('anc_m_040550', true, 'radio');
    elementShouldBeEnabled('anc_m_0405335');
    elementShouldBeEnabled('anc_m_0405336');
    elementShouldBeEnabled('anc_m_0405337');

    clickElement('anc_m_040421', true, 'radio');
    elementShouldBeEnabled('anc_m_0405338');
    elementShouldBeEnabled('anc_m_0405339');
    elementShouldBeEnabled('anc_m_0405340');

    clickElement('anc_m_0405338', true, 'radio');
    elementShouldBeEnabled('anc_m_0405341');
    elementShouldBeEnabled('anc_m_0405342');
    elementShouldBeEnabled('anc_m_0405343');

    clickElement('anc_m_0405339', true, 'radio');
    elementShouldBeEnabled('anc_m_0405341');
    elementShouldBeEnabled('anc_m_0405342');
    elementShouldBeEnabled('anc_m_0405343');

    clickElement('anc_m_0405340', true, 'radio');
    elementShouldBeEnabled('anc_m_0405341');
    elementShouldBeEnabled('anc_m_0405342');
    elementShouldBeEnabled('anc_m_0405343');

    clickElement('anc_m_040324', true, 'radio');
    elementShouldBeEnabled('anc_m_040422');
    elementShouldBeEnabled('anc_m_040423');
    elementShouldBeEnabled('anc_m_040424');

    clickElement('anc_m_040422', true, 'radio');
    elementShouldBeEnabled('anc_m_040557');
    elementShouldBeEnabled('anc_m_040558');
    elementShouldBeEnabled('anc_m_040559');

    clickElement('anc_m_040557', true, 'radio');
    elementShouldBeEnabled('anc_m_040560');
    elementShouldBeEnabled('anc_m_0405344');

    clickElement('anc_m_040558', true, 'radio');
    elementShouldBeEnabled('anc_m_040560');
    elementShouldBeEnabled('anc_m_0405344');

    clickElement('anc_m_040559', true, 'radio');
    elementShouldBeEnabled('anc_m_040560');
    elementShouldBeEnabled('anc_m_0405344');

    clickElement('anc_m_040423', true, 'radio');
    elementShouldBeEnabled('anc_m_040561');
    elementShouldBeEnabled('anc_m_040562');
    elementShouldBeEnabled('anc_m_040563');

    clickElement('anc_m_040561', true, 'radio');
    elementShouldBeEnabled('anc_m_0405346');
    elementShouldBeEnabled('anc_m_0405347');

    clickElement('anc_m_040562', true, 'radio');
    elementShouldBeEnabled('anc_m_0405346');
    elementShouldBeEnabled('anc_m_0405347');

    clickElement('anc_m_040563', true, 'radio');
    elementShouldBeEnabled('anc_m_0405346');
    elementShouldBeEnabled('anc_m_0405347');

    clickElement('anc_m_040424', true, 'radio');
    elementShouldBeEnabled('anc_m_040564');
    elementShouldBeEnabled('anc_m_040565');
    elementShouldBeEnabled('anc_m_040566');

    clickElement('anc_m_040564', true, 'radio');
    elementShouldBeEnabled('anc_m_040567');
    elementShouldBeEnabled('anc_m_040568');
    elementShouldBeEnabled('anc_m_040569');
    elementShouldBeEnabled('anc_m_040570');

    clickElement('anc_m_040565', true, 'radio');
    elementShouldBeEnabled('anc_m_040567');
    elementShouldBeEnabled('anc_m_040568');
    elementShouldBeEnabled('anc_m_040569');
    elementShouldBeEnabled('anc_m_040570');

    clickElement('anc_m_040566', true, 'radio');
    elementShouldBeEnabled('anc_m_040567');
    elementShouldBeEnabled('anc_m_040568');
    elementShouldBeEnabled('anc_m_040569');
    elementShouldBeEnabled('anc_m_040570');

    clickElement('anc_m_0403205', true, 'radio');
    elementShouldBeEnabled('anc_m_0403206');
    elementShouldBeEnabled('anc_m_0403207');
  });
});
