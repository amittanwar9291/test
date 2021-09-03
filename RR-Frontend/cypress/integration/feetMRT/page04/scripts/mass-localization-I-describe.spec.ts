import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 04 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_040107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Localization I Describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('anc_m_040107');

    elementShouldBeEnabled('anc_m_040222');
    elementShouldBeEnabled('anc_m_0403107');
    elementShouldBeEnabled('anc_m_0404126');
    elementShouldBeEnabled('anc_m_0405200');

    elementShouldBeEnabled('anc_m_040207');
    elementShouldBeEnabled('anc_m_0403234');
    elementShouldBeEnabled('anc_m_0403235');
    elementShouldBeEnabled('anc_m_0403236');
    elementShouldBeEnabled('anc_m_0404208');
    cy.byRRID('anc_m_0404208').type('20');
    elementShouldBeEnabled('anc_m_0404211');
    cy.byRRID('anc_m_0404211').type('30');
    elementShouldBeEnabled('anc_m_0404214');
  });
});
