import { IAppConfig, IServicesConfig } from '../../src/app/core/interfaces/configs';

/*

  click elements by RR-ID
  if role like 'radio' or 'checkbox' is specified ClickElements checks if checked directly
  check status of elements also in single functions

 */
export const clickElement = (items: string | string[], force = false, role?: string) => {
  const click = (id: string, f = false, r: string) =>
    r == null
      ? cy.get(`[rr-id=${id}]`).click({ force: f })
      : cy
          .get(`[rr-id=${id}] div[role=${r}]`)
          .click()
          .should('have.attr', 'aria-checked', 'true');
  Array.isArray(items) ? items.map(item => click(item, force, role)) : click(items, force, role);
};

export const buttonShouldBeEnabled = (RRIDs: string | string[]) => {
  const shouldBeEnabled = (id: string) => cy.byRRID(id).should('not.have.css', 'disabled', 'none');
  Array.isArray(RRIDs) ? RRIDs.map(RRID => shouldBeEnabled(RRID)) : shouldBeEnabled(RRIDs);
};

export const elementShouldBeEnabled = (RRIDs: string | string[]) => {
  const shouldBeEnabled = (id: string) => cy.byRRID(id).should('not.have.css', 'pointer-events', 'none');
  Array.isArray(RRIDs) ? RRIDs.map(RRID => shouldBeEnabled(RRID)) : shouldBeEnabled(RRIDs);
};

export const elementShouldBeDisabled = (RRIDs: string | string[]) => {
  const shouldBeDisabled = (id: string) => cy.byRRID(id).should('have.css', 'pointer-events', 'none');
  Array.isArray(RRIDs) ? RRIDs.map(RRID => shouldBeDisabled(RRID)) : shouldBeDisabled(RRIDs);
};

export const elementShouldBeValid = (RRIDs: string | string[]) => {
  const shouldBeValid = (id: string) => cy.byRRID(id).should('not.have.class', 'invalid');
  Array.isArray(RRIDs) ? RRIDs.map(RRID => shouldBeValid(RRID)) : shouldBeValid(RRIDs);
};

export const elementShouldBeInvalid = (RRIDs: string | string[]) => {
  const shouldBeInvalid = (id: string) => cy.byRRID(id).should('have.class', 'invalid');
  Array.isArray(RRIDs) ? RRIDs.map(RRID => shouldBeInvalid(RRID)) : shouldBeInvalid(RRIDs);
};

export const shadowElementShouldBeEnabled = (idParent: string, idEl: string | string[]) => {
  cy.byRRID(idParent)
    .shadowFind(`[rr-id="${idEl}"]`)
    .its('css')
    .should('not.have', 'pointer-events', 'none');
  Array.isArray(idEl) ? idEl.map(el => shadowElementShouldBeEnabled(idParent, el)) : shadowElementShouldBeEnabled(idParent, idEl);
};

export const shadowElementShouldBeDisabled = (idParent: string, idEl: string | string[]) => {
  cy.byRRID(idParent)
    .shadowFind(`[rr-id="${idEl}"]`)
    .its('css')
    .should('have', 'pointer-events', 'none');
  Array.isArray(idEl) ? idEl.map(el => shadowElementShouldBeDisabled(idParent, el)) : shadowElementShouldBeDisabled(idParent, idEl);
};

export const elementShouldBeChecked = (id: string) => {
  cy.byRRID(id)
    .find('div')
    .eq(2)
    .should('have.attr', 'aria-checked', 'true');
};

export const elementShouldHaveGivenState = (state: string, items: string | string[]) => {
  const checkState = (checked: string, id: string) =>
    cy.get(`[rr-id=${id}] div.ui-state-default`).should('have.attr', 'aria-checked', checked);
  Array.isArray(items) ? items.map(item => checkState(state, item)) : checkState(state, items);
};

export const elementShouldBeSelected = (state: boolean, items: string | string[]) => {
  const checkState = (selected: boolean, id: string) =>
    cy.get(`[rr-id=${id}] div.ui-state-default`).should('have.attr', 'aria-selected', selected);
  Array.isArray(items) ? items.map(item => checkState(state, item)) : checkState(state, items);
};

export const checkMandatoryGroup = (items: string[]) =>
  items.map(item => {
    clickElement(item, false);
    elementShouldHaveGivenState('true', item);
  });

/*

  used to select a part of a localizer

 */
export const selectLocalizerElement = (RRID: string, location: string, option: number, force?: boolean) =>
  cy
    .byRRID(RRID)
    .shadowFind(location)
    .eq(option)
    .click({ force });

export const selectLocalizerMultiple = (RRID: string, location: string, location1: string, option: number, option1: number) => {
  cy.byRRID(RRID)
    .shadowFind(location)
    .eq(option)
    .shadowFind(location1)
    .eq(option1)
    .shadowClick({ force: true });
};

/*

  select elements by role
  used for example for "I know" or "I describe" buttons

 */
export const selectElementByRadioRole = (value: number, force = false) => {
  cy.get('div[role=radio]')
    .eq(value)
    .should('be.not.checked')
    .click({ force });
};

/*

  select dropdown values
  6 functions

 */
export const selectFindingsDropdownOption = (
  RRID: string,
  element: string,
  option: number,
  forceDD = false,
  multipleDD = false,
  forceItem = false,
  multipleItem = false,
  dropdownNumber = 0
) =>
  cy.byRRID(RRID).within(() => {
    cy.get(element)
      .eq(dropdownNumber)
      .click({ multiple: multipleDD, force: forceDD });
    cy.get('.ui-dropdown-item')
      .eq(option)
      .click({ multiple: multipleItem, force: forceItem });
  });

export const selectDropdownOption = (id: string, option: number, force = false) =>
  cy
    .byRRID(id)
    .click({ force })
    .within(() => {
      cy.get('li')
        .eq(option)
        .click({ force });
    });

export const selectDropdownOptionOS = (id: string, option: number, multiple: boolean, force: boolean) =>
  cy.byRRID(id).within(() => {
    cy.get('.ui-dropdown-label').click({ multiple, force });
    cy.get('.ui-dropdown-item')
      .eq(option)
      .click({ multiple, force });
  });

export const selectDropdownMenuOption = (
  RRID: string,
  element: string,
  option: number,
  forceDD = false,
  multipleDD = false,
  forceItem = false,
  multipleItem = false,
  dropdownNumber = 0
) =>
  cy.byRRID(RRID).within(() => {
    cy.get(element)
      .eq(dropdownNumber)
      .click({ multiple: multipleDD, force: forceDD });
    cy.get('.ui-dropdown-item')
      .eq(option)
      .click({ multiple: multipleItem, force: forceItem });
  });

export const selectDropdownbyValue = (id: string, element: string, location: string, value: string) => {
  cy.byRRID(id)
    .find(element)
    .click();
  cy.get(location)
    .contains(value)
    .then(option => {
      cy.wrap(option).contains(value);
      option[0].click();
    });
};

export const selectDropdownDate = (id: string, option: number, op: number, force: boolean) =>
  cy.byRRID(id).within(() => {
    cy.get('.ui-dropdown-label')
      .eq(op)
      .click();
    cy.get('.ui-dropdown-item')
      .eq(option)
      .click({ force });
  });

/*

  used to handle input fields and check the value
  3 functions

 */
export const typeValueIntoInputField = (id: string, val: string) => {
  cy.byRRID(id).type(val);
};

export const typeValueIntoField = (id: string, value: string) =>
  cy.byRRID(id).within(() => {
    cy.get('input[type="text"]')
      .click()
      .type(value);
  });

export const checkInputFieldValue = (id: string, val: number) => {
  cy.byRRID(id).should('have.value', val);
};

/*

   handle and navigate between pages

 */
export const simulatePageRefresh = () => {
  cy.wait(2000);
  cy.get('.button-next').click();
  cy.get('.button-previous').click();
};

export const visitPageNumber = (page: number) => {
  cy.get('rr-top-navigation a')
    .contains(page)
    .click({ force: true });
};

/*

  set age of an patient in localization part

 */
export function patientAgeCalculation(patientAge) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const newDate = new Date(patientAge);
  const userYears = newDate.getFullYear();
  return currentYear - userYears;
}

/*

  set specific slider value and check this value
  3 functions

 */
export const selectSliderValueAndCheckIt = (RRID: string, index: number, val: number) => {
  cy.byRRID(RRID).within(() => {
    const settingValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    cy.get('input[type="range"]')
      .eq(index)
      .then($range => {
        const range = $range[0];
        settingValue.call(range, val);
        // @ts-ignore
        range.dispatchEvent(new Event('change', { value: val }));
      });
  });
  cy.byRRID(RRID)
    .find('input')
    .eq(1)
    .should('have.value', val);
};

/*

  used to get the config.json according to environment

 */
export function getAppConfig(): Cypress.Chainable<IAppConfig> {
  let config: IAppConfig;
  return getServicesConfig().then((servicesUrl: IServicesConfig) => {
    return cy.readFile(`src/assets/config/config.${Cypress.env('env')}.json`).then(content => {
      config = content as IAppConfig;
      config.servicesUrls = servicesUrl;
      return config;
    });
  });
}

function getServicesConfig(): Cypress.Chainable<IServicesConfig> {
  let servicesConfig: IServicesConfig;
  return cy.readFile(`src/assets/config/services-config.json`).then(content => {
    return (servicesConfig = content as IServicesConfig);
  });
}

/*
  check if Tab element is preselected

 */
export const tabPreselected = (idAttr: string, tabAttr: string) => {
  cy.get(tabAttr)
    .shadowFind(idAttr)
    .invoke('attr', 'aria-selected')
    .should('equal', 'true');
};

/*

  check value of input field

 */
export const inputFieldMinMaxCheck = (id: string, valueMin: string, valueMax: string) => {
  cy.get('rr-number-input')
    .shadowFind('.rr-number-input__input')
    .invoke('attr', 'min')
    .should('equal', valueMin);
  cy.byRRID(id)
    .type(valueMin)
    .clear();

  cy.get('rr-number-input')
    .shadowFind('.rr-number-input__input')
    .invoke('attr', 'max')
    .should('equal', valueMax);
  cy.byRRID(id).type(valueMax);
  elementShouldBeEnabled(id);
};

/*

  handle image upload

 */
export const uploadPreviewDeleteImage = () => {
  cy.get('rr-uploader')
    .shadowFind('input')
    .as('inputImage');
  cy.get('@inputImage').attachFile('sample.png');
  cy.get('rr-uploader')
    .shadowFind('.file-name')
    .contains('sample');

  // Preview uploaded image
  cy.get('.uploader-action-icons')
    .shadowFind('div:nth-child(1)')
    .click();
  cy.get('.image-dialog-container')
    .shadowFind('.image-dialog-close')
    .click();

  // Delete uploaded image
  cy.get('.uploader-action-icons')
    .shadowFind('div:nth-child(2)')
    .click();
  cy.get('.ui-dialog-content')
    .shadowFind('.dialog-button-confirm')
    .click({ force: true });
  cy.get('.uploader-container')
    .shadowFind('div')
    .should('have.class', 'label-bullet');
};
