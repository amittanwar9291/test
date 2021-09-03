import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { elbowMRTRoutes } from '@environments/pages-routes';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 04 - ElbowMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('elb_m_040107', 'elb_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'ElbowMRT', config).then(id => {
          pageId = id;
          cy.visit(elbowMRTRoutes.ElbowMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Osteomyelitis', () => {
    clickElement('uni_x_030104', true, 'radio');
    NavigationPageObject.visitPageNumber(4);

    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('elb_m_040107');

    elementShouldBeEnabled('elb_m_0402113');
    elementShouldBeEnabled('elb_m_0402114');
    elementShouldBeEnabled('elb_m_0403130');
    elementShouldBeEnabled('elb_m_0403145');
    elementShouldBeEnabled('elb_m_0403146');

    elementShouldBeEnabled('elb_m_0404146');
    elementShouldBeEnabled('elb_m_0404147');
    elementShouldBeEnabled('elb_m_0404148');
    elementShouldBeEnabled('elb_m_0404194');
    elementShouldBeEnabled('elb_m_0404149');
    elementShouldBeEnabled('elb_m_0404165');

    elementShouldBeEnabled('elb_m_0405131');
    elementShouldBeEnabled('elb_m_0405132');
    elementShouldBeEnabled('elb_m_0405134');
    elementShouldBeEnabled('elb_m_0405135');

    clickElement('elb_m_0402114', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0402117');
    elementShouldBeEnabled('elb_m_0402120');
    elementShouldBeEnabled('elb_m_0402123');
    elementShouldBeEnabled('elb_m_0402126');
    elementShouldBeEnabled('elb_m_0402127');
    elementShouldBeEnabled('elb_m_0402128');

    clickElement('elb_m_0403130', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0403133');
    elementShouldBeEnabled('elb_m_0403136');
    elementShouldBeEnabled('elb_m_0403139');
    elementShouldBeEnabled('elb_m_0403142');
    elementShouldBeEnabled('elb_m_0403143');
    elementShouldBeEnabled('elb_m_0403145');
    elementShouldBeEnabled('elb_m_0403146');

    clickElement('elb_m_0404149', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0404152');
    elementShouldBeEnabled('elb_m_0404155');
    elementShouldBeEnabled('elb_m_0404164');
  });
});
