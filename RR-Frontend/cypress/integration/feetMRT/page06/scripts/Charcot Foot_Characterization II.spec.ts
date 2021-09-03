import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 06 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_SoftTissue.url + '/' + pageId);
        });
      });
    });
  });

  it('Charcot Foot_Characterization II', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(10);
    elementShouldBeEnabled('none');

    cy.get('#ui-tabpanel-1-label')
      .shadowFind('span')
      .click({ force: true });

    elementShouldBeEnabled('anc_m_060289');
    elementShouldBeEnabled('anc_m_060290');
    elementShouldBeEnabled('anc_m_0602108');

    elementShouldBeEnabled('anc_m_0603105');
    elementShouldBeEnabled('anc_m_0603106');
    elementShouldBeEnabled('anc_m_0603142');

    clickElement('anc_m_060290', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060291');
    elementShouldBeEnabled('anc_m_0602106');

    clickElement('anc_m_060291', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060292');
    elementShouldBeEnabled('anc_m_0602105');

    clickElement('anc_m_0602106', true, 'checkbox');
    elementShouldBeEnabled('anc_m_0602107');
  });
});
