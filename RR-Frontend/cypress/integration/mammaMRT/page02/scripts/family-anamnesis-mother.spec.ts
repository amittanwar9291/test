import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('page02 - Anamnesis', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_m_020107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMRT', config).then(id => {
          pageId = id;
          cy.visit(mammaMRTRoutes.MammaMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Family anamnesis - Mother', () => {
    clickElement('mam_m_020105', false, 'radio');
    elementShouldBeEnabled('none-1');
    cy.get('.c-col-2.c-pad-r').within(() => {
      findingColumn.selectFindingOptionByAppearance(2);
    });
    elementShouldBeEnabled('mam_m_020107');
    elementShouldBeEnabled('mam_m_020203');
    elementShouldBeEnabled('mam_m_020207');
    clickElement('mam_m_020203', false, 'checkbox');
    elementShouldBeEnabled('mam_m_020204');
    elementShouldBeEnabled('mam_m_020206');
    clickElement('mam_m_020207', false, 'checkbox');
    elementShouldBeEnabled('mam_m_020209');
  });
});
