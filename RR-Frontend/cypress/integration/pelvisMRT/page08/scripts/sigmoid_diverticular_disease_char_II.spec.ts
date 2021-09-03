import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { pelvisMRTRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, elementShouldHaveGivenState, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { clickElement } from '../../../../shared/service';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { NavigationPageObject } from '../../../../page objects/navigation-page-object';

context('Page 08 - PelvisMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('pel_m_080108', 'pel_m_080107-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'PelvisMRT', config).then(id => {
          pageId = id;
          cy.visit(pelvisMRTRoutes.PelvisMRT_Localization.url + '/' + pageId);
        });
      });
    });
  });

  it('Sigma mass Char II', () => {
    // Page 1: select Female and Pelvis
    clickElement('uni_01_007', true, 'radio');
    clickElement('pel_m_010205', true, 'radio');

    // Go to Page 3 - CE - Yes
    NavigationPageObject.visitPageNumber(3);
    clickElement('uni_x_030104', true, 'radio');
    elementShouldHaveGivenState('true', 'uni_x_030104');

    // Go to Page 8
    NavigationPageObject.visitPageNumber(8);

    // Select Sigmoid diverticular disease
    clickElement('pel_m_080105', true, 'radio');
    elementShouldBeEnabled('pel_m_080107-1');
    findingColumn.selectFindingOptionByAppearance(1);

    // Char II
    clickElement('pel_m_080322', true);
    elementShouldBeEnabled('pel_m_080243');
    elementShouldBeEnabled('pel_m_080332');
    elementShouldBeEnabled('pel_m_080529');
    elementShouldBeEnabled('pel_m_080530');
    elementShouldBeEnabled('pel_m_080531');

    // 'Hansen and Stock'
    clickElement('pel_m_080243', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080246');
    elementShouldBeEnabled('pel_m_080247');
    elementShouldBeEnabled('pel_m_080248');
    elementShouldBeEnabled('pel_m_080249');
    elementShouldBeEnabled('pel_m_080250');
    elementShouldBeEnabled('pel_m_080251');

    // 'Classification of diverticular disease (CDD)/S2k'
    clickElement('pel_m_080332', true, 'checkbox');
    elementShouldBeEnabled('pel_m_080334');
    elementShouldBeEnabled('pel_m_080335');
    elementShouldBeEnabled('pel_m_080336');
    elementShouldBeEnabled('pel_m_0803176');

    // 'Type 1: Acute, uncomplicated diverticulitis'
    clickElement('pel_m_080334', true, 'radio');
    elementShouldBeEnabled('pel_m_080430');
    elementShouldBeEnabled('pel_m_080431');

    // 'Type 2: Acute, complicated diverticulitis with phlegmonous reaction of surrounding tissue'
    clickElement('pel_m_080335', true, 'radio');
    elementShouldBeEnabled('pel_m_080432');
    elementShouldBeEnabled('pel_m_080433');
    elementShouldBeEnabled('pel_m_080434');

    // 'Type 3: Chronic diverticular disease; recurrent or persistent symptomatic diverticular disease'
    clickElement('pel_m_080336', true, 'radio');
    elementShouldBeEnabled('pel_m_080435');
    elementShouldBeEnabled('pel_m_080436');
    elementShouldBeEnabled('pel_m_080437');

    // 'Sigmoid carcinoma'
    clickElement('pel_m_080529');
    elementShouldBeEnabled('pel_m_080532');

    // 'Auto inflammatory diverticulitis'
    clickElement('pel_m_080530');
    elementShouldBeEnabled('pel_m_080532');

    // 'Auto inflammatory diverticulitis'
    clickElement('pel_m_080531');
    elementShouldBeEnabled('pel_m_080532');
  });
});
