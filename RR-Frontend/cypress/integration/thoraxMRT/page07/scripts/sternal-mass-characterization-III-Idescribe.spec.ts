import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Sternal Mass -> Characterization III -> I describe', () => {
      NavigationPageObject.visitPageNumber(3);
      clickElement('uni_x_030104', true, 'radio');
      elementShouldHaveGivenState('true', 'uni_x_030104');

      NavigationPageObject.visitPageNumber(7);
      clickElement('tho_m_070105', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(8);
      cy.byRRID('tho_m_070427').click({ force: true });

      elementShouldBeEnabled('tho_m_070246');
      elementShouldBeEnabled('tho_m_070247');
      elementShouldBeEnabled('tho_m_070248');

      elementShouldBeEnabled('tho_m_070371');
      elementShouldBeEnabled('tho_m_070372');
      elementShouldBeEnabled('tho_m_070373');
      elementShouldBeEnabled('tho_m_070374');

      elementShouldBeEnabled('tho_m_070449');
      elementShouldBeEnabled('tho_m_070450');
      elementShouldBeEnabled('tho_m_070451');
      elementShouldBeEnabled('tho_m_070453');

      clickElement('tho_m_070248', true, 'radio');
      elementShouldBeEnabled('tho_m_070249');
      elementShouldBeEnabled('tho_m_070250');
      elementShouldBeEnabled('tho_m_070252');
      elementShouldBeEnabled('tho_m_070253');
      elementShouldBeEnabled('tho_m_070254');
      elementShouldBeEnabled('tho_m_070255');
      elementShouldBeEnabled('tho_m_070256');

      clickElement('tho_m_070453', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070454');
    });
  });
});
