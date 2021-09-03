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
    it('Bones -> Spinal Fracture 1 Bone', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(4);
      cy.get('.localizer').click();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_010104-C7').shadowClick();
      cy.shadowRRIdFind('rr-spine-complex', 'spi_m_0201501').shadowClick();
      elementShouldBeEnabled('tho_m_070341');
      elementShouldBeEnabled('tho_m_070457');
      elementShouldBeEnabled('tho_m_070461');
      elementShouldBeEnabled('tho_m_070517');
      elementShouldBeEnabled('tho_m_070520');

      clickElement('tho_m_070341', true, 'radio');
      elementShouldBeEnabled('tho_m_070342');
      elementShouldBeEnabled('tho_m_070343');
      elementShouldBeEnabled('tho_m_070344');
      elementShouldBeEnabled('tho_m_070345');
      elementShouldBeEnabled('tho_m_070346');

      clickElement('tho_m_070457', true, 'radio');
      elementShouldBeEnabled('tho_m_070458');
      elementShouldBeEnabled('tho_m_070459');
      elementShouldBeEnabled('tho_m_070460');

      clickElement('tho_m_070517', true, 'radio');
      elementShouldBeEnabled('tho_m_070518');
      elementShouldBeEnabled('tho_m_070519');

      clickElement('tho_m_070520', true, 'radio');
      elementShouldBeEnabled('tho_m_070522');
      elementShouldBeEnabled('tho_m_070523');
      elementShouldBeEnabled('tho_m_070525');
      elementShouldBeEnabled('tho_m_070527');

      clickElement('tho_m_070523', true, 'radio');
      elementShouldBeEnabled('tho_m_070524');

      clickElement('tho_m_070525', true, 'radio');
      elementShouldBeEnabled('tho_m_070526');
    });
  });
});
