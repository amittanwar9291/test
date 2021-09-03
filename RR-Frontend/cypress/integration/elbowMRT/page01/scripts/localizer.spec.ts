import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 01 - Patient data', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Patient Data', () => {
    it('Selecting from Localizer', () => {
      // Temporary replacement of the code below

      cy.get('.m-t-7')
        .shadowFind('#L')
        .click();
      cy.get('.m-t-7')
        .shadowFind('#left-elbow')
        .should('have.class', 'elbow__part--checked');

      cy.get('.m-t-7')
        .shadowFind('#R')
        .click();
      cy.get('.m-t-7')
        .shadowFind('#right-elbow')
        .should('have.class', 'elbow__part--checked');

      cy.get('.m-t-7')
        .shadowFind('#left-elbow')
        .should('not.have.class', 'elbow__part--checked');

      // TODO The code below should work when elb_m_010105 will be updated in the code

      /* cy.byRRID('elb_m_010105')
        .shadowFind('#L')
        .shadowClick();

      cy.byRRID('elb_m_010105')
        .shadowFind('#L')
        .should('have.class', 'knee__name--checked');

      cy.byRRID('elb_m_010105')
        .shadowFind('#R')
        .shadowClick();

      cy.byRRID('elb_m_010105')
        .shadowFind('#R')
        .should('have.class', 'knee__name--checked');

      cy.byRRID('elb_m_010105')
        .shadowFind('#L')
        .should('not.have.class', 'knee__name--checked');
        */
    });
  });
});
