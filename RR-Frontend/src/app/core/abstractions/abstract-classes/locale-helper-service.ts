export abstract class LocaleHelper {
  public static defaultLocaleId = 'en-US';
  public static implementedLocales = ['de', 'fr', LocaleHelper.defaultLocaleId];

  public static setCurrentLocale(localeId: string) {
    localStorage.setItem('__localeId', localeId);
  }

  public static getCurrentLocale(): string {
    const storedLocaleId = localStorage.getItem('__localeId');
    if (storedLocaleId == null) {
      let partialLocaleMatch = null;

      for (const id in LocaleHelper.implementedLocales) {
        if (LocaleHelper.implementedLocales.hasOwnProperty(id)) {
          const implemetedLocaleId = LocaleHelper.implementedLocales[id];
          if (navigator.language === implemetedLocaleId) {
            return implemetedLocaleId;
          } else if (navigator.language.startsWith(implemetedLocaleId)) {
            partialLocaleMatch = implemetedLocaleId;
          } else if (implemetedLocaleId.startsWith(navigator.language)) {
            partialLocaleMatch = implemetedLocaleId;
          }
        }
      }
      if (partialLocaleMatch != null) {
        return partialLocaleMatch;
      }
    }
    return storedLocaleId || this.defaultLocaleId;
  }
}
