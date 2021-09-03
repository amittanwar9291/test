using FluentValidation;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using System.Linq;

namespace RadioReport.Common.Module.Logic.Validators.ReportGenerator
{
    public class MetadataValidator : AbstractValidator<Metadata>
    {
        public MetadataValidator()
        {
            RuleFor(p => p.Key).Must(id => 
                !string.IsNullOrEmpty(id)
                && !id.Any(char.IsWhiteSpace)
                && id.Length <= 50);
        }
    }
}
