import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { feetMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Feet page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      cy.get('.o-list > .ng-touched')
        .shadowFind('.feet__part')
        .shadowEq(0)
        .shadowClick();

      cy.get('.o-list > .ng-touched')
        .shadowFind('.feet__part')
        .shadowEq(0)
        .should('have.class', 'feet__part--checked');

      cy.get('.o-list > .ng-touched')
        .shadowFind('.feet__part')
        .shadowEq(1)
        .shadowClick();

      cy.get('.o-list > .ng-touched')
        .shadowFind('.feet__part')
        .shadowEq(1)
        .should('have.class', 'feet__part--checked');
    });
  });
});
