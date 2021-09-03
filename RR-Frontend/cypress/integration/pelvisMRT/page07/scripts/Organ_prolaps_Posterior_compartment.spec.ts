import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig, typeValueIntoField } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { pelvisMRTRoutes } from '@environments/pages-routes';

context('Page 07 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();

  const findingColumn = new FindingColumnPageObject('pel_m_070107', 'pel_m_070107-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  describe('Organ_prolaps_Posterior_compartment.spec', () => {
    it('Organ_prolaps_Posterior_compartment.spec', () => {
      clickElement('uni_01_007', true, 'radio');
      clickElement('pel_m_010207', true, 'radio');
      clickElement('pel_m_010208', true, 'checkbox');

      cy.wait(2000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      clickElement('pel_m_070106', true, 'radio');

      findingColumn.selectFindingOptionByAppearance(1);

      elementShouldBeEnabled('pel_m_070108');
      clickElement('pel_m_070501');

      elementShouldBeEnabled('pel_m_070237');
      elementShouldBeEnabled('pel_m_070337');
      elementShouldBeEnabled('pel_m_070430');
      elementShouldBeEnabled('pel_m_070526');

      clickElement('pel_m_070237', true, 'checkbox');

      elementShouldBeEnabled('pel_m_070241');
      elementShouldBeEnabled('pel_m_070239');

      typeValueIntoField('pel_m_070239', '01');
      elementShouldBeEnabled('pel_m_0702117');

      clickElement('pel_m_070430', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070432');
      elementShouldBeEnabled('pel_m_070433');

      clickElement('pel_m_070526', true, 'checkbox');
      elementShouldBeEnabled('pel_m_070515');
      elementShouldBeEnabled('pel_m_070516');

      elementShouldBeEnabled('pel_m_070518');
      elementShouldBeEnabled('pel_m_070519');
      elementShouldBeEnabled('pel_m_070520');

      elementShouldBeEnabled('pel_m_070522');
      elementShouldBeEnabled('pel_m_070523');
      elementShouldBeEnabled('pel_m_070524');
    });
  });
});
