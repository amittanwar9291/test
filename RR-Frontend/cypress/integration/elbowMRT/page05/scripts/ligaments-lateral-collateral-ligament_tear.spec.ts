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

  it('Ligaments lateral colateral ligament tear', () => {
    // Select Ligaments
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('elb_m_050107');

    // Medial, Lateral, Dislocation radio buttons
    elementShouldBeEnabled('elb_m_050213');
    elementShouldBeEnabled('elb_m_050215');
    elementShouldBeEnabled('elb_m_050217');

    // Lateral collateral ligament tear
    clickElement('elb_m_050215', true, 'radio');
    elementShouldBeEnabled('elb_m_050324');
    elementShouldBeEnabled('elb_m_050325');
    elementShouldBeEnabled('elb_m_050326');
    elementShouldBeEnabled('elb_m_050327');
    elementShouldBeEnabled('elb_m_050328');

    // Complete and partial tear
    elementShouldBeEnabled('elb_m_050421');
    elementShouldBeEnabled('elb_m_050422');

    // Complete tear
    clickElement('elb_m_050421', true, 'radio');
    elementShouldBeEnabled('elb_m_050529');
    elementShouldBeEnabled('elb_m_050532');
    elementShouldBeEnabled('elb_m_050533');
    elementShouldBeEnabled('elb_m_050534');

    // Localization
    clickElement('elb_m_050529', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050530');
    elementShouldBeEnabled('elb_m_050531');

    // Partial tear
    clickElement('elb_m_050422', true, 'radio');
    elementShouldBeEnabled('elb_m_050536');
    elementShouldBeEnabled('elb_m_050537');
    elementShouldBeEnabled('elb_m_050538');
    elementShouldBeEnabled('elb_m_050540');

    // Thickening
    clickElement('elb_m_050538', true, 'checkbox');
    elementShouldBeEnabled('elb_m_050539');
  });
});
