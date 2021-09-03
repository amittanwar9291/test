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

  it('Tendons', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Tendons
    clickElement('pel_m_090105', true, 'radio');
    elementShouldBeEnabled('pel_m_090106-1');
    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('pel_m_090107');

    // 2nd column options
    elementShouldBeEnabled('pel_m_0902134');
    elementShouldBeEnabled('pel_m_0902135');
    elementShouldBeEnabled('pel_m_0902136');
    elementShouldBeEnabled('pel_m_0902137');

    elementShouldBeEnabled('pel_m_0902139');
    elementShouldBeEnabled('pel_m_0902140');

    elementShouldBeEnabled('pel_m_090396');
    elementShouldBeEnabled('pel_m_090397');

    // Select Iliotibial tract
    clickElement('pel_m_0902134', true, 'radio');

    // Select Right and Left
    clickElement('pel_m_0902139', true, 'radio');
    clickElement('pel_m_0902140', true, 'radio');

    // Select Rupture
    clickElement('pel_m_090396', true, 'radio');
    elementShouldBeEnabled('pel_m_0904100');
    elementShouldBeEnabled('pel_m_0904101');
    elementShouldBeEnabled('pel_m_0904103');
    elementShouldBeEnabled('pel_m_090530');
    elementShouldBeEnabled('pel_m_090531');

    // Select options
    clickElement('pel_m_0904100', true, 'radio');
    clickElement('pel_m_0904101', true, 'radio');
    clickElement('pel_m_0904103', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0904104');

    // Enter 1 in the input field 'Extension in mm'
    cy.byRRID('pel_m_0904104')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0904104');

    // Enter 9999 in the input field 'Extension in mm'
    cy.byRRID('pel_m_0904104').type('9999');
    elementShouldBeValid('pel_m_0904104');

    clickElement('pel_m_090530', true, 'checkbox');
    clickElement('pel_m_090531', true, 'checkbox');

    // Select Tendinopathy
    clickElement('pel_m_090397', true, 'radio');
    elementShouldBeEnabled('pel_m_0904136');
    elementShouldBeEnabled('pel_m_0904137');
    elementShouldBeEnabled('pel_m_090534');
    elementShouldBeEnabled('pel_m_090535');
    elementShouldBeEnabled('pel_m_090536');

    // Select options
    clickElement('pel_m_0904136', true, 'radio');
    clickElement('pel_m_0904137', true, 'radio');
    clickElement('pel_m_090534', true, 'checkbox');
    clickElement('pel_m_090535', true, 'checkbox');
    clickElement('pel_m_090536', true, 'checkbox');

    // Select Rectus femoris muscle
    clickElement('pel_m_0902135', true, 'radio');

    // Select Rupture
    clickElement('pel_m_090396', true, 'radio');
    elementShouldBeEnabled('pel_m_0904100');
    elementShouldBeEnabled('pel_m_0904101');
    elementShouldBeEnabled('pel_m_0904103');
    elementShouldBeEnabled('pel_m_090530');
    elementShouldBeEnabled('pel_m_090531');
    elementShouldBeEnabled('pel_m_090532');

    // Select options
    clickElement('pel_m_0904100', true, 'radio');
    clickElement('pel_m_0904101', true, 'radio');
    clickElement('pel_m_0904103', true, 'checkbox');
    elementShouldBeEnabled('pel_m_0904104');

    // Enter 1 in the input field 'Extension in mm'
    cy.byRRID('pel_m_0904104')
      .type('1')
      .clear();
    elementShouldBeValid('pel_m_0904104');

    // Enter 9999 in the input field 'Extension in mm'
    cy.byRRID('pel_m_0904104').type('9999');
    elementShouldBeValid('pel_m_0904104');

    clickElement('pel_m_090530', true, 'checkbox');
    clickElement('pel_m_090531', true, 'checkbox');
    clickElement('pel_m_090532', true, 'checkbox');

    // Select Tendinopathy
    clickElement('pel_m_090397', true, 'radio');
    elementShouldBeEnabled('pel_m_0904136');
    elementShouldBeEnabled('pel_m_0904137');
    elementShouldBeEnabled('pel_m_090534');
    elementShouldBeEnabled('pel_m_090535');
    elementShouldBeEnabled('pel_m_090536');

    // Select options
    clickElement('pel_m_0904136', true, 'radio');
    clickElement('pel_m_0904137', true, 'radio');
    clickElement('pel_m_090534', true, 'checkbox');
    clickElement('pel_m_090535', true, 'checkbox');
    clickElement('pel_m_090536', true, 'checkbox');

    // Select Gluteus minimus muscle
    clickElement('pel_m_0902136', true, 'radio');

    // Select Gluteus medius muscle
    clickElement('pel_m_0902137', true, 'radio');
  });
});
