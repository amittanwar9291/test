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
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Diseases of the MTP.spec', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(3);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060214');
    elementShouldBeEnabled('anc_m_060215');

    clickElement('anc_m_060214', true, 'radio');
    elementShouldBeEnabled('anc_m_060322');
    elementShouldBeEnabled('anc_m_060323');

    clickElement('anc_m_060322', true, 'radio');
    elementShouldBeEnabled('anc_m_060462');
    elementShouldBeEnabled('anc_m_060463');
    elementShouldBeEnabled('anc_m_060464');
    elementShouldBeEnabled('anc_m_060465');
    elementShouldBeEnabled('anc_m_060466');
    elementShouldBeEnabled('anc_m_060468');
    elementShouldBeEnabled('anc_m_060469');

    elementShouldBeEnabled('anc_m_060506');
    elementShouldBeEnabled('anc_m_060507');

    clickElement('anc_m_060323', true, 'radio');
    elementShouldBeEnabled('anc_m_060471');
    elementShouldBeEnabled('anc_m_060472');
    elementShouldBeEnabled('anc_m_060474');
    elementShouldBeEnabled('anc_m_060475');

    clickElement('anc_m_060215', true, 'radio');
    elementShouldBeEnabled('anc_m_060325');
    elementShouldBeEnabled('anc_m_060326');
    elementShouldBeEnabled('anc_m_060327');
    elementShouldBeEnabled('anc_m_060328');
    elementShouldBeEnabled('anc_m_060329');

    elementShouldBeEnabled('anc_m_060331');
    elementShouldBeEnabled('anc_m_060332');
    elementShouldBeEnabled('anc_m_060333');

    clickElement('anc_m_060325', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060477');
    elementShouldBeEnabled('anc_m_060478');
    elementShouldBeEnabled('anc_m_060479');
    elementShouldBeEnabled('anc_m_060480');
    elementShouldBeEnabled('anc_m_060481');
    elementShouldBeEnabled('anc_m_060482');
  });
});
