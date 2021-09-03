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

  it('Mass Osteolysis Characterization II I describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    NavigationPageObject.visitPageNumber(4);

    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('elb_m_040107');
    cy.get('div[role=radio]')
      .eq(2)
      .should('not.have.css', 'pointer-events', 'none');

    clickElement('elb_m_040438', true);

    elementShouldBeEnabled('elb_m_0402133');
    elementShouldBeEnabled('elb_m_0402134');
    elementShouldBeEnabled('elb_m_0402135');
    elementShouldBeEnabled('elb_m_0402138');
    elementShouldBeEnabled('elb_m_0402139');
    elementShouldBeEnabled('elb_m_0402140');

    elementShouldBeEnabled('elb_m_0403163');
    elementShouldBeEnabled('elb_m_0403164');
    elementShouldBeEnabled('elb_m_0403165');

    elementShouldBeEnabled('elb_m_0403166');
    elementShouldBeEnabled('elb_m_0402138');

    elementShouldBeEnabled('elb_m_0404175');
    elementShouldBeEnabled('elb_m_0404176');
    elementShouldBeEnabled('elb_m_0404177');
    elementShouldBeEnabled('elb_m_0404178');
    elementShouldBeEnabled('elb_m_0404179');
    elementShouldBeEnabled('elb_m_0404180');
    elementShouldBeEnabled('elb_m_0404182');

    elementShouldBeEnabled('elb_m_0405172');
    elementShouldBeEnabled('elb_m_0405173');
    elementShouldBeEnabled('elb_m_0405174');
    elementShouldBeEnabled('elb_m_0405175');

    elementShouldBeEnabled('elb_m_0405165');
    elementShouldBeEnabled('elb_m_0405166');

    clickElement('elb_m_0402135', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0402136');
    elementShouldBeEnabled('elb_m_0402137');

    clickElement('elb_m_0402138', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0402141');

    clickElement('elb_m_0403165', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0403202');
    elementShouldBeEnabled('elb_m_0403203');

    clickElement('elb_m_0404182', true, 'checkbox');
    elementShouldBeEnabled('elb_m_0404193');
  });
});
