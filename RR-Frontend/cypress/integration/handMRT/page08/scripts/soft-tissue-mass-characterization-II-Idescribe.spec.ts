import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { handMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft tissue', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_080107', 'han_m_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Soft tissue', () => {
    it('Soft tissue -> Soft tissue mass -> Characterization II -> I describe', () => {
      clickElement('uni_x_030104', true, 'radio');
      cy.get('rr-top-navigation')
        .contains('8')
        .click();

      clickElement('han_m_080105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(2);
      elementShouldBeEnabled('han_m_080107');
      elementShouldBeEnabled('han_m_080207');
      elementShouldBeEnabled('han_m_080317');
      elementShouldBeEnabled('han_m_0800401');

      cy.byRRID('han_m_080317').click();

      elementShouldBeEnabled('han_m_080213');
      elementShouldBeEnabled('han_m_080214');
      elementShouldBeEnabled('han_m_080215');
      elementShouldBeEnabled('han_m_080216');
      elementShouldBeEnabled('han_m_080217');
      elementShouldBeEnabled('han_m_080218');
      elementShouldBeEnabled('han_m_080219');
      elementShouldBeEnabled('han_m_080220');
      elementShouldBeEnabled('han_m_080221');

      elementShouldBeEnabled('han_m_080326');
      elementShouldBeEnabled('han_m_080327');
      elementShouldBeEnabled('han_m_080328');
      elementShouldBeEnabled('han_m_080329');
      elementShouldBeEnabled('han_m_080330');

      elementShouldBeEnabled('han_m_0800413');
      elementShouldBeEnabled('han_m_0800414');
      elementShouldBeEnabled('han_m_0800415');
      elementShouldBeEnabled('han_m_0800416');
      elementShouldBeEnabled('han_m_0800419');
      elementShouldBeEnabled('han_m_0800422');

      elementShouldBeEnabled('han_m_0800515');
      elementShouldBeEnabled('han_m_0800517');
      elementShouldBeEnabled('han_m_0800518');
      elementShouldBeEnabled('han_m_0800519');

      clickElement('han_m_080330', true, 'checkbox');
      elementShouldBeEnabled('han_m_080331');
      elementShouldBeEnabled('han_m_080332');
      elementShouldBeEnabled('han_m_080333');
      elementShouldBeEnabled('han_m_080334');
      elementShouldBeEnabled('han_m_080335');
      elementShouldBeEnabled('han_m_080336');

      clickElement('han_m_0800518', true, 'radio');
      elementShouldBeEnabled('han_m_0800520');
      elementShouldBeEnabled('han_m_0800521');

      elementShouldBeEnabled('han_m_0800523');
      elementShouldBeEnabled('han_m_0800524');
      elementShouldBeEnabled('han_m_0800525');
      elementShouldBeEnabled('han_m_0800526');
      elementShouldBeEnabled('han_m_0800527');

      clickElement('han_m_0800519', true, 'radio');
      elementShouldBeEnabled('han_m_0800520');
      elementShouldBeEnabled('han_m_0800521');

      elementShouldBeEnabled('han_m_0800523');
      elementShouldBeEnabled('han_m_0800524');
      elementShouldBeEnabled('han_m_0800525');
      elementShouldBeEnabled('han_m_0800526');
      elementShouldBeEnabled('han_m_0800527');
    });
  });
});
