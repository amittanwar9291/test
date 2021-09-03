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

  it('Fracture_C2', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });
    clickElement('spi_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('spi_m_060107');

    clickElement('spi_m_060203', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C2]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    elementShouldBeEnabled('spi_m_060315');
    elementShouldBeEnabled('spi_m_060316');

    clickElement('spi_m_060315', true, 'radio');
    elementShouldBeEnabled('spi_m_0604104');
    elementShouldBeEnabled('spi_m_0604105');
    elementShouldBeEnabled('spi_m_0604106');
    elementShouldBeEnabled('spi_m_0604107');

    clickElement('spi_m_0604104', true, 'radio');
    elementShouldBeEnabled('spi_m_0604104');
    elementShouldBeEnabled('spi_m_0604105');
    elementShouldBeEnabled('spi_m_0604106');

    clickElement('spi_m_0604106', true, 'radio');
    elementShouldBeEnabled('spi_m_060575');
    elementShouldBeEnabled('spi_m_060576');
    elementShouldBeEnabled('spi_m_060577');
    elementShouldBeEnabled('spi_m_060578');

    clickElement('spi_m_0604107', true, 'radio');
    elementShouldBeEnabled('spi_m_060570');
    elementShouldBeEnabled('spi_m_060571');
    elementShouldBeEnabled('spi_m_060572');
    clickElement('spi_m_060572', true, 'checkbox');

    elementShouldBeEnabled('spi_m_060573');
    elementShouldBeEnabled('spi_m_060574');

    clickElement('spi_m_060316', true, 'radio');

    elementShouldBeEnabled('spi_m_0604108');
    elementShouldBeEnabled('spi_m_0604109');
  });
});
