import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
context('Page 05 - Thoracic MRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_050106', 'tho_m_050106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });
  it('Cystic fibrosis_Quantitative.spec', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('tho_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('tho_m_050205');
    elementShouldBeEnabled('tho_m_050206');

    clickElement('tho_m_050205', true, 'radio');
    elementShouldBeEnabled('tho_m_0502116');
    elementShouldBeEnabled('tho_m_050306');
    elementShouldBeEnabled('tho_m_050308');
    elementShouldBeEnabled('tho_m_050412');
    elementShouldBeEnabled('tho_m_050414');
    elementShouldBeEnabled('tho_m_050502');
    elementShouldBeEnabled('tho_m_050504');
  });
});
