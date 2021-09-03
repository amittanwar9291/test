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
    it('Bones -> Fracture of scapula', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('tho_c_080204');
      elementShouldBeEnabled('tho_c_080203');
      elementShouldBeEnabled('tho_c_080313');
      elementShouldBeEnabled('tho_c_080317');
      elementShouldBeEnabled('tho_c_080406');
      elementShouldBeEnabled('tho_c_080410');

      clickElement('tho_c_080313', true, 'radio');
      elementShouldBeEnabled('tho_c_080314');
      elementShouldBeEnabled('tho_c_080315');
      elementShouldBeEnabled('tho_c_080316');

      clickElement('tho_c_080317', true, 'radio');
      elementShouldBeEnabled('tho_c_080318');
      elementShouldBeEnabled('tho_c_080319');

      clickElement('tho_c_080406', true, 'radio');
      elementShouldBeEnabled('tho_c_080407');
      elementShouldBeEnabled('tho_c_080408');
      elementShouldBeEnabled('tho_c_080409');

      clickElement('tho_c_080410', true, 'radio');
      elementShouldBeEnabled('tho_c_080411');
      elementShouldBeEnabled('tho_c_0804233');
    });
  });
});
