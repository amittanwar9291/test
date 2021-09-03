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

  it('Mass Char I - Describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('anc_m_040105');
    elementShouldBeEnabled('none-1');
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('anc_m_040107');

    clickElement('anc_m_0403107');
    elementShouldBeEnabled('anc_m_0403107');
    elementShouldBeEnabled('anc_m_0402208');
    elementShouldBeEnabled('anc_m_0402209');
    elementShouldBeEnabled('anc_m_0402210');

    elementShouldBeEnabled('anc_m_0402211');
    elementShouldBeEnabled('anc_m_0402212');
    elementShouldBeEnabled('anc_m_0402214');
    elementShouldBeEnabled('anc_m_0402215');
    elementShouldBeEnabled('anc_m_0402216');
    elementShouldBeEnabled('anc_m_0402217');

    elementShouldBeEnabled('anc_m_0403239');
    elementShouldBeEnabled('anc_m_0403242');

    elementShouldBeEnabled('anc_m_0404217');
    elementShouldBeEnabled('anc_m_0404218');
    elementShouldBeEnabled('anc_m_0404219');

    elementShouldBeEnabled('anc_m_0405202');
    elementShouldBeEnabled('anc_m_0405203');
    elementShouldBeEnabled('anc_m_0405204');
    elementShouldBeEnabled('anc_m_0405205');
    elementShouldBeEnabled('anc_m_0405206');
    elementShouldBeEnabled('anc_m_0405207');

    clickElement('anc_m_0404218', true, 'radio');
    elementShouldBeEnabled('anc_m_0404220');
    elementShouldBeEnabled('anc_m_0404221');
    elementShouldBeEnabled('anc_m_0404223');
    elementShouldBeEnabled('anc_m_0404224');
    elementShouldBeEnabled('anc_m_0404225');
    elementShouldBeEnabled('anc_m_0404226');
    elementShouldBeEnabled('anc_m_0404227');

    clickElement('anc_m_0404219', true, 'radio');
    elementShouldBeEnabled('anc_m_0404220');
    elementShouldBeEnabled('anc_m_0404221');
    elementShouldBeEnabled('anc_m_0404223');
    elementShouldBeEnabled('anc_m_0404224');
    elementShouldBeEnabled('anc_m_0404225');
    elementShouldBeEnabled('anc_m_0404226');
    elementShouldBeEnabled('anc_m_0404227');
  });
});
