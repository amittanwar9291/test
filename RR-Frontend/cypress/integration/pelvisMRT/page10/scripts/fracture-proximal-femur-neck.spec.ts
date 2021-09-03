import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeDisabled, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
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
    it('Bones -> Fracture Proximal Femur neck', () => {
      clickElement('pel_m_100105', true, 'radio');
      elementShouldBeEnabled('pel_m_100106-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('pel_m_100107');
      elementShouldBeEnabled('pel_m_100203');
      elementShouldBeEnabled('pel_m_100302');
      elementShouldBeEnabled('pel_m_100303');
      elementShouldBeEnabled('pel_m_100304');
      elementShouldBeEnabled('pel_m_100305');

      cy.byRRID('pel_m_100203').click();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[id="Rechts_Femurhals"]')
        .shadowClick();
      cy.get('.f-horizontal.ng-star-inserted > .ng-valid')
        .shadowFind('[alt="cross-image"]')
        .shadowClick();

      elementShouldBeDisabled('pel_m_100304');
      clickElement('pel_m_100302', true, 'radio');
      elementShouldBeEnabled('pel_m_100402');
      elementShouldBeEnabled('pel_m_100403');
      elementShouldBeEnabled('pel_m_100404');

      clickElement('pel_m_100402', true, 'radio');
      elementShouldBeEnabled('pel_m_100501');
      elementShouldBeEnabled('pel_m_100504');
      elementShouldBeEnabled('pel_m_100505');

      clickElement('pel_m_100501', true, 'radio');
      elementShouldBeEnabled('pel_m_100502');
      elementShouldBeEnabled('pel_m_100503');

      clickElement('pel_m_100303', true, 'radio');
      elementShouldBeEnabled('pel_m_100405');
      elementShouldBeEnabled('pel_m_100406');
      elementShouldBeEnabled('pel_m_100407');

      clickElement('pel_m_100405', true, 'radio');
      elementShouldBeEnabled('pel_m_100511');
      elementShouldBeEnabled('pel_m_100512');
      elementShouldBeEnabled('pel_m_100513');

      clickElement('pel_m_100406', true, 'radio');
      elementShouldBeEnabled('pel_m_100514');
      elementShouldBeEnabled('pel_m_100515');
      elementShouldBeEnabled('pel_m_100516');

      clickElement('pel_m_100516', true, 'radio');
      elementShouldBeEnabled('pel_m_100517');
      elementShouldBeEnabled('pel_m_100518');
      elementShouldBeEnabled('pel_m_100519');

      clickElement('pel_m_100305', true, 'radio');
      elementShouldBeEnabled('pel_m_100411');
      elementShouldBeEnabled('pel_m_100412');
      elementShouldBeEnabled('pel_m_100413');

      clickElement('pel_m_100413', true, 'radio');
      elementShouldBeEnabled('pel_m_100414');
    });
  });
});
