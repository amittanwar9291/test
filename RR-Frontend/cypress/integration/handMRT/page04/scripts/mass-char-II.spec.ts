import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { handMRTRoutes } from '@environments/pages-routes';

context('Page 04 - HandMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('han_m_040107', 'han_m_040106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'HandMRT', config).then(id => {
          pageId = id;
          cy.visit(handMRTRoutes.HandMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Mass Char II', () => {
    clickElement('uni_x_030104', true, 'radio');
    cy.get('.button-next').click();

    clickElement('han_m_040105');
    elementShouldBeEnabled('han_m_040106-1');

    findingColumn.selectFindingOptionByAppearance(9);
    elementShouldBeEnabled('han_m_040107');

    cy.get('.ui-tabview-nav > :nth-child(3)').click();

    elementShouldBeEnabled('han_m_040278');
    elementShouldBeEnabled('han_m_040279');
    elementShouldBeEnabled('han_m_040280');
    elementShouldBeEnabled('han_m_040283');
    elementShouldBeEnabled('han_m_040285');
    elementShouldBeEnabled('han_m_040286');

    elementShouldBeEnabled('han_m_0403162');
    elementShouldBeEnabled('han_m_0403163');
    elementShouldBeEnabled('han_m_0403164');
    elementShouldBeEnabled('han_m_0403169');
    elementShouldBeEnabled('han_m_0403170');

    elementShouldBeEnabled('han_m_0404136');
    elementShouldBeEnabled('han_m_0404137');
    elementShouldBeEnabled('han_m_0404138');
    elementShouldBeEnabled('han_m_0404139');
    elementShouldBeEnabled('han_m_0404140');
    elementShouldBeEnabled('han_m_0404141');
    elementShouldBeEnabled('han_m_0404143');

    elementShouldBeEnabled('han_m_0405128');
    elementShouldBeEnabled('han_m_0405129');
    elementShouldBeEnabled('han_m_0405130');
    elementShouldBeEnabled('han_m_0405131');
    elementShouldBeEnabled('han_m_0405133');
    elementShouldBeEnabled('han_m_0405134');

    clickElement('han_m_040280', true, 'checkbox');
    elementShouldBeEnabled('han_m_040281');
    elementShouldBeEnabled('han_m_040282');

    clickElement('han_m_040283', true, 'checkbox');
    elementShouldBeEnabled('han_m_040284');

    clickElement('han_m_0403164', true, 'checkbox');
    elementShouldBeEnabled('han_m_0403166');
    elementShouldBeEnabled('han_m_0403168');

    clickElement('han_m_0404143', true, 'checkbox');
    elementShouldBeEnabled('han_m_0404144');
  });
});
