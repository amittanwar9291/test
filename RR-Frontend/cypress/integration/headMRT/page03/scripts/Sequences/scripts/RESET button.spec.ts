import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { headMRTRoutes } from '@environments/pages-routes';
import { getAppConfig, elementShouldBeEnabled, clickElement, selectDropdownOptionOS } from '../../../../../../shared/service';
import { signIn } from '../../../../../../shared/requests';
import { createReport } from '../../../../../../shared/report-creation';
import { testUser } from '../../../../../../shared/test-usert';

context('Page 3 - headMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  describe('Contrast Enchanced - Yes', () => {
    it('Reset Button', () => {
      cy.byRRID('uni_x_030110').click();
      cy.byRRID('uni_x_030105').click({ force: true });
      clickElement('uni_x_030109', true, 'radio');
      elementShouldBeEnabled('uni_x_030210-1');
      selectDropdownOptionOS('uni_x_030210-1', 2, true, true);
      cy.byRRID('uni_x_030421').click();
      cy.get('.btnOk').click();
      cy.byRRID('uni_x_030210-1').should('not.be.undefined');
      cy.byRRID('uni_x_030210-1').should('not.be.empty');
    });
  });
});
