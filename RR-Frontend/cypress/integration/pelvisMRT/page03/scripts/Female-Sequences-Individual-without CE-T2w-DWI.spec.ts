import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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

  describe('Female-Sequences-Individual-without CE-T2w-DWI', () => {
    it('Female-Sequences-Individual-without CE-T2w-DWI', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010205', true, 'radio');

      cy.get('rr-top-navigation')
        .contains('3')
        .click({ force: true });

      clickElement('uni_x_030104', true, 'radio');
      cy.get('.rr-card')
        .eq(1)
        .click();
      clickElement('uni_x_030109', true, 'radio');

      clickElement('uni_x_030112', true, 'radio');

      elementShouldBeEnabled('uni_x_030113');
      elementShouldBeEnabled('pel_m_030105');
      elementShouldBeEnabled('pel_m_030106');

      elementShouldBeEnabled('uni_x_030210-1');

      elementShouldBeEnabled('pel_m_030502');
      elementShouldBeEnabled('pel_m_030510');
      elementShouldBeEnabled('pel_m_030505');
      elementShouldBeEnabled('pel_m_030506');

      elementShouldBeEnabled('uni_x_030509');
      elementShouldBeEnabled('uni_x_030511');

      elementShouldBeEnabled('uni_x_030520');
      elementShouldBeEnabled('uni_x_030521');

      clickElement('pel_m_030502', true, 'checkbox');
      elementShouldBeEnabled('pel_m_030502');
      elementShouldBeEnabled('pel_m_030503');

      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('uni_x_030308');
      elementShouldBeEnabled('uni_x_030310');
      elementShouldBeEnabled('uni_x_0303102');
      elementShouldBeEnabled('uni_x_030315');
      elementShouldBeEnabled('uni_x_0303103');

      elementShouldBeEnabled('uni_y_030401');
    });
  });
});
