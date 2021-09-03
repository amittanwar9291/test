import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectFindingsDropdownOption } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 04 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('kne_m_040107', 'kne_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bone tumor', () => {
    it('Characterization I -> I describe', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('.nav-item')
        .eq(3)
        .first()
        .click();
      clickElement('kne_m_040105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(5);
      cy.byRRID('kne_m_040373').click();
      elementShouldBeEnabled('kne_m_040245');
      elementShouldBeEnabled('kne_m_040246');
      elementShouldBeEnabled('kne_m_040247');
      elementShouldBeEnabled('kne_m_040249');
      elementShouldBeEnabled('kne_m_040250');
      elementShouldBeEnabled('kne_m_040251');
      elementShouldBeEnabled('kne_m_040253');
      elementShouldBeEnabled('kne_m_040254');
      elementShouldBeEnabled('kne_m_040375');
      elementShouldBeEnabled('kne_m_040376');
      elementShouldBeEnabled('kne_m_040377');
      elementShouldBeEnabled('kne_m_040378');
      elementShouldBeEnabled('kne_m_040379');
      elementShouldBeEnabled('kne_m_040380');
      elementShouldBeEnabled('kne_m_040471');
      elementShouldBeEnabled('kne_m_040475');
      elementShouldBeEnabled('kne_m_040476');
      elementShouldBeEnabled('kne_m_0404119');
      elementShouldBeEnabled('kne_m_0404120');
      elementShouldBeEnabled('kne_m_0404121');
      elementShouldBeEnabled('kne_m_0404122');
      elementShouldBeEnabled('kne_m_0404123');
      elementShouldBeEnabled('kne_m_040519');
      elementShouldBeEnabled('kne_m_040520');
      elementShouldBeEnabled('kne_m_040543');
      elementShouldBeEnabled('kne_m_040523');
      elementShouldBeEnabled('kne_m_040524');
      elementShouldBeEnabled('kne_m_040525');
      elementShouldBeEnabled('kne_m_040526');
      elementShouldBeEnabled('kne_m_040527');
      clickElement('kne_m_040475', true, 'radio');
      elementShouldBeEnabled('kne_m_040472');
      elementShouldBeEnabled('kne_m_040473');
      clickElement('kne_m_040472', true, 'radio');
      elementShouldBeEnabled('kne_m_040474');
      clickElement('kne_m_040520', true, 'checkbox');
      elementShouldBeEnabled('kne_m_040521');
      elementShouldBeEnabled('kne_m_040522');
    });
  });
});
