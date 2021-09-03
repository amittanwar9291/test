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

  it('Urinary bladder divertikulum', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Urinary bladder diverticulum
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('pel_m_090107');

    // Available options
    elementShouldBeEnabled('pel_m_090241');
    elementShouldBeEnabled('pel_m_090243');
    elementShouldBeEnabled('pel_m_090513');
    elementShouldBeEnabled('pel_m_090514');
    elementShouldBeEnabled('pel_m_090516');
    elementShouldBeEnabled('pel_m_090517');
    elementShouldBeEnabled('pel_m_090518');

    // Enter 1 in the input field 'Diverticulum, max. diameter'
    cy.byRRID('pel_m_090241')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_090241');

    // Enter 9999 in the input field 'Diverticulum, max. diameter'
    cy.byRRID('pel_m_090241').type('9999');
    elementShouldBeValid('pel_m_090241');

    // > 1 lesion
    clickElement('pel_m_090243', true, 'checkbox');

    // Limited assessability
    clickElement('pel_m_090513', true, 'checkbox');
    clickElement('pel_m_090514', true, 'checkbox');

    // Inserted catheter
    clickElement('pel_m_090516', true, 'checkbox');
    clickElement('pel_m_090517', true, 'checkbox');
    clickElement('pel_m_090518', true, 'checkbox');
  });
});
