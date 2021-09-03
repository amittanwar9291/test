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

  it('Mass Osteolysis Characterization I I describe', () => {
    clickElement('uni_x_030104', true, 'radio');
    NavigationPageObject.visitPageNumber(4);

    clickElement('elb_m_040105');
    elementShouldBeEnabled('elb_m_040106-1');
    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('elb_m_040107');
    cy.get('div[role=radio]')
      .eq(2)
      .should('not.have.css', 'pointer-events', 'none');

    clickElement('elb_m_040339', true);

    elementShouldBeEnabled('elb_m_0402158');
    elementShouldBeEnabled('elb_m_0402159');
    elementShouldBeEnabled('elb_m_0402160');

    elementShouldBeEnabled('elb_m_0402162');
    elementShouldBeEnabled('elb_m_0402163');
    elementShouldBeEnabled('elb_m_0402165');
    elementShouldBeEnabled('elb_m_0402166');
    elementShouldBeEnabled('elb_m_0402167');
    elementShouldBeEnabled('elb_m_0402168');

    elementShouldBeEnabled('elb_m_0404159');
    elementShouldBeEnabled('elb_m_0404160');
    elementShouldBeEnabled('elb_m_0404161');

    clickElement('elb_m_0404160', true, 'radio');
    elementShouldBeEnabled('elb_m_0404162');
    elementShouldBeEnabled('elb_m_0404163');
    elementShouldBeEnabled('elb_m_0404188');
    elementShouldBeEnabled('elb_m_0404189');
    elementShouldBeEnabled('elb_m_0404190');
    elementShouldBeEnabled('elb_m_0404191');
    elementShouldBeEnabled('elb_m_0404192');

    clickElement('elb_m_0404161', true, 'radio');
    elementShouldBeEnabled('elb_m_0404162');
    elementShouldBeEnabled('elb_m_0404163');
    elementShouldBeEnabled('elb_m_0404188');
    elementShouldBeEnabled('elb_m_0404189');
    elementShouldBeEnabled('elb_m_0404190');
    elementShouldBeEnabled('elb_m_0404191');
    elementShouldBeEnabled('elb_m_0404192');

    elementShouldBeEnabled('elb_m_0403195');
    elementShouldBeEnabled('elb_m_0403198');

    elementShouldBeEnabled('elb_m_0405154');
    elementShouldBeEnabled('elb_m_0405155');
    elementShouldBeEnabled('elb_m_0405156');
    elementShouldBeEnabled('elb_m_0405157');
    elementShouldBeEnabled('elb_m_0405158');
    elementShouldBeEnabled('elb_m_0405159');
  });
});
