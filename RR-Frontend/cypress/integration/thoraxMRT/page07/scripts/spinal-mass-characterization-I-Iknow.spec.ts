import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Spinal Mass -> Characterization I -> I know', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(9);
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('tho_m_070228');
      elementShouldBeEnabled('tho_m_070347');
      elementShouldBeEnabled('tho_m_070427');
      elementShouldBeEnabled('tho_m_070529');

      cy.get('.localizer').click();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C3').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      elementShouldBeEnabled('tho_m_070278');

      elementShouldBeEnabled('tho_m_070378');
      elementShouldBeEnabled('tho_m_070379');
      elementShouldBeEnabled('tho_m_070384');
      elementShouldBeEnabled('tho_m_070429');
      elementShouldBeEnabled('tho_m_070430');

      elementShouldBeEnabled('tho_m_070432');
      elementShouldBeEnabled('tho_m_070433');
      elementShouldBeEnabled('tho_m_070435');
      elementShouldBeEnabled('tho_m_070436');
      elementShouldBeEnabled('tho_m_070437');
      elementShouldBeEnabled('tho_m_070438');

      elementShouldBeEnabled('tho_m_070531');
      elementShouldBeEnabled('tho_m_070532');
      elementShouldBeEnabled('tho_m_070533');
      elementShouldBeEnabled('tho_m_070534');
      elementShouldBeEnabled('tho_m_070535');
      elementShouldBeEnabled('tho_m_070537');
      elementShouldBeEnabled('tho_m_070538');

      clickElement('tho_m_070379', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070380');
      elementShouldBeEnabled('tho_m_070381');

      cy.byRRID('tho_m_070384').type('25');
      elementShouldBeEnabled('tho_m_070387');

      cy.byRRID('tho_m_070387').type('32');
      elementShouldBeEnabled('tho_m_070390');
    });
  });
});
