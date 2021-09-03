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
  it('Fracture_Os coccygis', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-OS]')
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
      .shadowFind('[rr-id=spi_m_010104-OS]')
      .click({ force: true });
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    elementShouldBeEnabled('spi_m_060326');
    elementShouldBeEnabled('spi_m_060327');
    elementShouldBeEnabled('spi_m_060328');
    elementShouldBeEnabled('spi_m_060329');

    clickElement('spi_m_060326', true, 'radio');

    elementShouldBeEnabled('spi_m_060440');
    elementShouldBeEnabled('spi_m_060441');
    elementShouldBeEnabled('spi_m_060442');

    clickElement('spi_m_060327', true, 'radio');

    elementShouldBeEnabled('spi_m_060444');
    elementShouldBeEnabled('spi_m_060445');
    elementShouldBeEnabled('spi_m_060446');

    clickElement('spi_m_060328', true, 'radio');

    elementShouldBeEnabled('spi_m_060448');
    elementShouldBeEnabled('spi_m_060449');
    elementShouldBeEnabled('spi_m_060450');

    clickElement('spi_m_060329', true, 'radio');

    elementShouldBeEnabled('spi_m_060452');
  });
});
