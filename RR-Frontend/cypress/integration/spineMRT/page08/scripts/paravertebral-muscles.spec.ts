import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { spineMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

const findingColumn = new FindingColumnPageObject('spi_m_080109', 'none-');

context('Spine Page 08 - Paravertebral soft tissues', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

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

  describe('Paravertebral Muscles', () => {
    it('Paravertebral Muscles', () => {
      clickElement('spi_m_010106', true, 'radio');
      cy.byRRID('spi_m_010104').shadowClick();

      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C0').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C1').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C2').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C3').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C4').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C5').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C6').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();

      cy.wait(2000);
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

      cy.get('rr-top-navigation')
        .contains('8')
        .click();

      elementShouldBeEnabled('spi_m_060104');
      elementShouldBeEnabled('spi_m_060105');
      clickElement('spi_m_060105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('spi_m_080109');
      elementShouldBeEnabled('spi_m_080202');
      elementShouldBeEnabled('spi_m_080301');

      elementShouldBeEnabled('spi_m_080250');
      elementShouldBeEnabled('spi_m_080251');
      elementShouldBeEnabled('spi_m_080252');
      elementShouldBeEnabled('spi_m_080253');
      elementShouldBeEnabled('spi_m_080254');
      elementShouldBeEnabled('spi_m_080255');

      elementShouldBeEnabled('spi_m_080428');
      elementShouldBeEnabled('spi_m_080429');
      elementShouldBeEnabled('spi_m_080430');
      elementShouldBeEnabled('spi_m_080431');

      cy.byRRID('spi_m_080301').click();

      elementShouldBeEnabled('spi_m_080257');
      elementShouldBeEnabled('spi_m_080362');
      elementShouldBeEnabled('spi_m_080525');
      elementShouldBeEnabled('spi_m_080526');
      elementShouldBeEnabled('spi_m_080527');
      elementShouldBeEnabled('spi_m_080530');
      elementShouldBeEnabled('spi_m_080531');

      clickElement('spi_m_080257', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080259');
      elementShouldBeEnabled('spi_m_080260');
      elementShouldBeEnabled('spi_m_080261');
      elementShouldBeEnabled('spi_m_080262');

      clickElement('spi_m_080362', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080364');
      elementShouldBeEnabled('spi_m_080365');
      elementShouldBeEnabled('spi_m_080366');
      elementShouldBeEnabled('spi_m_080368');
      elementShouldBeEnabled('spi_m_080370');

      elementShouldBeEnabled('spi_m_080433');
      elementShouldBeEnabled('spi_m_080434');
      elementShouldBeEnabled('spi_m_080435');
      elementShouldBeEnabled('spi_m_080436');

      clickElement('spi_m_080527', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080528');
      elementShouldBeEnabled('spi_m_080529');

      clickElement('spi_m_080531', true, 'checkbox');
      elementShouldBeEnabled('spi_m_080532');
    });
  });
});
