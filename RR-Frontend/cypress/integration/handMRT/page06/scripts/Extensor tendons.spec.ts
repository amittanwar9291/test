import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 06 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_060106', 'han_m_060106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Tendinopathy.url + '/' + pageId);
        });
      });
    });
  });

  it('Extensor tendons', () => {
    clickElement('han_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(1);

    elementShouldBeEnabled('han_m_060216');
    elementShouldBeEnabled('han_m_060217');
    elementShouldBeEnabled('han_m_060218');
    elementShouldBeEnabled('han_m_060219');
    elementShouldBeEnabled('han_m_060220');
    elementShouldBeEnabled('han_m_060221');

    clickElement('han_m_060221', true, 'checkbox');
    elementShouldBeEnabled('han_m_060223');
    elementShouldBeEnabled('han_m_060224');
    elementShouldBeEnabled('han_m_060225');
    elementShouldBeEnabled('han_m_060226');

    elementShouldBeEnabled('han_m_060304');
    elementShouldBeEnabled('han_m_060305');

    elementShouldBeEnabled('han_m_060418');
    elementShouldBeEnabled('han_m_060420');
    elementShouldBeEnabled('han_m_060427');

    elementShouldBeEnabled('han_m_060512');

    clickElement('han_m_060418', true, 'radio');

    elementShouldBeEnabled('han_m_060419');

    clickElement('han_m_060420', true, 'radio');

    elementShouldBeEnabled('han_m_060422');
    elementShouldBeEnabled('han_m_060421');
    elementShouldBeEnabled('han_m_060423');

    clickElement('han_m_060427', true, 'radio');
    elementShouldBeEnabled('han_m_060428');
    elementShouldBeEnabled('han_m_060429');

    clickElement('han_m_060512', true, 'checkbox');
    elementShouldBeEnabled('han_m_060513');
    elementShouldBeEnabled('han_m_060516');
    elementShouldBeEnabled('han_m_060516');
  });
});
