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
    it('Bones -> Fracture of Ribs-Tx', () => {
      clickElement('tho_c_080105', true, 'radio');
      elementShouldBeEnabled('tho_c_080106-1');
      findingColumn.selectFindingOptionByAppearance(4);
      elementShouldBeEnabled('tho_c_080107');
      cy.get('.localizer').click();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-T4').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();

      elementShouldBeEnabled('tho_c_080339');
      elementShouldBeEnabled('tho_c_080422');
      elementShouldBeEnabled('tho_c_080426');
      elementShouldBeEnabled('tho_c_080427');
      elementShouldBeEnabled('tho_c_080502');

      clickElement('tho_c_080339', true, 'radio');
      elementShouldBeEnabled('tho_c_080340');
      elementShouldBeEnabled('tho_c_080341');
      elementShouldBeEnabled('tho_c_080342');
      elementShouldBeEnabled('tho_c_080343');
      elementShouldBeEnabled('tho_c_080344');

      clickElement('tho_c_080422', true, 'radio');
      elementShouldBeEnabled('tho_c_080423');
      elementShouldBeEnabled('tho_c_080424');
      elementShouldBeEnabled('tho_c_080425');

      clickElement('tho_c_080427', true, 'radio');
      elementShouldBeEnabled('tho_c_080428');

      clickElement('tho_c_080502', true, 'radio');
      elementShouldBeEnabled('tho_c_080503');
      elementShouldBeEnabled('tho_c_080504');
      elementShouldBeEnabled('tho_c_080505');
      elementShouldBeEnabled('tho_c_0805217');

      clickElement('tho_c_080504', true, 'radio');
      elementShouldBeEnabled('tho_c_0805215');

      clickElement('tho_c_080505', true, 'radio');
      elementShouldBeEnabled('tho_c_0805216');
    });
  });
});
