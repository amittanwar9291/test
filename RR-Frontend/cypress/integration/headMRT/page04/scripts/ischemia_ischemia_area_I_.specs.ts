import 'cypress-shadow-dom';
import 'cypress-file-upload';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  getAppConfig,
  selectDropdownOptionOS,
  checkSliderValue,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_Vessels.url + '/' + pageId);
        });
      });
    });
  });

  it('Ischemia area I - DWI', () => {
    // Select Finding
    clickElement('hea_m_040105', true, 'radio');
    elementShouldBeEnabled('hea_m_040106-1');

    // Ischemia
    selectDropdownOptionOS('hea_m_040106-1', 0, true, true);
    elementShouldBeEnabled('hea_m_040107');

    // Localization is preselected
    cy.get('.ui-tabview')
      .shadowFind('#ui-tabpanel-0-label')
      .invoke('attr', 'aria-selected')
      .should('equal', 'true');

    // Tabs enabled
    elementShouldBeEnabled('hea_m_040301');
    elementShouldBeEnabled('hea_m_040401');
    elementShouldBeEnabled('hea_m_040501');

    // Ischemia area I
    clickElement('hea_m_040301', true);
    elementShouldBeEnabled('hea_m_040214');
    elementShouldBeEnabled('hea_m_040215');
    elementShouldBeEnabled('hea_m_040216');
    elementShouldBeEnabled('hea_m_040217');
    elementShouldBeEnabled('hea_m_040221');

    elementShouldBeEnabled('hea_m_040417');
    elementShouldBeEnabled('hea_m_040418');
    elementShouldBeEnabled('hea_m_040419');
    elementShouldBeEnabled('hea_m_040421');

    // Lacunary
    clickElement('hea_m_040214', true, 'radio');
    elementShouldBeEnabled('hea_m_040218');
    elementShouldBeEnabled('hea_m_040219');

    clickElement('hea_m_040218', true, 'checkbox');
    clickElement('hea_m_040219', true, 'checkbox');

    // Territorial
    clickElement('hea_m_040215', true, 'radio');
    elementShouldBeEnabled('hea_m_040222');
    elementShouldBeEnabled('hea_m_040223');
    elementShouldBeEnabled('hea_m_040224');

    clickElement('hea_m_040222', true, 'checkbox');
    clickElement('hea_m_040223', true, 'checkbox');
    clickElement('hea_m_040224', true, 'checkbox');

    // Border zone
    clickElement('hea_m_040216', true, 'radio');
    elementShouldBeEnabled('hea_m_040225');

    // String of pearls aspect
    clickElement('hea_m_040225', true, 'checkbox');

    // Signal T2 FLAIR
    selectSliderValue('hea_m_040221', 0, 3);
    checkSliderValue('hea_m_040221', 3);
    cy.wait(600);

    // FLAIR/DWI ratio
    clickElement('hea_m_040417', true, 'radio');
    clickElement('hea_m_040418', true, 'radio');
    clickElement('hea_m_040419', true, 'radio');

    // T1w signal
    selectSliderValue('hea_m_040421', 0, 3);
    checkSliderValue('hea_m_040421', 3);
  });
});
