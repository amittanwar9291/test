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
    it('Bones -> Fracture of sternum', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('tho_c_0803217');
      elementShouldBeEnabled('tho_c_0803222');
      elementShouldBeEnabled('tho_c_0804209');
      elementShouldBeEnabled('tho_c_0805230');

      clickElement('tho_c_0803217', true, 'radio');
      elementShouldBeEnabled('tho_c_0803219');
      elementShouldBeEnabled('tho_c_0803220');
      elementShouldBeEnabled('tho_c_0803221');

      clickElement('tho_c_0803222', true, 'radio');
      elementShouldBeEnabled('tho_c_0803224');
      elementShouldBeEnabled('tho_c_0803225');
      elementShouldBeEnabled('tho_c_0803226');

      clickElement('tho_c_0804209', true, 'radio');
      elementShouldBeEnabled('tho_c_0804211');
      elementShouldBeEnabled('tho_c_0804212');
      elementShouldBeEnabled('tho_c_0804213');

      clickElement('tho_c_0805230', true, 'radio');
      elementShouldBeEnabled('tho_c_0805231');
    });
  });
});
