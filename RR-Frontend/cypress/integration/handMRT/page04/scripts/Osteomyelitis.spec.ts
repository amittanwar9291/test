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

  it('Osteomyelitis', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(7);
    elementShouldBeEnabled('han_m_040107');
    elementShouldBeEnabled('han_m_0402103');

    clickElement('han_m_0402103', true);

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(8)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    elementShouldBeEnabled('han_m_0402105');
    elementShouldBeEnabled('han_m_0402106');
    elementShouldBeEnabled('han_m_0402108');
    elementShouldBeEnabled('han_m_0402109');

    elementShouldBeEnabled('han_m_0403250');
    elementShouldBeEnabled('han_m_0403251');

    elementShouldBeEnabled('han_m_0404117');
    elementShouldBeEnabled('han_m_0405111');
    elementShouldBeEnabled('han_m_0405112');
    elementShouldBeEnabled('han_m_0405113');
    elementShouldBeEnabled('han_m_0405114');
    elementShouldBeEnabled('han_m_0405115');
    elementShouldBeEnabled('han_m_0405119');
    elementShouldBeEnabled('han_m_0405121');
    elementShouldBeEnabled('han_m_0405122');

    clickElement('han_m_0403251', true, 'checkbox');
    elementShouldBeEnabled('han_m_0403253');
    elementShouldBeEnabled('han_m_0403262');
    elementShouldBeEnabled('han_m_0403264');

    cy.byRRID('han_m_0403253').type('12');
    elementShouldBeEnabled('han_m_0403256');
    cy.byRRID('han_m_0403256').type('34');
    elementShouldBeEnabled('han_m_0403259');

    clickElement('han_m_0404117');
    elementShouldBeEnabled('han_m_0404119');
    cy.byRRID('han_m_0404119').type('12');
    elementShouldBeEnabled('han_m_0404122');
    cy.byRRID('han_m_0404122').type('34');
    elementShouldBeEnabled('han_m_0404125');
    elementShouldBeEnabled('han_m_0404129');

    clickElement('han_m_0405115');
    elementShouldBeEnabled('han_m_0405117');

    clickElement('han_m_0405122', true, 'radio');
    elementShouldBeEnabled('han_m_0405123');
  });
});
