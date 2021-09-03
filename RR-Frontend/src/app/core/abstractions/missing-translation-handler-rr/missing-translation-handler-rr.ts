import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class MissingTranslationHandlerRR implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    const key = 'Default';
    return params.interpolateParams ? params.interpolateParams[key] : params.key;
  }
}
