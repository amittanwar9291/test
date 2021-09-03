import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';

context('Page 02 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_0201100', 'elb_m_0201100-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Anamnesis.url + '/' + pageId);
        });
      });
    });
  });

  it('Indication-Inflammation', () => {
    findingColumn.selectFindingOptionByAppearance(8);
    elementShouldBeEnabled('elb_m_0201101');
    elementShouldBeEnabled('elb_m_0202109');
  });
});
