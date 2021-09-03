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

  it('Osteonecrosis_Os scaphoideum', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('han_m_040207');
    clickElement('han_m_040207', true);

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(0)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    elementShouldBeEnabled('han_m_040389');
    elementShouldBeEnabled('han_m_040390');
    elementShouldBeEnabled('han_m_040391');
    elementShouldBeEnabled('han_m_040392');

    elementShouldBeEnabled('han_m_0403235');
    elementShouldBeEnabled('han_m_0403236');
  });
});
