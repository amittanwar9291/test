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

  it('Scoliosis', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('4')
      .click({ force: true });

    clickElement('spi_m_040105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('spi_m_040226');
    elementShouldBeEnabled('spi_m_040328');
    elementShouldBeEnabled('spi_m_040409');

    clickElement('spi_m_040226');
    elementShouldBeEnabled('spi_m_040228');
    elementShouldBeEnabled('spi_m_040229');
    elementShouldBeEnabled('spi_m_040230');
    elementShouldBeEnabled('spi_m_040232');

    clickElement('spi_m_040228', true);
    // CHECK IF ACTIVE, this is not really checking it...
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
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C4]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    clickElement('spi_m_040328');
    elementShouldBeEnabled('spi_m_040322');
    elementShouldBeEnabled('spi_m_040323');
    elementShouldBeEnabled('spi_m_040324');
    elementShouldBeEnabled('spi_m_040326');

    clickElement('spi_m_040322', true);
    // CHECK IF ACTIVE, this is not really checking it...
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T2]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T3]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T4]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T5]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T6]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T7]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T8]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T9]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T10]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T11]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T12]')
      .should('not.have.css', 'pointer-events', 'none');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T4]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T4]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    clickElement('spi_m_040409', true, 'checkbox');
    elementShouldBeEnabled('spi_m_040411');
    elementShouldBeEnabled('spi_m_040412');
    elementShouldBeEnabled('spi_m_040413');
    elementShouldBeEnabled('spi_m_040415');

    clickElement('spi_m_040411', true);
    // CHECK IF ACTIVE, this is not really checking it...
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L1]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L2]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L3]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L4]')
      .should('not.have.css', 'pointer-events', 'none');
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .should('not.have.css', 'pointer-events', 'none');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L1]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L1]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L4]')
      .eq(0)
      .click({ force: true });
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L4]')
      .should('have.css', 'fill', 'rgb(248, 2, 2)');
  });
});
