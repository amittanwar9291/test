import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { kneeMRTRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Soft parts', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'KneeMRT', config).then(id => {
          pageId = id;
          cy.visit(kneeMRTRoutes.KneeMRT_SoftParts.url + '/' + pageId);
        });
      });
    });
  });

  it('Tendons - patellar tendon', () => {
    clickElement('kne_m_080105');
    elementShouldBeEnabled('none-1');

    findingColumn.selectFindingOptionByAppearance(5);
    elementShouldBeEnabled('none');
    elementShouldBeEnabled('kne_m_080240');
    elementShouldBeEnabled('kne_m_080336');

    clickElement('kne_m_080240');
    elementShouldBeEnabled('kne_m_080242');
    elementShouldBeEnabled('kne_m_080243');
    elementShouldBeEnabled('kne_m_080245');
    elementShouldBeEnabled('kne_m_080249');
    elementShouldBeEnabled('kne_m_080250');
    elementShouldBeEnabled('kne_m_080251');

    clickElement('kne_m_080243');
    elementShouldBeEnabled('kne_m_080244');
    clickElement('kne_m_080245');
    elementShouldBeEnabled('kne_m_080246');

    clickElement('kne_m_080336');
    elementShouldBeEnabled('kne_m_080337');
    elementShouldBeEnabled('kne_m_080411');

    clickElement('kne_m_080337');
    elementShouldBeEnabled('kne_m_080338');
    elementShouldBeEnabled('kne_m_080339');
    elementShouldBeEnabled('kne_m_080343');
    elementShouldBeEnabled('kne_m_080344');

    clickElement('kne_m_080339');
    elementShouldBeEnabled('kne_m_080341');
    elementShouldBeEnabled('kne_m_080342');

    clickElement('kne_m_080411');
    elementShouldBeEnabled('kne_m_080412');
    elementShouldBeEnabled('kne_m_080516');
    elementShouldBeEnabled('kne_m_080520');

    clickElement('kne_m_080412');
    elementShouldBeEnabled('kne_m_080414');
    elementShouldBeEnabled('kne_m_080415');
    elementShouldBeEnabled('kne_m_080416');
    elementShouldBeEnabled('kne_m_080417');
    elementShouldBeEnabled('kne_m_080418');
    elementShouldBeEnabled('kne_m_080419');

    clickElement('kne_m_080516');
    elementShouldBeEnabled('kne_m_080517');
    elementShouldBeEnabled('kne_m_080518');
    elementShouldBeEnabled('kne_m_080519');

    clickElement('kne_m_080520');
    elementShouldBeEnabled('kne_m_080521');
    elementShouldBeEnabled('kne_m_080522');
    elementShouldBeEnabled('kne_m_080523');
    elementShouldBeEnabled('kne_m_080524');
    elementShouldBeEnabled('kne_m_080525');
  });
});
