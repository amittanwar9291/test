import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 05 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_050106', 'han_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_CapsuleAndRibbons.url + '/' + pageId);
        });
      });
    });
  });

  it('Ligament lesions of the fingers_D1', () => {
    clickElement('han_m_050105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(4);
    elementShouldBeEnabled('han_m_050107');

    elementShouldBeEnabled('han_m_050217');
    elementShouldBeEnabled('han_m_050218');
    elementShouldBeEnabled('han_m_050219');
    elementShouldBeEnabled('han_m_050220');
    elementShouldBeEnabled('han_m_050221');
    clickElement('han_m_050221', true, 'radio');
    elementShouldBeEnabled('han_m_050239');

    elementShouldBeEnabled('han_m_050323');
    elementShouldBeEnabled('han_m_050329');
    elementShouldBeEnabled('han_m_050406');
    elementShouldBeEnabled('han_m_050414');

    clickElement('han_m_050323', true, 'checkbox');
    elementShouldBeEnabled('han_m_050324');
    elementShouldBeEnabled('han_m_050325');
    elementShouldBeEnabled('han_m_050326');
    elementShouldBeEnabled('han_m_050327');
    elementShouldBeEnabled('han_m_050328');

    clickElement('han_m_050329', true, 'checkbox');
    elementShouldBeEnabled('han_m_050330');
    elementShouldBeEnabled('han_m_050331');
    elementShouldBeEnabled('han_m_050332');
    elementShouldBeEnabled('han_m_050333');

    clickElement('han_m_050406', true, 'checkbox');
    elementShouldBeEnabled('han_m_050408');
    elementShouldBeEnabled('han_m_050409');
    clickElement('han_m_050409', true, 'radio');
    elementShouldBeEnabled('han_m_050411');
    elementShouldBeEnabled('han_m_050412');
    elementShouldBeEnabled('han_m_050413');

    clickElement('han_m_050414', true, 'checkbox');
    elementShouldBeEnabled('han_m_050415');

    clickElement('han_m_050217', true, 'radio');
    elementShouldBeEnabled('han_m_050312');
    elementShouldBeEnabled('han_m_050316');
    elementShouldBeEnabled('han_m_050320');

    elementShouldBeEnabled('han_m_050402');
    elementShouldBeEnabled('han_m_050403');
    elementShouldBeEnabled('han_m_050404');
    elementShouldBeEnabled('han_m_050405');

    clickElement('han_m_050312', true, 'checkbox');
    elementShouldBeEnabled('han_m_050313');
    elementShouldBeEnabled('han_m_050314');
    elementShouldBeEnabled('han_m_050315');

    clickElement('han_m_050316', true, 'checkbox');
    elementShouldBeEnabled('han_m_050317');
    elementShouldBeEnabled('han_m_050318');
    elementShouldBeEnabled('han_m_050319');

    clickElement('han_m_050320', true, 'checkbox');
    elementShouldBeEnabled('han_m_050321');
  });
});
