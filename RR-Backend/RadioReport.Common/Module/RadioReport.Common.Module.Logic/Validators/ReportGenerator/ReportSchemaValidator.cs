using FluentValidation;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Common.Module.Logic.Validators.ReportGenerator
{
    public class ReportSchemaValidator : AbstractValidator<ReportSchema>
    {
        public ReportSchemaValidator()
        {
            RuleFor(r => r.ReportTypeName).Must(name => !string.IsNullOrEmpty(name));
            RuleForEach(r => r.Paragraphs).SetValidator(new ParagraphValidator());
        }
    }
}
