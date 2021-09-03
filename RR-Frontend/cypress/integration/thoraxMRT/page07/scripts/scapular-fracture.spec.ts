import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { thoraxMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 07 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('tho_m_070107', 'tho_m_070106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ThoraxMRT', config).then(id => {
          pageId = id;
          cy.visit(thoraxMRTRoutes.ThoraxMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Scapular Fracture', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('tho_m_070206');
      elementShouldBeEnabled('tho_m_070207');
      elementShouldBeEnabled('tho_m_070315');
      elementShouldBeEnabled('tho_m_070320');
      elementShouldBeEnabled('tho_m_070409');
      elementShouldBeEnabled('tho_m_070414');

      clickElement('tho_m_070315', true, 'radio');
      elementShouldBeEnabled('tho_m_070317');
      elementShouldBeEnabled('tho_m_070318');
      elementShouldBeEnabled('tho_m_070319');

      clickElement('tho_m_070320', true, 'radio');
      elementShouldBeEnabled('tho_m_070322');
      elementShouldBeEnabled('tho_m_070323');

      clickElement('tho_m_070409', true, 'radio');
      elementShouldBeEnabled('tho_m_070411');
      elementShouldBeEnabled('tho_m_070412');
      elementShouldBeEnabled('tho_m_070413');

      clickElement('tho_m_070414', true, 'radio');
      elementShouldBeEnabled('tho_m_070415');
      elementShouldBeEnabled('tho_m_070416');
    });
  });
});
