import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldBeValid, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080107', 'pel_m_090106-');

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

  it('Urinary bladder trauma', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Urinary bladder standard variation anomalies
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('pel_m_090107');

    // Available options
    elementShouldBeEnabled('pel_m_090253');
    elementShouldBeEnabled('pel_m_090256');
    elementShouldBeEnabled('pel_m_090513');
    elementShouldBeEnabled('pel_m_090514');
    elementShouldBeEnabled('pel_m_090516');
    elementShouldBeEnabled('pel_m_090517');
    elementShouldBeEnabled('pel_m_090518');

    // Select Bladderrupture
    clickElement('pel_m_090253', true, 'checkbox');
    elementShouldBeEnabled('pel_m_090254');
    elementShouldBeEnabled('pel_m_090255');

    clickElement('pel_m_090254', true, 'checkbox');
    clickElement('pel_m_090255', true, 'checkbox');

    // Select Bladder tamponade
    clickElement('pel_m_090256', true, 'checkbox');
    elementShouldBeEnabled('pel_m_090257');

    clickElement('pel_m_090257', true, 'checkbox');
    elementShouldBeEnabled('pel_m_090258');

    // Enter 1 in the input field 'Max. Durchmesser in mm'
    cy.byRRID('pel_m_090258')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_090258');

    // Enter 9999 in the input field 'Max. Durchmesser in mm'
    cy.byRRID('pel_m_090258').type('9999');
    elementShouldBeValid('pel_m_090258');

    // Select options Limited assessability
    clickElement('pel_m_090513', true, 'checkbox');
    clickElement('pel_m_090514', true, 'checkbox');

    // Inserted catheter
    clickElement('pel_m_090516', true, 'checkbox');
    clickElement('pel_m_090517', true, 'checkbox');
    clickElement('pel_m_090518', true, 'checkbox');
  });
});
