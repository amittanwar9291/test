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
    it('Bones -> Mass Calvicle Characterization II -> I describe', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('tho_c_080107');
      elementShouldBeEnabled('tho_c_080345');
      elementShouldBeEnabled('tho_c_080429');
      cy.byRRID('tho_c_080345').click();

      elementShouldBeEnabled('tho_c_0803201');
      elementShouldBeEnabled('tho_c_0802206');
      elementShouldBeEnabled('tho_c_0802207');
      elementShouldBeEnabled('tho_c_0802208');
      elementShouldBeEnabled('tho_c_0802209');
      elementShouldBeEnabled('tho_c_0802210');
      elementShouldBeEnabled('tho_c_0802211');
      elementShouldBeEnabled('tho_c_0802212');
      elementShouldBeEnabled('tho_c_0802213');

      elementShouldBeEnabled('tho_c_0803229');
      elementShouldBeEnabled('tho_c_0803230');
      elementShouldBeEnabled('tho_c_0803231');
      elementShouldBeEnabled('tho_c_0803232');
      elementShouldBeEnabled('tho_c_0803233');
      elementShouldBeEnabled('tho_c_0803235');
      elementShouldBeEnabled('tho_c_0803236');
      elementShouldBeEnabled('tho_c_0803237');

      elementShouldBeEnabled('tho_c_080445');
      elementShouldBeEnabled('tho_c_080446');
      elementShouldBeEnabled('tho_c_080450');

      elementShouldBeEnabled('tho_c_080522');
      elementShouldBeEnabled('tho_c_0805223');
      elementShouldBeEnabled('tho_c_0805100');

      clickElement('tho_c_0803201', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0802203');
      elementShouldBeEnabled('tho_c_0802204');
      elementShouldBeEnabled('tho_c_0802205');

      clickElement('tho_c_0803233', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0803234');

      clickElement('tho_c_080446', true, 'radio');
      elementShouldBeEnabled('tho_c_080447');
      elementShouldBeEnabled('tho_c_080448');

      clickElement('tho_c_080450', true, 'radio');
      elementShouldBeEnabled('tho_c_0804222');
      elementShouldBeEnabled('tho_c_080451');
      elementShouldBeEnabled('tho_c_080452');

      clickElement('tho_c_080522', true, 'checkbox');
      elementShouldBeEnabled('tho_c_080523');
      elementShouldBeEnabled('tho_c_080524');

      clickElement('tho_c_0805223', true, 'checkbox');
      elementShouldBeEnabled('tho_c_0805224');
    });
  });
});
