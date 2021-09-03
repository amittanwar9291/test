import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
    it('Bones -> Spinal Fracture 2 or more Bones', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(4);
      cy.get('.localizer').click();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C3').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-T3').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      elementShouldBeEnabled('tho_m_070280');
      elementShouldBeEnabled('tho_m_070227');
    });
  });
});
