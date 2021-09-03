import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - SpineMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('spi_m_050107d', 'spi_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'SpineMRT', config).then(id => {
          pageId = id;
          cy.visit(spineMRTRoutes.SpineMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Degeneration', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C7]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('spi_m_050105');
    elementShouldBeEnabled('spi_m_050106-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('spi_m_050205');

    clickElement('spi_m_050205', true);
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C5]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C6]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C7]')
      .should('not.have.css', 'pointer-events', 'none');

    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1d]')
      .eq(0)
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('form.ng-valid > .ng-star-inserted > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    elementShouldBeEnabled('spi_m_050328');
    elementShouldBeEnabled('spi_m_050329');

    clickElement('spi_m_050328', true, 'checkbox');
    elementShouldBeEnabled('spi_m_050416');
    elementShouldBeEnabled('spi_m_050417');
    elementShouldBeEnabled('spi_m_050418');
    elementShouldBeEnabled('spi_m_050419');
    elementShouldBeEnabled('spi_m_050506');
    elementShouldBeEnabled('spi_m_050507');
    elementShouldBeEnabled('spi_m_050508');
    elementShouldBeEnabled('spi_m_050513');
    elementShouldBeEnabled('spi_m_050510');
    elementShouldBeEnabled('spi_m_050511');
    elementShouldBeEnabled('spi_m_050512');

    clickElement('spi_m_050419', true, 'checkbox');
    elementShouldBeEnabled('spi_m_050420');
    elementShouldBeEnabled('spi_m_050421');
    elementShouldBeEnabled('spi_m_050422');

    clickElement('spi_m_050508');
    elementShouldBeEnabled('spi_m_0505301');
  });
});
