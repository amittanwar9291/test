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

  it('Fracture Distal Radius', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('han_m_040107');
    elementShouldBeEnabled('han_m_040205');

    clickElement('han_m_040205');

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__list-element')
      .eq(0)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.localizer__close-button')
      .click();

    elementShouldBeEnabled('han_m_040333');
    elementShouldBeEnabled('han_m_040334');
    elementShouldBeEnabled('han_m_040335');
    elementShouldBeEnabled('han_m_040336');

    clickElement('han_m_040333', true, 'radio');
    elementShouldBeEnabled('han_m_040423');
    elementShouldBeEnabled('han_m_040424');
    elementShouldBeEnabled('han_m_040425');

    clickElement('han_m_040424', true, 'radio');
    elementShouldBeEnabled('han_m_040501');
    elementShouldBeEnabled('han_m_040502');
    elementShouldBeEnabled('han_m_040503');

    clickElement('han_m_040425', true, 'radio');
    elementShouldBeEnabled('han_m_040504');
    elementShouldBeEnabled('han_m_040505');
    elementShouldBeEnabled('han_m_040506');

    clickElement('han_m_040334', true, 'radio');
    elementShouldBeEnabled('han_m_040426');
    elementShouldBeEnabled('han_m_040427');
    elementShouldBeEnabled('han_m_040428');

    clickElement('han_m_040426', true, 'radio');
    elementShouldBeEnabled('han_m_040507');
    elementShouldBeEnabled('han_m_040508');

    clickElement('han_m_040427', true, 'radio');
    elementShouldBeEnabled('han_m_040509');
    elementShouldBeEnabled('han_m_040510');
    elementShouldBeEnabled('han_m_040511');

    clickElement('han_m_040428', true, 'radio');
    elementShouldBeEnabled('han_m_040512');
    elementShouldBeEnabled('han_m_040513');

    clickElement('han_m_040335', true, 'radio');
    elementShouldBeEnabled('han_m_040429');
    elementShouldBeEnabled('han_m_040430');
    elementShouldBeEnabled('han_m_040431');

    clickElement('han_m_040429', true, 'radio');
    elementShouldBeEnabled('han_m_040514');
    elementShouldBeEnabled('han_m_040515');
    elementShouldBeEnabled('han_m_040516');

    clickElement('han_m_040514', true, 'radio');
    elementShouldBeEnabled('han_m_0405108');
    elementShouldBeEnabled('han_m_0405109');

    clickElement('han_m_040430', true, 'radio');
    elementShouldBeEnabled('han_m_040517');
    elementShouldBeEnabled('han_m_040518');
    elementShouldBeEnabled('han_m_040519');

    clickElement('han_m_040431', true, 'radio');
    elementShouldBeEnabled('han_m_040520');
    elementShouldBeEnabled('han_m_040521');
    elementShouldBeEnabled('han_m_040522');

    clickElement('han_m_040336', true, 'radio');
    elementShouldBeEnabled('han_m_0404100');
    elementShouldBeEnabled('han_m_0404101');
  });
});
