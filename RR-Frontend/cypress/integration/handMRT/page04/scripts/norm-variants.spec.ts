import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_040107', 'han_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Norm variants', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('han_m_040203');
    elementShouldBeEnabled('han_m_0402100');
    elementShouldBeEnabled('han_m_0402101');
    elementShouldBeEnabled('han_m_0402102');

    clickElement('han_m_040203', true, 'radio');
    elementShouldBeEnabled('han_m_040304');
    elementShouldBeEnabled('han_m_040305');
    elementShouldBeEnabled('han_m_040306');
    elementShouldBeEnabled('han_m_040307');
    elementShouldBeEnabled('han_m_040308');
    elementShouldBeEnabled('han_m_040309');
    elementShouldBeEnabled('han_m_040310');
    elementShouldBeEnabled('han_m_040311');

    elementShouldBeEnabled('han_m_040402');
    elementShouldBeEnabled('han_m_040403');
    elementShouldBeEnabled('han_m_040404');
    elementShouldBeEnabled('han_m_040405');
    elementShouldBeEnabled('han_m_040406');
    elementShouldBeEnabled('han_m_040407');
    elementShouldBeEnabled('han_m_040408');
    elementShouldBeEnabled('han_m_040409');
    elementShouldBeEnabled('han_m_040410');
    elementShouldBeEnabled('han_m_040411');
    elementShouldBeEnabled('han_m_040412');

    clickElement('han_m_0402100', true, 'radio');
    elementShouldBeEnabled('han_m_040207');
    elementShouldBeEnabled('han_m_040413');
    elementShouldBeEnabled('han_m_040418');

    clickElement('han_m_040207');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(0)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(1)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(2)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(3)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(4)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(5)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(6)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(7)
      .click()
      .should('have.class', 'localizer__list-element--selected');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    clickElement('han_m_040413', true, 'radio');
    elementShouldBeEnabled('han_m_0405101');
    elementShouldBeEnabled('han_m_0405102');
    elementShouldBeEnabled('han_m_0405103');
    elementShouldBeEnabled('han_m_0405104');

    clickElement('han_m_040418', true, 'radio');
    elementShouldBeEnabled('han_m_0405106');
    elementShouldBeEnabled('han_m_0405107');

    clickElement('han_m_0402101', true, 'radio');
    elementShouldBeEnabled('han_m_040420');
    elementShouldBeEnabled('han_m_040421');

    clickElement('han_m_0402102', true, 'radio');
    elementShouldBeEnabled('han_m_0403201');
    elementShouldBeEnabled('han_m_0403202');

    clickElement('han_m_0403202', true, 'radio');
    elementShouldBeEnabled('han_m_0403203');
    elementShouldBeEnabled('han_m_0403204');
  });
});
