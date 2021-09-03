using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class FindingLocalizerManagerTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] // case with no background from minio
            {
               "L001",
               false,
               new FindingLocalizer
               {
                   Code = "L001",
                   Content = "<?xml version='1.0' encoding='utf-8'?> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <defs> <pattern id='pattern-knee-cross'> <image preserveAspectRatio='xMidYMid slice' width='277' height='277' xlink:href='assets/img/kneeMRT/knee-cross.png' /> </pattern> </svg>"
               },
               new FindingLocalizer
               {
                   Code = "L001",
                   Content = "<?xml version='1.0' encoding='utf-8'?> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <defs> <pattern id='pattern-knee-cross'> <image preserveAspectRatio='xMidYMid slice' width='277' height='277' xlink:href='assets/img/kneeMRT/knee-cross.png' /> </pattern> </svg>"
               },
               null,
               null
            },
            new object[] // case with background from minio
            {
               "L002",
               true,
               new FindingLocalizer
               {
                   Code = "L002",
                   Content = "<?xml version='1.0' encoding='utf-8'?> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <defs> <pattern id='pattern-knee-cross'> <image preserveAspectRatio='xMidYMid slice' width='277' height='277' xlink:href='assets/img/kneeMRT/knee-cross.png' /> </pattern> </svg>"
               },
               new FindingLocalizer
               {
                   Code = "L002",
                   Content = "<?xml version='1.0' encoding='utf-8'?> <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <defs> <pattern id='pattern-knee-cross'> <image preserveAspectRatio='xMidYMid slice' width='277' height='277' xlink:href='data:image/png;base64,AQEB' /> </pattern> </svg>"
               },
               "img/kneeMRT/knee-cross.png",
               new byte [] {1, 1, 1} // should equal to AQEB in base64
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
