using System.Text.RegularExpressions;
using RadioReport.Common.Module.Logic.Consts;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class RegexTests
    {
        [Theory]
        [InlineData("mam_m_010101", true)]
        [InlineData("mam_mx_010101", true)]
        [InlineData("mam_mx_0101011", true)]
        [InlineData("mam_m_0101012", true)]
        [InlineData("mam_m_0101012-1", true)]
        [InlineData("mam_m_0101012_1", true)]
        [InlineData("uni_ys_030310", true)]
        [InlineData("fra_070103-23", true)]
        [InlineData("uni_01_001", true)]
        [InlineData("uni_01_001_01", true)]
        [InlineData("Patient_FirstName", true)]
        [InlineData("mam_01_001", false)]
        [InlineData("simple_test", false)]
        [InlineData("ma_m_010101", false)]
        [InlineData("mam_1_010101", false)]
        [InlineData("mam_mxm_010101", false)]
        [InlineData("uni_ysa_030310", false)]
        [InlineData("mam_m_01010", false)]
        [InlineData("pro_070103", false)]
        public void RadioReportIdRegexInConditionTest(string testText, bool expectedResult)
        {
            // Arrange
            // Act
            var actualResult = Regex.IsMatch(testText, $"^{ReportConsts.RadioReportIdPattern}$");
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("mam_m_010101", true)]
        [InlineData("mam_mx_010101", true)]
        [InlineData("mam_mx_0101011", true)]
        [InlineData("uni_ys_030310", true)]
        [InlineData("fra_070103-23", true)]
        [InlineData("mam_mx_010101_1", true)]
        [InlineData("mam_m_010101:mam_m_L001", true)]
        [InlineData("<mam_m_010101:mam_m_L001>", true)]
        [InlineData("mam_m_0101012", true)]
        [InlineData("mam_m_0101012:mam_m_L001", true)]
        [InlineData("mam_m_0101012-1:mam_m_L001", true)]
        [InlineData("<mam_m_0101012>", true)]
        [InlineData("uni_01_001", true)]
        [InlineData("uni_01_001_01", true)]
        [InlineData("uni_01_001:mam_m_L001", true)]
        [InlineData("<uni_01_001>", true)]
        [InlineData("mam_01_001", false)]
        [InlineData("mam_mxm_010101", false)]
        [InlineData("uni_ysa_030310", false)]
        [InlineData("simple_test", false)]
        [InlineData("<mam_01_001>", false)]
        [InlineData("<simple_test>", false)]
        [InlineData("Patient_FirstName", true)]
        [InlineData("pro_070103", false)]
        public void RadioReportIdRegexInTextTest(string testText, bool expectedResult)
        {
            // Arrange
            // Act
            var actualResult = Regex.IsMatch(testText, $"^{ReportConsts.RadioReportIdInTextPattern}$");
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("[mam_m_010101:mam_m_L001|aaa]", true)]
        [InlineData("[mam_m_010101:mam_m_L001|aaa;mam_m_010102:mam_m_L001|bbb]", true)]
        [InlineData("[mam_m_010101:mam_m_L001|aaa,bbb,ccc;mam_m_010102:mam_m_L001|bbb,ddd]", true)]
        [InlineData("[mam_mx_010101:mam_mx_L001|aaa]", true)]
        [InlineData("[mam_mx_010101_1:mam_mx_L001|aaa]", true)]
        [InlineData("[mam_mx_010101-1:mam_mx_L001|aaa]", true)]
        [InlineData("[mam_mx_010101:mam_m_L001|aaa]", true)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa]", true)]
        [InlineData("[mam_m_010101:mam_m_L001|aaa,bbb]", true)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa,bbb]", true)]
        [InlineData("[mam_m_010101:mam_m_L001|]", false)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk,lll,mmm,nnn]", true)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa, bbb]", false)]
        [InlineData("[uni_01_001:mam_m_L001|aaa]", true)]
        [InlineData("[uni_01_001:mam_m_L001|aaa,bbb]", true)]
        [InlineData("[mam_m_L001|aaa,bbb]", true)]
        [InlineData("[mam_m_L0001|aaa,bbb]", false)]
        [InlineData("[mam_m_L0001|aaa,bbb;mam_m_0101012:mam_m_L001|aaa,bbb]", false)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa;]", false)]
        [InlineData("[mam_m_0101012:mam_m_L001|;]", false)]
        [InlineData("[mam_m_0101012:mam_m_L001|;mam_m_0101012:mam_m_L001]", false)]
        [InlineData("[mam_m_010101:L01|aaa]", false)]
        [InlineData("[mam_m_0101012:L01|aaa]", false)]
        [InlineData("[mam_m_010101:L01|aaa,bbb]", false)]
        [InlineData("[mam_m_0101012:L01|aaa,bbb]", false)]
        [InlineData("[uni_01_001:L01|aaa]", false)]
        [InlineData("[uni_01_001:L01|aaa,bbb]", false)]
        [InlineData("[mam_m_010101:mam_m_L001|aaa,]", false)]
        [InlineData("[mam_m_0101012:mam_m_L001|aaa,]", false)]
        [InlineData("[uni_01_001:mam_m_L001|aaa,]", false)]
        [InlineData("mam_m_010101:mam_m_L001|aaa", false)]
        [InlineData("mam_m_0101012:mam_m_L001|aaa", false)]
        [InlineData("mam_mx_0101012:mam_m_L001|aaa", false)]
        [InlineData("mam_mx_0101012:mam_mx_L001|aaa", false)]
        [InlineData("[mam_mxa_010101:mam_m_L001|aaa]", false)]
        [InlineData("[mam_mx_010101:mam_mxa_L001|aaa]", false)]
        [InlineData("mam_m_010101:mam_m_L001|aaa,bbb", false)]
        [InlineData("mam_m_0101012:mam_m_L001|aaa,bbb", false)]
        [InlineData("uni_01_001:mam_m_L001|aaa", false)]
        [InlineData("uni_01_001:mam_m_L001|aaa,bbb", false)]
        [InlineData("uni_01_001", false)]
        [InlineData("mam_01_001", false)]
        [InlineData("mam_m_010101", false)]
        [InlineData("mam_m_0101012", false)]
        [InlineData("uni_01_001:mam_m_L001", false)]
        [InlineData("uni_01_001:mam_m_L001;uni_01_001:mam_m_L001|aaa,ccc", false)]
        [InlineData("mam_01_001:mam_m_L001", false)]
        [InlineData("mam_m_010101:mam_m_L001", false)]
        [InlineData("mam_m_0101012:mam_m_L001", false)]
        [InlineData("Patient_FirstName", false)]
        [InlineData("simple_test", false)]
        public void SubstitutedLocalizerTest(string testText, bool expectedResult)
        {
            // Arrange
            // Act
            var actualResult = Regex.IsMatch(testText, $"^{ReportConsts.SubstitutedLocalizerPattern}$");
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("mam_m_L001", true)]
        [InlineData("mam_mx_L001", true)]
        [InlineData("mam_m_L1", false)]
        [InlineData("mam_m", false)]
        [InlineData("L001", false)]
        [InlineData("mam_m_L0012", false)]
        [InlineData("mam_mxa_L001", false)]
        [InlineData("simple_test", false)]
        public void LocalizerIdRegexTest(string testText, bool expectedResult)
        {
            // Arrange
            // Act
            var actualResult = Regex.IsMatch(testText, $"^{ReportConsts.LocalizerIdPattern}$");
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Theory]
        [InlineData("-F1", true)]
        [InlineData("-D1", true)]
        [InlineData("-F12", true)]
        [InlineData("-D12", true)]
        [InlineData("-F", false)]
        [InlineData("-D", false)]
        [InlineData("-F123", false)]
        [InlineData("-D123", false)]
        [InlineData("-A", false)]
        [InlineData("-A1", false)]
        [InlineData("-FA", false)]
        [InlineData("simple_test", false)]
        public void FindingPatternRegexTest(string testText, bool expectedResult)
        {
            // Arrange
            // Act
            var actualResult = Regex.IsMatch(testText, $"^{ReportConsts.RadioReportFindingPattern}$");
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }
    }
}
