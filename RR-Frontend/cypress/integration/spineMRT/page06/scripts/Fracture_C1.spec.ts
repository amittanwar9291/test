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

context('page 06 spine mrt', () => {
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

  it('Fracture_C0.spec', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);
    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C0]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C1]')
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
      .shadowFind('[rr-id=spi_m_010104-C1]')
      .click({ force: true });

    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    elementShouldBeEnabled('spi_m_060307');
    elementShouldBeEnabled('spi_m_060308');
    elementShouldBeEnabled('spi_m_060309');
    elementShouldBeEnabled('spi_m_060310');
    elementShouldBeEnabled('spi_m_060311');
    elementShouldBeEnabled('spi_m_060312');
    elementShouldBeEnabled('spi_m_060313');

    clickElement('spi_m_060313', true, 'radio');
    elementShouldBeEnabled('spi_m_060415');
    elementShouldBeEnabled('spi_m_060416');

    clickElement('spi_m_060312', true, 'radio');

    elementShouldBeEnabled('spi_m_060411');
    clickElement('spi_m_060411', true, 'radio');

    elementShouldBeEnabled('spi_m_060412');

    elementShouldBeEnabled('spi_m_060413');
    clickElement('spi_m_060413', true, 'radio');
    elementShouldBeEnabled('spi_m_060414');
  });
});
