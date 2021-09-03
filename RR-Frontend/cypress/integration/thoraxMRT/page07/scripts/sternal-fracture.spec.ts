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
    it('Bones -> Sternal Fracture', () => {
      clickElement('tho_m_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(3);
      elementShouldBeEnabled('tho_m_070215');
      elementShouldBeEnabled('tho_m_070220');
      elementShouldBeEnabled('tho_m_070331');
      elementShouldBeEnabled('tho_m_070336');

      clickElement('tho_m_070215', true, 'radio');
      elementShouldBeEnabled('tho_m_070217');
      elementShouldBeEnabled('tho_m_070218');
      elementShouldBeEnabled('tho_m_070219');

      clickElement('tho_m_070220', true, 'radio');
      elementShouldBeEnabled('tho_m_070222');
      elementShouldBeEnabled('tho_m_070223');
      elementShouldBeEnabled('tho_m_070224');

      clickElement('tho_m_070331', true, 'radio');
      elementShouldBeEnabled('tho_m_070333');
      elementShouldBeEnabled('tho_m_070334');
      elementShouldBeEnabled('tho_m_070335');

      clickElement('tho_m_070336', true, 'radio');
      elementShouldBeEnabled('tho_m_070337');
      elementShouldBeEnabled('tho_m_070338');
    });
  });
});
