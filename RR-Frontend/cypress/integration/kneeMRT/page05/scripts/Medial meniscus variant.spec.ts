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

  it('Medial meniscus variant.spec', () => {
    clickElement('mam_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(1);

    elementShouldBeEnabled('kne_m_050207');
    elementShouldBeEnabled('kne_m_050322');
    elementShouldBeEnabled('kne_m_050323');
    elementShouldBeEnabled('kne_m_050413');
    elementShouldBeEnabled('kne_m_050512');
    elementShouldBeEnabled('kne_m_050513');

    clickElement('kne_m_050207', true, 'checkbox');
    elementShouldBeEnabled('kne_m_050209');
    elementShouldBeEnabled('kne_m_050210');
    elementShouldBeEnabled('kne_m_050211');

    clickElement('kne_m_050211', true, 'radio');
    elementShouldBeEnabled('kne_m_050212');
    elementShouldBeEnabled('kne_m_050213');

    clickElement('kne_m_050323', true, 'checkbox');

    selectLocalizerElement('kne_m_050325_im', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050325_im', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050325_im', 'path', 3, true).should('have.css', 'fill', 'rgb(254, 0, 0)');

    clickElement('kne_m_050413', true, 'checkbox');

    selectLocalizerElement('kne_m_050415_im', 'path', 4, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050415_im', 'path', 5, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
    selectLocalizerElement('kne_m_050415_im', 'path', 3, true).should('have.css', 'fill', 'rgb(254, 0, 0)');
  });
});
