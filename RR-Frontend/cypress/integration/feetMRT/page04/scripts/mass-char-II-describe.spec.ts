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
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Char II - Describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('anc_m_040107');

    clickElement('anc_m_0404126');
    elementShouldBeEnabled('anc_m_0404126');
    elementShouldBeEnabled('anc_m_0402219');
    elementShouldBeEnabled('anc_m_0402220');
    elementShouldBeEnabled('anc_m_0402221');
    elementShouldBeEnabled('anc_m_0402224');
    elementShouldBeEnabled('anc_m_0402226');
    elementShouldBeEnabled('anc_m_0402227');

    elementShouldBeEnabled('anc_m_0403244');
    elementShouldBeEnabled('anc_m_0403245');
    elementShouldBeEnabled('anc_m_0403246');
    elementShouldBeEnabled('anc_m_0403250');
    elementShouldBeEnabled('anc_m_0403251');

    elementShouldBeEnabled('anc_m_0404229');
    elementShouldBeEnabled('anc_m_0404230');
    elementShouldBeEnabled('anc_m_0404231');
    elementShouldBeEnabled('anc_m_0404232');
    elementShouldBeEnabled('anc_m_0404233');
    elementShouldBeEnabled('anc_m_0404234');
    elementShouldBeEnabled('anc_m_0404236');

    elementShouldBeEnabled('anc_m_0405209');
    elementShouldBeEnabled('anc_m_0405210');
    elementShouldBeEnabled('anc_m_0405211');
    elementShouldBeEnabled('anc_m_0405212');
    elementShouldBeEnabled('anc_m_0405214');
    elementShouldBeEnabled('anc_m_0405215');

    clickElement('anc_m_0402221', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0402222');
    elementShouldBeEnabled('anc_m_0402223');

    clickElement('anc_m_0402224', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0402225');

    clickElement('anc_m_0403246', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0403248');
    elementShouldBeEnabled('anc_m_0403249');

    clickElement('anc_m_0404236', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0404237');
  });
});
