import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import {
  clickElement,
  elementShouldBeEnabled,
  elementShouldBeValid,
  elementShouldHaveGivenState,
  getAppConfig,
  selectDropdownOptionOS,
  selectSliderValue
} from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { headMRTRoutes } from '@environments/pages-routes';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 09 - HeadMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HeadMRT', config).then(id => {
          pageId = id;
          cy.visit(headMRTRoutes.HeadMRT_CerebrospinalFluidSpace.url + '/' + pageId);
        });
      });
    });
  });

  it('Subarachnoid hemorrhage Localization', () => {
    // Go to Page 9
    NavigationPageObject.visitPageNumber(9);

    // Select Subarachnoid hemorrhage from the dropdown menu
    clickElement('hea_m_090105', true, 'radio');
    elementShouldBeEnabled('hea_m_090106-1');
    selectDropdownOptionOS('hea_m_090106-1', 3, true, true);
    elementShouldBeEnabled('hea_m_090107');

    elementShouldBeEnabled('hea_m_090275');
    elementShouldBeEnabled('hea_m_090276');
    elementShouldBeEnabled('hea_m_090277');
    elementShouldBeEnabled('hea_m_090383');
    elementShouldBeEnabled('hea_m_090384');
    elementShouldBeEnabled('hea_m_090385');
    elementShouldBeEnabled('hea_m_090386');
    elementShouldBeEnabled('hea_m_090387');
    elementShouldBeEnabled('hea_m_090388');
    elementShouldBeEnabled('hea_m_090467');
    elementShouldBeEnabled('hea_m_090564');
    elementShouldBeEnabled('hea_m_090565');
    elementShouldBeEnabled('hea_m_090543');
    elementShouldBeEnabled('hea_m_090544');

    clickElement('hea_m_090275', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090275');
    clickElement('hea_m_090276', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090276');
    clickElement('hea_m_090277', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090277');
    clickElement('hea_m_090383', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090383');
    clickElement('hea_m_090384', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090384');
    clickElement('hea_m_090385', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090385');
    clickElement('hea_m_090386', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090386');
    clickElement('hea_m_090387', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090387');
    clickElement('hea_m_090388', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090388');
    clickElement('hea_m_090467', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090467');
    elementShouldBeEnabled('hea_m_090468');
    elementShouldBeEnabled('hea_m_090469');
    elementShouldBeEnabled('hea_m_090470');
    elementShouldBeEnabled('hea_m_090471');
    elementShouldBeEnabled('hea_m_090472');
    elementShouldBeEnabled('hea_m_090473');
    elementShouldBeEnabled('hea_m_090474');
    elementShouldBeEnabled('hea_m_090475');
    elementShouldBeEnabled('hea_m_090476');
    elementShouldBeEnabled('hea_m_090477');
    clickElement('hea_m_090468', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090468');
    clickElement('hea_m_090469', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090469');
    clickElement('hea_m_090470', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090470');
    clickElement('hea_m_090471', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090471');
    clickElement('hea_m_090472', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090472');
    clickElement('hea_m_090473', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090473');
    clickElement('hea_m_090474', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090474');
    clickElement('hea_m_090475', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090475');
    clickElement('hea_m_090476', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090476');
    clickElement('hea_m_090477', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090477');

    clickElement('hea_m_090564', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090564');
    clickElement('hea_m_090565', true, 'radio');
    elementShouldHaveGivenState('true', 'hea_m_090565');

    clickElement('hea_m_090543', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090543');
    clickElement('hea_m_090544', true, 'checkbox');
    elementShouldHaveGivenState('true', 'hea_m_090544');
  });
});
