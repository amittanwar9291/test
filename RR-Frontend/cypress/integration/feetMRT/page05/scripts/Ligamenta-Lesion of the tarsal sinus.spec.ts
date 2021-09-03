import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 05 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_050106', 'anc_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_LigamentsAndTendons.url + '/' + pageId);
        });
      });
    });
  });

  it('Ligamenta-Lesion of the tarsal sinus', () => {
    clickElement('anc_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(0);
    elementShouldBeEnabled('anc_m_050107');

    elementShouldBeEnabled('anc_m_050203');
    elementShouldBeEnabled('anc_m_050204');
    elementShouldBeEnabled('anc_m_050205');
    elementShouldBeEnabled('anc_m_050206');
    elementShouldBeEnabled('anc_m_050207');

    clickElement('anc_m_050205', true, 'radio');
    elementShouldBeEnabled('anc_m_050310');
    elementShouldBeEnabled('anc_m_050311');
    elementShouldBeEnabled('anc_m_050312');
    elementShouldBeEnabled('anc_m_050313');
    elementShouldBeEnabled('anc_m_050314');

    clickElement('anc_m_050314', true, 'checkbox');
    elementShouldBeEnabled('anc_m_050315');
  });
});
