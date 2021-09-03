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

context('Page 07 - SpineMRT', () => {
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

  it('Posttherapeutic change', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-OC]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('spi_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);

    elementShouldBeEnabled('spi_m_060206');
    elementShouldBeEnabled('spi_m_060340');
    elementShouldBeEnabled('spi_m_0604200');

    clickElement('spi_m_060206', true, 'checkbox');
    clickElement('spi_m_060340', true, 'checkbox');
    clickElement('spi_m_0604200', true, 'checkbox');

    clickElement('spi_m_060204', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    clickElement('spi_m_0603100', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    clickElement('spi_m_0604201', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-T1]')
      .click({ force: true })
      .should('have.css', 'fill', 'rgb(248, 2, 2)');

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
  });
});
