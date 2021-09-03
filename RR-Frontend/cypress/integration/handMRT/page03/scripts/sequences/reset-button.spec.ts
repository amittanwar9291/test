import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../../shared/service';
import { signIn } from '../../../../../shared/requests';
import { createReport } from '../../../../../shared/report-creation';
import { testUser } from '../../../../../shared/test-usert';
import { handMRTRoutes } from '../../../../../../src/environments/pages-routes';
import { FindingColumnPageObject } from '../../../../../page objects/finding-column-page-object';

context('Hand page03 - Contrast Enchanced', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('uni_x_030211', 'uni_x_030210-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Sequences', () => {
    it('RESET Button', () => {
      cy.byRRID('uni_x_030110').click();
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030210-1');
      findingColumn.selectFindingOptionByAppearance(1);
      cy.byRRID('uni_x_030421').click();
      cy.get('.btnOk').click();
      cy.byRRID('uni_x_030210-1').should('not.be.undefined');
      cy.byRRID('uni_x_030210-1').should('not.be.empty');
    });
  });
});
