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
    it('Bones -> Fracture of Ribs-Multiple Selection', () => {
      clickElement('tho_c_080105', true, 'radio');
      elementShouldBeEnabled('tho_c_080106-1');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('tho_c_080107');
      cy.get('.ribs-container').click();

      cy.get('.pointer')
        .eq(12)
        .click({ force: true });
      cy.get('.pointer')
        .eq(7)
        .click({ force: true });
      cy.get('.cls-3')
        .eq(1)
        .click({ force: true });
    });
  });
});
