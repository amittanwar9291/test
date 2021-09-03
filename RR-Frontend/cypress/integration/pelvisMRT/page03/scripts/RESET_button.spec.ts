import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, elementShouldBeDisabled } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 03 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('uni_x_030210', 'uni_x_030210-');

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

  describe('RESET_button.feature', () => {
    it('RESET_button.feature', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010205', true, 'radio');

      cy.get('rr-top-navigation')
        .contains('3')
        .click({ force: true });

      clickElement('uni_x_030104', true, 'radio');
      clickElement('uni_x_030110', true, 'radio');
      cy.get('.rr-card')
        .eq(1)
        .click();
      clickElement('uni_x_030109', true, 'radio');

      clickElement('uni_x_030112', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('uni_x_030211');

      clickElement('uni_x_030421');

      elementShouldBeEnabled('uni_dia_004');
      elementShouldBeEnabled('uni_dia_003');
      clickElement('uni_dia_004');
      elementShouldBeDisabled('uni_x_030211');
    });
  });
});
