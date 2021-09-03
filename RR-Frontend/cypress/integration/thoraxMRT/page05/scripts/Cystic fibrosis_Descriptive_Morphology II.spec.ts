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
  it('Cystic fibrosis_Descriptive_Morphology I.spec', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('5')
      .click({ force: true });

    clickElement('tho_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('tho_m_050205');
    elementShouldBeEnabled('tho_m_050206');

    clickElement('tho_m_050206', true, 'radio');
    elementShouldBeEnabled('tho_m_050310');
    elementShouldBeEnabled('tho_m_050415');

    cy.byRRID('tho_m_050415').click();
    elementShouldBeEnabled('tho_m_050315');
    elementShouldBeEnabled('tho_m_050319');
    elementShouldBeEnabled('tho_m_050421');
    elementShouldBeEnabled('tho_m_050506');

    clickElement('tho_m_050315', true, 'checkbox');
    elementShouldBeEnabled('tho_m_050317');
    elementShouldBeEnabled('tho_m_050318');

    clickElement('tho_m_050319', true, 'checkbox');
    elementShouldBeEnabled('tho_m_050320');
    elementShouldBeEnabled('tho_m_050321');
    elementShouldBeEnabled('tho_m_050323');

    clickElement('tho_m_050421', true, 'checkbox');
    elementShouldBeEnabled('tho_m_050423');
    elementShouldBeEnabled('tho_m_050424');
    elementShouldBeEnabled('tho_m_050425');

    clickElement('tho_m_050425', true, 'checkbox');
    elementShouldBeEnabled('tho_m_050427');
    elementShouldBeEnabled('tho_m_050428');

    clickElement('tho_m_050506', true, 'checkbox');
    elementShouldBeEnabled('tho_m_050509');
  });
});
