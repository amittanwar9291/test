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

context('Page 04 - ThoraxMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

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

  it('Cardiovascular/Heart', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040219');
    elementShouldBeEnabled('tho_m_040225');
    elementShouldBeEnabled('tho_m_040326');

    clickElement('tho_m_040219');
    elementShouldBeEnabled('tho_m_040220');
    elementShouldBeEnabled('tho_m_040221');
    elementShouldBeEnabled('tho_m_040222');
    elementShouldBeEnabled('tho_m_040223');
    elementShouldBeEnabled('tho_m_040224');

    clickElement('tho_m_040225', true, 'checkbox');
    elementShouldBeEnabled('tho_m_040226');
    elementShouldBeEnabled('tho_m_040227');
    elementShouldBeEnabled('tho_m_040228');
    elementShouldBeEnabled('tho_m_040229');

    clickElement('tho_m_040326', true, 'checkbox');
    elementShouldBeEnabled('tho_m_040327');
    elementShouldBeEnabled('tho_m_040330');
    elementShouldBeEnabled('tho_m_040333');
    elementShouldBeEnabled('tho_m_040335');

    clickElement('tho_m_040327');
    elementShouldBeEnabled('tho_m_040328');

    clickElement('tho_m_040330');
    elementShouldBeEnabled('tho_m_040331');

    clickElement('tho_m_040335');
    elementShouldBeEnabled('tho_m_040336');
    elementShouldBeEnabled('tho_m_040337');
    elementShouldBeEnabled('tho_m_040338');
    elementShouldBeEnabled('tho_m_040340');
  });
});
