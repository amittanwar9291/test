import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectDropdownOptionOS } from '../../../../shared/service';
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
          cy.visit(handMRTRoutes.HandMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass DD describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('han_m_040107');

    cy.get('.ui-tabview-nav > :nth-child(4)').click();

    elementShouldBeEnabled('han_m_040289');
    elementShouldBeEnabled('han_m_0403171');

    selectDropdownOptionOS('han_m_040289', 4, true, true);
    elementShouldBeEnabled('han_m_040290');

    selectDropdownOptionOS('han_m_040292', 5, true, true);
    elementShouldBeEnabled('han_m_040293');

    selectDropdownOptionOS('han_m_040295', 6, true, true);

    clickElement('han_m_0403171');
    elementShouldBeEnabled('han_m_0403171');
  });
});
