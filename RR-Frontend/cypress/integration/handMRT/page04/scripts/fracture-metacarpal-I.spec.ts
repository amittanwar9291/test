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

  it('Fracture metacarpal I', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('han_m_040107');
    elementShouldBeEnabled('han_m_040205');

    clickElement('han_m_040205');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(12)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    elementShouldBeEnabled('han_m_040373');
    elementShouldBeEnabled('han_m_040374');
    elementShouldBeEnabled('han_m_040375');
    elementShouldBeEnabled('han_m_040376');

    clickElement('han_m_040373', true, 'radio');
    elementShouldBeEnabled('han_m_040439');
    elementShouldBeEnabled('han_m_040440');
    elementShouldBeEnabled('han_m_040441');

    clickElement('han_m_040374', true, 'radio');
    elementShouldBeEnabled('han_m_0404102');
    elementShouldBeEnabled('han_m_0404103');
    elementShouldBeEnabled('han_m_0404104');

    clickElement('han_m_040375', true, 'radio');
    elementShouldBeEnabled('han_m_0404105');
    elementShouldBeEnabled('han_m_0404106');
    elementShouldBeEnabled('han_m_0404107');

    clickElement('han_m_040376', true, 'radio');
    elementShouldBeEnabled('han_m_0404100');
    elementShouldBeEnabled('han_m_0404101');
  });
});
