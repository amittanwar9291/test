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

  it('Fracture Proximal phalanx', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('han_m_040107');
    elementShouldBeEnabled('han_m_040205');

    clickElement('han_m_040205');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(13)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    elementShouldBeEnabled('han_m_040378');
    elementShouldBeEnabled('han_m_040379');
    elementShouldBeEnabled('han_m_040380');
    elementShouldBeEnabled('han_m_040381');

    clickElement('han_m_040378', true, 'radio');
    elementShouldBeEnabled('han_m_040445');
    elementShouldBeEnabled('han_m_040446');
    elementShouldBeEnabled('han_m_040447');

    clickElement('han_m_040379', true, 'radio');
    elementShouldBeEnabled('han_m_040448');
    elementShouldBeEnabled('han_m_040449');
    elementShouldBeEnabled('han_m_040450');

    clickElement('han_m_040380', true, 'radio');
    elementShouldBeEnabled('han_m_040451');
    elementShouldBeEnabled('han_m_040452');
    elementShouldBeEnabled('han_m_040453');

    clickElement('han_m_040381', true, 'radio');
    elementShouldBeEnabled('han_m_0404100');
    elementShouldBeEnabled('han_m_0404101');
  });
});
