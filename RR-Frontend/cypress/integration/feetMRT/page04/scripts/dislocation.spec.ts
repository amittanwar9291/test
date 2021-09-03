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
          cy.visit(feetMRTRoutes.FeetMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Dislocation', () => {
    clickElement('anc_m_040105');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('anc_m_040107');
    elementShouldBeEnabled('anc_m_040213');
    elementShouldBeEnabled('anc_m_040214');
    elementShouldBeEnabled('anc_m_040215');

    clickElement('anc_m_040215');
    elementShouldBeEnabled('anc_m_040364');
    elementShouldBeEnabled('anc_m_040365');

    clickElement('anc_m_040364');
    elementShouldBeEnabled('anc_m_040476');
    elementShouldBeEnabled('anc_m_040477');
    elementShouldBeEnabled('anc_m_040478');

    clickElement('anc_m_040476');
    elementShouldBeEnabled('anc_m_040588');
    elementShouldBeEnabled('anc_m_040589');

    clickElement('anc_m_040477');
    elementShouldBeEnabled('anc_m_040590');
    elementShouldBeEnabled('anc_m_040591');
    elementShouldBeEnabled('anc_m_040592');

    clickElement('anc_m_040478');
    elementShouldBeEnabled('anc_m_040593');
    elementShouldBeEnabled('anc_m_040594');

    clickElement('anc_m_040365');
    elementShouldBeEnabled('anc_m_0404202');
    elementShouldBeEnabled('anc_m_0404203');
    elementShouldBeEnabled('anc_m_0404204');
  });
});
