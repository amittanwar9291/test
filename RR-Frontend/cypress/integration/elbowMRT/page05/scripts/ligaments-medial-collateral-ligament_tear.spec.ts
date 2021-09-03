import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 05 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_050107', 'elb_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Cartilage.url + '/' + pageId);
        });
      });
    });
  });

  it('Ligaments medial collateral ligament tear', () => {
    // Select Finding
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('elb_m_050107');
    elementShouldBeEnabled('elb_m_050213');
    elementShouldBeEnabled('elb_m_050215');
    elementShouldBeEnabled('elb_m_050217');

    // Select Medial collateral ligament tear
    clickElement('elb_m_050213', true, 'radio');
    elementShouldBeEnabled('elb_m_050315');
    elementShouldBeEnabled('elb_m_050316');
    elementShouldBeEnabled('elb_m_050317');
    elementShouldBeEnabled('elb_m_050318');

    // Complete and Partial tear enabled
    elementShouldBeEnabled('elb_m_050418');
    elementShouldBeEnabled('elb_m_050419');

    // Select Complete tear
    clickElement('elb_m_050418', true, 'radio');
    elementShouldBeEnabled('elb_m_050515');
    elementShouldBeEnabled('elb_m_050518');
    elementShouldBeEnabled('elb_m_050519');
    elementShouldBeEnabled('elb_m_050520');

    // Select Localization
    clickElement('elb_m_050515', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050516');
    elementShouldBeEnabled('elb_m_050517');

    // Select Partial tear
    clickElement('elb_m_050419', true, 'radio');
    elementShouldBeEnabled('elb_m_050522');
    elementShouldBeEnabled('elb_m_050523');
    elementShouldBeEnabled('elb_m_050524');
    elementShouldBeEnabled('elb_m_050526');
    elementShouldBeEnabled('elb_m_050527');

    // Select Thickening
    clickElement('elb_m_050524', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050525');
  });
});
