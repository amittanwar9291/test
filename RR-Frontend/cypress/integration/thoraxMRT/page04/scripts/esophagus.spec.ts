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
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Mediastinum.url + '/' + pageId);
        });
      });
    });
  });

  it('Esophagus', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040269');
    elementShouldBeEnabled('tho_m_040270');
    elementShouldBeEnabled('tho_m_040271');
    elementShouldBeEnabled('tho_m_040272');
    elementShouldBeEnabled('tho_m_040273');
    elementShouldBeEnabled('tho_m_040274');
    elementShouldBeEnabled('tho_m_040275');
    elementShouldBeEnabled('tho_m_040276');
    elementShouldBeEnabled('tho_m_040277');

    clickElement('tho_m_040270');
    elementShouldBeEnabled('tho_m_040371');
    elementShouldBeEnabled('tho_m_040372');
    elementShouldBeEnabled('tho_m_040373');

    clickElement('tho_m_040272');
    elementShouldBeEnabled('tho_m_040371');
    elementShouldBeEnabled('tho_m_040372');
    elementShouldBeEnabled('tho_m_040373');
    elementShouldBeEnabled('tho_m_040375');
    elementShouldBeEnabled('tho_m_040378');

    clickElement('tho_m_040277');
    elementShouldBeEnabled('tho_m_040381');
  });
});
