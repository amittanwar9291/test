import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { elementShouldBeEnabled, clickElement, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { hipMRTRoutes } from '@environments/pages-routes';

context('Page 05 - HIPMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('hip_m_050106', 'hip_m_050106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HipMRT', config).then(id => {
          pageId = id;
          cy.visit(hipMRTRoutes.HipMRT_CartilageAndLabrum.url + '/' + pageId);
        });
      });
    });
  });

  it('Cartilage lesion', () => {
    clickElement('hip_m_050105', true, 'radio');
    findingColumn.selectFindingOptionByAppearance(2);
    elementShouldBeEnabled('hip_m_050107');
    elementShouldBeEnabled('hip_m_050205');

    elementShouldBeEnabled('hip_m_050205');
    elementShouldBeEnabled('hip_m_050206');
    elementShouldBeEnabled('hip_m_050204');

    elementShouldBeEnabled('hip_m_050310');
    elementShouldBeEnabled('hip_m_050311');

    cy.byRRID('hip_m_050204').click();
    cy.get('.ng-valid')
      .shadowFind('#Zone_6')
      .eq(0)
      .click({ force: true })
      .should('have.class', 'element-selected');

    cy.get('.ng-valid')
      .shadowFind('.close-button')
      .eq(1)
      .click({ force: true });

    elementShouldBeEnabled('hip_m_050310');
    elementShouldBeEnabled('hip_m_050311');

    clickElement('hip_m_050310', true, 'radio');
    elementShouldBeEnabled('hip_m_050427');
    elementShouldBeEnabled('hip_m_050428');
    elementShouldBeEnabled('hip_m_050429');
    elementShouldBeEnabled('hip_m_050430');
    elementShouldBeEnabled('hip_m_050431');

    clickElement('hip_m_050311', true, 'radio');
    elementShouldBeEnabled('hip_m_050410');
    elementShouldBeEnabled('hip_m_050411');
    elementShouldBeEnabled('hip_m_050412');
    elementShouldBeEnabled('hip_m_050413');

    elementShouldBeEnabled('hip_m_050415');

    elementShouldBeEnabled('hip_m_050522');
    elementShouldBeEnabled('hip_m_050523');
    clickElement('hip_m_050523', true, 'checkbox');
    elementShouldBeEnabled('hip_m_050525');
    elementShouldBeEnabled('hip_m_050518');
    elementShouldBeEnabled('hip_m_050516');
    elementShouldBeEnabled('hip_m_050517');
  });
});
