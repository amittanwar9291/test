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
    it('Bones -> Fracture of clavicle', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('tho_m_070203');
      elementShouldBeEnabled('tho_m_070204');
      elementShouldBeEnabled('tho_m_070302');
      elementShouldBeEnabled('tho_m_070501');
      elementShouldBeEnabled('tho_m_070509');

      clickElement('tho_m_070302', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070304');
      elementShouldBeEnabled('tho_m_070309');
      elementShouldBeEnabled('tho_m_070401');
      elementShouldBeEnabled('tho_m_070406');

      clickElement('tho_m_070304', true, 'radio');
      elementShouldBeEnabled('tho_m_070306');
      elementShouldBeEnabled('tho_m_070307');
      elementShouldBeEnabled('tho_m_070308');

      clickElement('tho_m_070309', true, 'radio');
      elementShouldBeEnabled('tho_m_070311');
      elementShouldBeEnabled('tho_m_070312');
      elementShouldBeEnabled('tho_m_070313');

      clickElement('tho_m_070401', true, 'radio');
      elementShouldBeEnabled('tho_m_070403');
      elementShouldBeEnabled('tho_m_070404');
      elementShouldBeEnabled('tho_m_070405');

      clickElement('tho_m_070406', true, 'radio');
      elementShouldBeEnabled('tho_m_070407');
      elementShouldBeEnabled('tho_m_070408');

      clickElement('tho_m_070501', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070503');
      elementShouldBeEnabled('tho_m_070504');
      elementShouldBeEnabled('tho_m_070505');
      elementShouldBeEnabled('tho_m_070506');
      elementShouldBeEnabled('tho_m_070507');
      elementShouldBeEnabled('tho_m_070508');

      clickElement('tho_m_070509', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070511');
      elementShouldBeEnabled('tho_m_070512');
      elementShouldBeEnabled('tho_m_070513');
    });
  });
});
