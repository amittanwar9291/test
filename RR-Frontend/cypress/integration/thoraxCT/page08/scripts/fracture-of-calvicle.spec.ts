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
    it('Bones -> Fracture of clavicle', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('tho_c_080107');
      elementShouldBeEnabled('tho_c_080203');
      elementShouldBeEnabled('tho_c_080204');
      elementShouldBeEnabled('tho_c_0803201');
      elementShouldBeEnabled('tho_c_0805200');
      elementShouldBeEnabled('tho_c_0805208');

      clickElement('tho_c_0803201', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0803203');
      elementShouldBeEnabled('tho_c_0803208');
      elementShouldBeEnabled('tho_c_0804200');
      elementShouldBeEnabled('tho_c_0804204');

      clickElement('tho_c_0803203', true, 'radio');
      elementShouldBeEnabled('tho_c_0803205');
      elementShouldBeEnabled('tho_c_0803206');
      elementShouldBeEnabled('tho_c_0803207');

      clickElement('tho_c_0803208', true, 'radio');
      elementShouldBeEnabled('tho_c_0803210');
      elementShouldBeEnabled('tho_c_0803211');
      elementShouldBeEnabled('tho_c_0803212');

      clickElement('tho_c_0804200', true, 'radio');
      elementShouldBeEnabled('tho_c_0804202');
      elementShouldBeEnabled('tho_c_0804203');
      elementShouldBeEnabled('tho_c_0804234');

      clickElement('tho_c_0804204', true, 'radio');
      elementShouldBeEnabled('tho_c_0804205');
      elementShouldBeEnabled('tho_c_0804232');

      clickElement('tho_c_0805200', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0805202');
      elementShouldBeEnabled('tho_c_0805203');
      elementShouldBeEnabled('tho_c_0805204');
      elementShouldBeEnabled('tho_c_0805205');
      elementShouldBeEnabled('tho_c_0805206');
      elementShouldBeEnabled('tho_c_0805207');

      clickElement('tho_c_0805208', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0805210');
      elementShouldBeEnabled('tho_c_0805211');
      elementShouldBeEnabled('tho_c_0805212');
    });
  });
});
