using FluentValidation;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Validators.ReportGenerator
{
    public class TranslationValidator : AbstractValidator<Translation>
    {
        private const byte _languageCodeLength = 5;
        private const byte _languageCodeSeparatorIndex = 2;
        private const char _languageCodeSeparator = '-';
        public TranslationValidator()
        {
            RuleFor(t => t.LanguageCode).Must(c => !string.IsNullOrEmpty(c) &&
                                                   c.Length == _languageCodeLength &&
                                                   c[_languageCodeSeparatorIndex] == _languageCodeSeparator);
        }
    }
}
