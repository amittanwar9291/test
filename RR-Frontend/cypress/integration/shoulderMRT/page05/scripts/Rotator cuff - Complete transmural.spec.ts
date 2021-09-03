import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { shoulderMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Shoulder Page 05 - AC-Joint & Rotator Cuff', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('sho_m_050111', 'sho_m_050110-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ShoulderMRT', config).then(id => {
          pageId = id;
          cy.visit(shoulderMRTRoutes.ShoulderMRT_Rotator.url + '/' + pageId);
        });
      });
    });
  });

  describe('AC joint - trauma', () => {
    it('AC joint', () => {
      clickElement('sho_m_050109', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('sho_m_050111');
      elementShouldBeEnabled('sho_m_050209');
      elementShouldBeEnabled('sho_m_050210');

      elementShouldBeEnabled('uni_05_003');
      elementShouldBeEnabled('uni_05_005');
      elementShouldBeEnabled('uni_05_007');

      clickElement('sho_m_050209', true, 'radio');
      cy.get('.m-b-0').should('be.visible');
      elementShouldBeEnabled('sho_m_050312');
      elementShouldBeEnabled('sho_m_050313');
      elementShouldBeEnabled('sho_m_050314');
      elementShouldBeEnabled('sho_m_050315');
      elementShouldBeEnabled('sho_m_050316');
      elementShouldBeEnabled('sho_m_050317');

      clickElement('sho_m_050312', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      clickElement('sho_m_0504225', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050501', true, 'checkbox');
      clickElement('sho_m_050525', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050313', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      clickElement('sho_m_0504225', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050501', true, 'checkbox');
      clickElement('sho_m_050525', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050314', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050415');
      elementShouldBeEnabled('sho_m_050420');

      clickElement('sho_m_050415', true, 'radio');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050420', true, 'radio');
      elementShouldBeEnabled('sho_m_050421');
      elementShouldBeEnabled('sho_m_050422');
      elementShouldBeEnabled('sho_m_050423');

      clickElement('sho_m_050501', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050502');
      elementShouldBeEnabled('sho_m_050507');

      clickElement('sho_m_050502', true, 'radio');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050507', true, 'radio');
      elementShouldBeEnabled('sho_m_050508');
      elementShouldBeEnabled('sho_m_050509');

      clickElement('sho_m_050315', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050415');
      elementShouldBeEnabled('sho_m_050420');

      clickElement('sho_m_050415', true, 'radio');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050420', true, 'radio');
      elementShouldBeEnabled('sho_m_050421');
      elementShouldBeEnabled('sho_m_050422');
      elementShouldBeEnabled('sho_m_050423');

      clickElement('sho_m_050501', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050502');
      elementShouldBeEnabled('sho_m_050507');

      clickElement('sho_m_050502', true, 'radio');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050507', true, 'radio');
      elementShouldBeEnabled('sho_m_050508');
      elementShouldBeEnabled('sho_m_050509');

      clickElement('sho_m_050316', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050415');
      elementShouldBeEnabled('sho_m_050420');

      clickElement('sho_m_050415', true, 'radio');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050420', true, 'radio');
      elementShouldBeEnabled('sho_m_050421');
      elementShouldBeEnabled('sho_m_050422');
      elementShouldBeEnabled('sho_m_050423');

      clickElement('sho_m_050501', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050502');
      elementShouldBeEnabled('sho_m_050507');

      clickElement('sho_m_050502', true, 'radio');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050507', true, 'radio');
      elementShouldBeEnabled('sho_m_050508');
      elementShouldBeEnabled('sho_m_050509');

      clickElement('sho_m_050317', true, 'radio');
      elementShouldBeEnabled('sho_m_050414');
      elementShouldBeEnabled('sho_m_050501');

      clickElement('sho_m_050414', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050415');
      elementShouldBeEnabled('sho_m_050420');

      clickElement('sho_m_050415', true, 'radio');
      elementShouldBeEnabled('sho_m_050416');
      elementShouldBeEnabled('sho_m_050417');
      elementShouldBeEnabled('sho_m_050418');
      elementShouldBeEnabled('sho_m_050419');

      clickElement('sho_m_050420', true, 'radio');
      elementShouldBeEnabled('sho_m_050421');
      elementShouldBeEnabled('sho_m_050422');
      elementShouldBeEnabled('sho_m_050423');

      clickElement('sho_m_050501', true, 'checkbox');
      elementShouldBeEnabled('sho_m_050502');
      elementShouldBeEnabled('sho_m_050507');

      clickElement('sho_m_050502', true, 'radio');
      elementShouldBeEnabled('sho_m_050503');
      elementShouldBeEnabled('sho_m_050504');
      elementShouldBeEnabled('sho_m_050505');
      elementShouldBeEnabled('sho_m_050506');

      clickElement('sho_m_050507', true, 'radio');
      elementShouldBeEnabled('sho_m_050508');
      elementShouldBeEnabled('sho_m_050509');
    });
  });
});
