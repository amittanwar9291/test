import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, visitPageNumber } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 06 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_060107', 'pel_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Ovary, mass', () => {
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205');
    visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    cy.wait(2000);
    visitPageNumber(6);
    clickElement('pel_m_060105');
    elementShouldBeEnabled('pel_m_060106-1');

    findingColumn.selectFindingOptionByAppearance(0);

    clickElement('pel_m_060301');

    elementShouldBeEnabled('pel_m_060213');
    elementShouldBeEnabled('pel_m_060213');
    elementShouldBeEnabled('pel_m_060213');

    elementShouldBeEnabled('pel_m_060314');
    elementShouldBeEnabled('pel_m_060315');
    elementShouldBeEnabled('pel_m_060316');
    elementShouldBeEnabled('pel_m_060317');
    elementShouldBeEnabled('pel_m_0603404');

    elementShouldBeEnabled('pel_m_060414');
    elementShouldBeEnabled('pel_m_060418');

    elementShouldBeEnabled('pel_m_060513');
    elementShouldBeEnabled('pel_m_060516');
    elementShouldBeEnabled('pel_m_060517');
    elementShouldBeEnabled('pel_m_060518');
    elementShouldBeEnabled('pel_m_060519');

    clickElement('pel_m_060214', true, 'radio');
    elementShouldBeEnabled('pel_m_060216');
    elementShouldBeEnabled('pel_m_060217');
    clickElement('pel_m_060217', true, 'radio');
    elementShouldBeEnabled('pel_m_060218');
    elementShouldBeEnabled('pel_m_060219');
    elementShouldBeEnabled('pel_m_0602404');

    clickElement('pel_m_060414', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060415');
    elementShouldBeEnabled('pel_m_060416');
    elementShouldBeEnabled('pel_m_060417');

    clickElement('pel_m_060418', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060419');
    elementShouldBeEnabled('pel_m_060420');
    elementShouldBeEnabled('pel_m_060421');
    elementShouldBeEnabled('pel_m_060422');

    clickElement('pel_m_060513', true, 'checkbox');
    elementShouldBeEnabled('pel_m_060514');
    elementShouldBeEnabled('pel_m_060515');
  });
});
