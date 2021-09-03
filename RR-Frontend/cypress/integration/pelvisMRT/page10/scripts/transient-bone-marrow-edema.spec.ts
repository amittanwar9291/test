import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 10 - Bones', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_100107', 'pel_m_100106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Bones.url + '/' + pageId);
        });
      });
    });
  });

  describe('Bones', () => {
    it('Bones -> Transient bone marrow edema ("transient osteoporosis" (TBME))', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(7);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100349');
      elementShouldBeEnabled('pel_m_100350');
      elementShouldBeEnabled('pel_m_100351');

      elementShouldBeEnabled('pel_m_100473');
      elementShouldBeEnabled('pel_m_100475');
      elementShouldBeEnabled('pel_m_100476');

      clickElement('pel_m_100473', true, 'radio');
      elementShouldBeEnabled('pel_m_100477');

      clickElement('pel_m_100475', true, 'radio');
      elementShouldBeEnabled('pel_m_100477');

      clickElement('pel_m_100476', true, 'radio');
      elementShouldBeEnabled('pel_m_100477');
    });
  });
});
