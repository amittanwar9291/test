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

  it('Ligaments Dislocation with lesions of MCL and LCL', () => {
    clickElement('elb_m_050105', true, 'radio');
    elementShouldBeEnabled('elb_m_050106-1');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('elb_m_050107');

    elementShouldBeEnabled('elb_m_050213');
    elementShouldBeEnabled('elb_m_050215');
    elementShouldBeEnabled('elb_m_050217');

    clickElement('elb_m_050217', true, 'radio');

    elementShouldBeEnabled('elb_m_050330');
    elementShouldBeEnabled('elb_m_050331');
    elementShouldBeEnabled('elb_m_050332');
    elementShouldBeEnabled('elb_m_050333');
    elementShouldBeEnabled('elb_m_050334');
  });
});
