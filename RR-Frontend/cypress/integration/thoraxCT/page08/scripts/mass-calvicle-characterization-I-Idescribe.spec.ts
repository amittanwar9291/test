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
    it('Bones -> Mass Calvicle Characterization -> I describe', () => {
      clickElement('tho_c_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      elementShouldBeEnabled('tho_c_080107');
      elementShouldBeEnabled('tho_c_080345');
      elementShouldBeEnabled('tho_c_080429');

      elementShouldBeEnabled('tho_c_080203');
      elementShouldBeEnabled('tho_c_080204');
      elementShouldBeEnabled('tho_c_0803227');

      elementShouldBeEnabled('tho_c_080356');
      elementShouldBeEnabled('tho_c_080357');
      elementShouldBeEnabled('tho_c_080358');

      elementShouldBeEnabled('tho_c_0804230');
      elementShouldBeEnabled('tho_c_0804231');
      elementShouldBeEnabled('tho_c_0804217');
      elementShouldBeEnabled('tho_c_0804218');
      elementShouldBeEnabled('tho_c_0804219');
      elementShouldBeEnabled('tho_c_0804220');
      elementShouldBeEnabled('tho_c_0804221');

      elementShouldBeEnabled('tho_c_080431');
      elementShouldBeEnabled('tho_c_080432');
      elementShouldBeEnabled('tho_c_080433');

      elementShouldBeEnabled('tho_c_0805233');
      elementShouldBeEnabled('tho_c_0805234');
      elementShouldBeEnabled('tho_c_0805235');

      elementShouldBeEnabled('tho_c_0805221');
      elementShouldBeEnabled('tho_c_0805222');

      cy.byRRID('tho_c_0803227').type('80');
      elementShouldBeEnabled('tho_c_080351');

      cy.byRRID('tho_c_080351').type('60');
      elementShouldBeEnabled('tho_c_080353');
    });
  });
});
