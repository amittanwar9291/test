import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectFindingsDropdownOption,
  selectLocalizerElement,
  typeValueIntoField
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - KneeMRT_Ribbons', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_050107', 'kne_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Ribbons.url + '/' + pageId);
        });
      });
    });
  });

  it('Medial meniscus degeneration - Classification - Grade 3.spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(0);

    elementShouldBeEnabled('mam_m_050105');

    selectLocalizerElement('kne_m_050205', 'path', 9, true);

    elementShouldBeEnabled('kne_m_050308');
    elementShouldBeEnabled('kne_m_050309');
    elementShouldBeEnabled('kne_m_050311');
    elementShouldBeEnabled('kne_m_050310');

    elementShouldBeEnabled('kne_m_050313');
    elementShouldBeEnabled('kne_m_050314');
    elementShouldBeEnabled('kne_m_050316');
    elementShouldBeEnabled('kne_m_050319');

    clickElement('kne_m_050316', true, 'radio');
    elementShouldBeEnabled('kne_m_050317');
    elementShouldBeEnabled('kne_m_050318');
    clickElement('kne_m_050319', true, 'radio');
    elementShouldBeEnabled('kne_m_050320');
    elementShouldBeEnabled('kne_m_050321');
  });
});
