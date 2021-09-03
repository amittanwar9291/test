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

context('Page 04 - SpineMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

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

  it('Spondylolisthesis', () => {
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
      .contains('4')
      .click({ force: true });

    clickElement('spi_m_040105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('spi_m_040212');
    elementShouldBeEnabled('spi_m_040309');
    elementShouldBeEnabled('spi_m_040310');

    clickElement('spi_m_040212', true);
    // CHECK IF ACTIVE and enabled, this is not really checking it...
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C5]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C6]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C7]')
      .should('not.have.css', 'pointer-events', 'none');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1d]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('have.class', 'vertebrae element__selected');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('have.class', 'vertebrae element__selected');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3d]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .should('have.class', 'vertebrae element__selected');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .should('have.class', 'vertebrae element__selected');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('not.have.class', 'vertebrae element__selected');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .should('not.have.class', 'vertebrae element__selected');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    clickElement('spi_m_040309');
    elementShouldBeEnabled('spi_m_040312');
    elementShouldBeEnabled('spi_m_040313');
    elementShouldBeEnabled('spi_m_040314');
    elementShouldBeEnabled('spi_m_040315');
    elementShouldBeEnabled('spi_m_040316');
    elementShouldBeEnabled('spi_m_040318');
    elementShouldBeEnabled('spi_m_040319');

    clickElement('spi_m_040310');
    elementShouldBeEnabled('spi_m_040312');
    elementShouldBeEnabled('spi_m_040313');
    elementShouldBeEnabled('spi_m_040314');
    elementShouldBeEnabled('spi_m_040315');
    elementShouldBeEnabled('spi_m_040316');
    elementShouldBeEnabled('spi_m_040318');
    elementShouldBeEnabled('spi_m_040319');
  });
});
