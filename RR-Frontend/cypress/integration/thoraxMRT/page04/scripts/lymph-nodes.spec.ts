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

  it('Lymph nodes', () => {
    clickElement('tho_m_040105', true, 'radio');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(1);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('tho_m_040206');
    elementShouldBeEnabled('tho_m_040207');

    clickElement('tho_m_040206');
    elementShouldBeEnabled('tho_m_040305');
    elementShouldBeEnabled('tho_m_040307');

    clickElement('tho_m_040207');
    elementShouldBeEnabled('tho_m_040309');
    elementShouldBeEnabled('tho_m_040310');
    elementShouldBeEnabled('tho_m_040311');
    elementShouldBeEnabled('tho_m_040312');
    elementShouldBeEnabled('tho_m_040313');
    elementShouldBeEnabled('tho_m_040503');
    elementShouldBeEnabled('tho_m_040505');
    elementShouldBeEnabled('tho_m_040506');
    elementShouldBeEnabled('tho_m_040508');
    elementShouldBeEnabled('tho_m_040509');

    clickElement('tho_m_040309');
    elementShouldBeEnabled('tho_m_040402');
    elementShouldBeEnabled('tho_m_040403');

    clickElement('tho_m_040310');
    elementShouldBeEnabled('tho_m_040404');
    elementShouldBeEnabled('tho_m_040405');
    elementShouldBeEnabled('tho_m_040406');
    elementShouldBeEnabled('tho_m_040407');
    elementShouldBeEnabled('tho_m_040408');
    elementShouldBeEnabled('tho_m_040409');

    clickElement('tho_m_040311');
    elementShouldBeEnabled('tho_m_040410');
    elementShouldBeEnabled('tho_m_040411');

    clickElement('tho_m_040312');
    elementShouldBeEnabled('tho_m_040412');
    elementShouldBeEnabled('tho_m_040413');
    elementShouldBeEnabled('tho_m_040414');
    elementShouldBeEnabled('tho_m_040415');

    clickElement('tho_m_040313');
    elementShouldBeEnabled('tho_m_040416');
    elementShouldBeEnabled('tho_m_040417');
    elementShouldBeEnabled('tho_m_040418');
    elementShouldBeEnabled('tho_m_040419');
    elementShouldBeEnabled('tho_m_040420');
    elementShouldBeEnabled('tho_m_040422');
    elementShouldBeEnabled('tho_m_040423');

    clickElement('tho_m_040509');
    elementShouldBeEnabled('tho_m_040510');
    elementShouldBeEnabled('tho_m_040511');
  });
});
