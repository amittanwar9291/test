import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Hand page01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      cy.get('.m-t-27')
        .shadowFind('.hand__part')
        .shadowEq(0)
        .shadowClick();

      cy.get('.m-t-27')
        .shadowFind('.hand__part')
        .shadowEq(0)
        .should('have.class', 'hand__part--checked');

      cy.get('.m-t-27')
        .shadowFind('.hand__part')
        .shadowEq(1)
        .shadowClick();

      cy.get('.m-t-27')
        .shadowFind('.hand__part')
        .shadowEq(1)
        .should('have.class', 'hand__part--checked');
    });
  });
});
