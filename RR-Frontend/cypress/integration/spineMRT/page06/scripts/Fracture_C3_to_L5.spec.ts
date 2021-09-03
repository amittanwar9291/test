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
  it('Fracture_C3_to_L5.spec', () => {
    clickElement('spi_m_010106', true, 'radio');
    clickElement('spi_m_010104', true);

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-C3]')
      .click({ force: true });

    cy.get('.large-localizer > .ng-valid')
      .shadowFind('[rr-id=spi_m_010104-L5]')
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
      .shadowFind('[rr-id=spi_m_010104-L5]')
      .click({ force: true });
    cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

    elementShouldBeEnabled('spi_m_060320');
    elementShouldBeEnabled('spi_m_060321');
    elementShouldBeEnabled('spi_m_060322');

    clickElement('spi_m_060320', true, 'radio');
    elementShouldBeEnabled('spi_m_060430');
    elementShouldBeEnabled('spi_m_060431');
    elementShouldBeEnabled('spi_m_060432');

    clickElement('spi_m_060430', true, 'radio');
    elementShouldBeEnabled('spi_m_060505');
    elementShouldBeEnabled('spi_m_060506');
    elementShouldBeEnabled('spi_m_060507');
    elementShouldBeEnabled('spi_m_060508');
    elementShouldBeEnabled('spi_m_060509');

    clickElement('spi_m_060431', true, 'radio');
    elementShouldBeEnabled('spi_m_060511');
    elementShouldBeEnabled('spi_m_060512');
    elementShouldBeEnabled('spi_m_060513');

    clickElement('spi_m_060321', true, 'radio');
    elementShouldBeEnabled('spi_m_060434');
    elementShouldBeEnabled('spi_m_060435');
    elementShouldBeEnabled('spi_m_060436');

    clickElement('spi_m_060434', true, 'radio');

    elementShouldBeEnabled('spi_m_060515');
    elementShouldBeEnabled('spi_m_060516');
    elementShouldBeEnabled('spi_m_060517');

    clickElement('spi_m_060322', true, 'radio');
    elementShouldBeEnabled('spi_m_060437');
    elementShouldBeEnabled('spi_m_060438');

    elementShouldBeEnabled('spi_m_060519');
    elementShouldBeEnabled('spi_m_060520');
    elementShouldBeEnabled('spi_m_060521');
    elementShouldBeEnabled('spi_m_060522');

    clickElement('spi_m_060522', true, 'radio');
    elementShouldBeEnabled('spi_m_060523');
    elementShouldBeEnabled('spi_m_060525');
  });
});
