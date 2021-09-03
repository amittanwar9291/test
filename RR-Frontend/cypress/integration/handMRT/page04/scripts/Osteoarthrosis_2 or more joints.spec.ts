import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  it('Osteoarthrosis_2 or more joints', () => {
    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('han_m_040107');
    elementShouldBeEnabled('han_m_040219');

    clickElement('han_m_040219', true);

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.pointer')
      .eq(2)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.pointer')
      .eq(3)
      .click();

    cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
      .shadowFind('.pointer')
      .eq(54)
      .click({ force: true });

    elementShouldBeDisabled('han_m_040399');
    elementShouldBeDisabled('han_m_0403100');
    elementShouldBeDisabled('han_m_0403101');
    elementShouldBeDisabled('han_m_0403102');

    elementShouldBeDisabled('han_m_040394');
    elementShouldBeDisabled('han_m_040396');

    elementShouldBeDisabled('han_m_040397');
    elementShouldBeDisabled('han_m_0403104');
    elementShouldBeDisabled('han_m_0403105');
  });
});
