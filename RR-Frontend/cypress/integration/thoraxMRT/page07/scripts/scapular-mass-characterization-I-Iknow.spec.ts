import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectElementByRadioRole } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

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
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Scapular Fracture -> Characterization I -> I know', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(6);
      selectElementByRadioRole(3, true);
      elementShouldBeEnabled('tho_m_070230');
      elementShouldBeEnabled('tho_m_070231');
      elementShouldBeEnabled('tho_m_070107');
      elementShouldBeEnabled('tho_m_070228');
      elementShouldBeEnabled('tho_m_070347');
      elementShouldBeEnabled('tho_m_070427');
      elementShouldBeEnabled('tho_m_070529');

      elementShouldBeEnabled('tho_m_070235');
      elementShouldBeEnabled('tho_m_070236');

      elementShouldBeEnabled('tho_m_070376');
      elementShouldBeEnabled('tho_m_070432');
      elementShouldBeEnabled('tho_m_070433');

      elementShouldBeEnabled('tho_m_070435');
      elementShouldBeEnabled('tho_m_070436');
      elementShouldBeEnabled('tho_m_070437');
      elementShouldBeEnabled('tho_m_070438');

      elementShouldBeEnabled('tho_m_070531');
      elementShouldBeEnabled('tho_m_070532');
      elementShouldBeEnabled('tho_m_070533');
      elementShouldBeEnabled('tho_m_070534');
      elementShouldBeEnabled('tho_m_070535');

      elementShouldBeEnabled('tho_m_070537');
      elementShouldBeEnabled('tho_m_070538');

      clickElement('tho_m_070231', true, 'checkbox');
      elementShouldBeEnabled('tho_m_070232');
      elementShouldBeEnabled('tho_m_070233');

      cy.byRRID('tho_m_070376')
        .type('25')
        .click();
      elementShouldBeEnabled('tho_m_070353');

      cy.byRRID('tho_m_070353')
        .type('34')
        .click();
      elementShouldBeEnabled('tho_m_070356');
    });
  });
});
