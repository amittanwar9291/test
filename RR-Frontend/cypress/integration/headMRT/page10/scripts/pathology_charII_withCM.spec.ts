import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeChecked, elementShouldBeEnabled, getAppConfig, visitPageNumber } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 10 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hea_m_100107', 'hea_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Characterization II Pathology with CM', () => {
    clickElement('uni_x_030104', true, 'radio');
    visitPageNumber(10);
    clickElement('hea_m_100105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);
    clickElement('hea_m_100401');

    elementShouldBeEnabled('hea_m_100242');
    elementShouldBeEnabled('hea_m_100219');

    elementShouldBeEnabled('hea_m_100318');
    elementShouldBeEnabled('hea_m_100319');
    elementShouldBeEnabled('hea_m_100320');
    elementShouldBeEnabled('hea_m_100321');
    elementShouldBeEnabled('hea_m_100323');

    elementShouldBeEnabled('hea_m_100427');
    elementShouldBeEnabled('hea_m_100431');
    elementShouldBeEnabled('hea_m_1004333');

    elementShouldBeEnabled('hea_m_100534');
    elementShouldBeEnabled('hea_m_100535');
    elementShouldBeEnabled('hea_m_100523');
    elementShouldBeEnabled('hea_m_100526');

    elementShouldBeEnabled('hea_m_100313');
    elementShouldBeEnabled('hea_m_100315');
    elementShouldBeEnabled('hea_m_100317');

    clickElement('hea_m_100242', true, 'checkbox');
    elementShouldBeChecked('hea_m_100242');
    clickElement('hea_m_100219', true, 'checkbox');
    elementShouldBeChecked('hea_m_100219');

    clickElement('hea_m_100318', true, 'checkbox');
    elementShouldBeChecked('hea_m_100318');
    clickElement('hea_m_100319', true, 'checkbox');
    elementShouldBeChecked('hea_m_100319');
    clickElement('hea_m_100320', true, 'checkbox');
    elementShouldBeChecked('hea_m_100320');
    clickElement('hea_m_100321', true, 'checkbox');
    elementShouldBeChecked('hea_m_100321');
    clickElement('hea_m_100323', true, 'checkbox');
    elementShouldBeChecked('hea_m_100323');
    elementShouldBeEnabled('hea_m_100325');
    elementShouldBeEnabled('hea_m_100326');
    clickElement('hea_m_100325', true, 'radio');
    elementShouldBeChecked('hea_m_100325');
    clickElement('hea_m_100326', true, 'radio');
    elementShouldBeChecked('hea_m_100326');

    clickElement('hea_m_100427', true, 'checkbox');
    elementShouldBeChecked('hea_m_100427');
    elementShouldBeEnabled('hea_m_100429');
    elementShouldBeEnabled('hea_m_100430');
    clickElement('hea_m_100429', true, 'radio');
    elementShouldBeChecked('hea_m_100429');
    clickElement('hea_m_100430', true, 'radio');
    elementShouldBeChecked('hea_m_100430');

    clickElement('hea_m_100431', true, 'checkbox');
    elementShouldBeChecked('hea_m_100431');
    elementShouldBeEnabled('hea_m_100432');
    clickElement('hea_m_100432', true, 'checkbox');

    clickElement('hea_m_1004333', true, 'checkbox');
    elementShouldBeChecked('hea_m_1004333');
    elementShouldBeEnabled('hea_m_100434');
    clickElement('hea_m_100434', true, 'checkbox');

    clickElement('hea_m_100534', true, 'radio');
    elementShouldBeChecked('hea_m_100534');

    clickElement('hea_m_100535', true, 'radio');
    elementShouldBeChecked('hea_m_100535');
    elementShouldBeEnabled('hea_m_100524');
    elementShouldBeEnabled('hea_m_100525');
    elementShouldBeEnabled('hea_m_100527');
    elementShouldBeEnabled('hea_m_100528');
    elementShouldBeEnabled('hea_m_100529');
    elementShouldBeEnabled('hea_m_100530');
    elementShouldBeEnabled('hea_m_100531');

    clickElement('hea_m_100523', true, 'radio');
    elementShouldBeChecked('hea_m_100523');
    elementShouldBeEnabled('hea_m_100524');
    elementShouldBeEnabled('hea_m_100525');
    elementShouldBeEnabled('hea_m_100527');
    elementShouldBeEnabled('hea_m_100528');
    elementShouldBeEnabled('hea_m_100529');
    elementShouldBeEnabled('hea_m_100530');
    elementShouldBeEnabled('hea_m_100531');

    clickElement('hea_m_100524', true, 'radio');
    elementShouldBeChecked('hea_m_100524');
    clickElement('hea_m_100525', true, 'radio');
    elementShouldBeChecked('hea_m_100525');
    clickElement('hea_m_100527', true, 'radio');
    elementShouldBeChecked('hea_m_100527');
    clickElement('hea_m_100528', true, 'radio');
    elementShouldBeChecked('hea_m_100528');
    clickElement('hea_m_100529', true, 'radio');
    elementShouldBeChecked('hea_m_100529');
    clickElement('hea_m_100530', true, 'radio');
    elementShouldBeChecked('hea_m_100530');
    clickElement('hea_m_100531', true, 'radio');
    elementShouldBeChecked('hea_m_100531');

    clickElement('hea_m_100526', true, 'checkbox');
    elementShouldBeChecked('hea_m_100526');
  });
});
