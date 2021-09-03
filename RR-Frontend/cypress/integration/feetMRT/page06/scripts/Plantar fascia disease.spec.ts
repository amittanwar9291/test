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

  it('Plantar fascia disease', () => {
    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060210');
    elementShouldBeEnabled('anc_m_060211');
    elementShouldBeEnabled('anc_m_060212');

    elementShouldBeEnabled('anc_m_060312');
    elementShouldBeEnabled('anc_m_060313');
    elementShouldBeEnabled('anc_m_060314');
    elementShouldBeEnabled('anc_m_060316');
    elementShouldBeEnabled('anc_m_060317');
    elementShouldBeEnabled('anc_m_060318');
    elementShouldBeEnabled('anc_m_060320');
    elementShouldBeEnabled('anc_m_060321');

    clickElement('anc_m_060312', true, 'radio');
    elementShouldBeEnabled('anc_m_060408');
    elementShouldBeEnabled('anc_m_060409');

    clickElement('anc_m_060313', true, 'radio');
    elementShouldBeEnabled('anc_m_060413');
    elementShouldBeEnabled('anc_m_060414');
    elementShouldBeEnabled('anc_m_060420');
    elementShouldBeEnabled('anc_m_060422');

    clickElement('anc_m_060314', true, 'radio');
    elementShouldBeEnabled('anc_m_060426');
    elementShouldBeEnabled('anc_m_060427');
    elementShouldBeEnabled('anc_m_060428');
    elementShouldBeEnabled('anc_m_060431');

    clickElement('anc_m_060428', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060429');
    elementShouldBeEnabled('anc_m_060430');

    clickElement('anc_m_060314', true, 'radio');
    elementShouldBeEnabled('anc_m_060426');
    elementShouldBeEnabled('anc_m_060427');

    clickElement('anc_m_060431', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060432');
    elementShouldBeEnabled('anc_m_060433');

    clickElement('anc_m_060316', true, 'radio');
    elementShouldBeEnabled('anc_m_060415');

    clickElement('anc_m_060415', true, 'checkbox');
    elementShouldBeEnabled('anc_m_060417');
    elementShouldBeEnabled('anc_m_060417');

    clickElement('anc_m_060317', true, 'radio');
    elementShouldBeEnabled('anc_m_060438');
    elementShouldBeEnabled('anc_m_060439');

    clickElement('anc_m_060318', true, 'radio');
    elementShouldBeEnabled('anc_m_060440');
    elementShouldBeEnabled('anc_m_060441');
    elementShouldBeEnabled('anc_m_060443');

    clickElement('anc_m_060320', true, 'radio');
    elementShouldBeEnabled('anc_m_060445');
    elementShouldBeEnabled('anc_m_060446');
    elementShouldBeEnabled('anc_m_060447');
    elementShouldBeEnabled('anc_m_060449');
    elementShouldBeEnabled('anc_m_060450');
    elementShouldBeEnabled('anc_m_060451');

    clickElement('anc_m_060320', true, 'radio');
    elementShouldBeEnabled('anc_m_060445');
    elementShouldBeEnabled('anc_m_060446');
    elementShouldBeEnabled('anc_m_060447');

    clickElement('anc_m_060321', true, 'radio');
    elementShouldBeEnabled('anc_m_060452');
    elementShouldBeEnabled('anc_m_060453');
  });
});
