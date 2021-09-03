import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxCTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_c_080107', 'tho_c_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxCT', config).then(id => {
          pageId = id;
          cy.visit(thoraxCTRoutes.ThoraxCT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Fracture of Spine multiple selection', () => {
      clickElement('tho_c_080105', true, 'radio');
      elementShouldBeEnabled('tho_c_080106-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('tho_c_080107');
      cy.get('.localizer').click();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-T1').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      elementShouldBeEnabled('tho_c_0802217');
      elementShouldBeEnabled('tho_c_0802218');
    });
  });
});
