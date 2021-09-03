using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Core.ExportInterface.Domain.Services;
using Xunit;

namespace RadioReport.Tests.ExportInterface
{
    public class ExportServiceTests
    {
        private readonly ExportService _classUnderTest;

        public ExportServiceTests()
        {
            _classUnderTest = new ExportService();
        }

        [Fact]
        public async Task FormatExport_ISolutionsFormatting_ProperResultReturned()
        {
            // Arrange
            const ExportFormatType formatType = ExportFormatType.iSolutions;
            const string reportHtml =
                @"<!-- <abc> -->section text1<!-- </abc> --><!-- <def> --><!-- <sub1> --><!-- <export-tag> -->bla<!-- <export-tag/> --><!-- <sub2> -->sub section text2<!-- </sub2> --><!-- </sub1> --><!-- </def> --><!-- <ghi> -->section text3<!-- </ghi> -->";
            const string languageCode = "de-DE";

            // Act
            _classUnderTest.FormatExport(formatType, reportHtml, languageCode);
        }
    }
}
