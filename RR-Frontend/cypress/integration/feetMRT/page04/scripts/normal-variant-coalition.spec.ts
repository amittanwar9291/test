import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 04 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('anc_m_040107', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  it('Coalition', () => {
    clickElement('anc_m_040105');
    findingColumn.selectFindingOptionByAppearance(0);

    clickElement('anc_m_0403200', true, 'radio');
    elementShouldBeEnabled('anc_m_040302');
    elementShouldBeEnabled('anc_m_040303');

    clickElement('anc_m_040302', true, 'radio');
    elementShouldBeEnabled('anc_m_040305');
    elementShouldBeEnabled('anc_m_040306');
    elementShouldBeEnabled('anc_m_040307');

    clickElement('anc_m_040303', true, 'radio');
    elementShouldBeEnabled('anc_m_040305');
    elementShouldBeEnabled('anc_m_040306');
    elementShouldBeEnabled('anc_m_040307');
  });
});
