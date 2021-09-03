using System;
using System.Collections;
using System.Collections.Generic;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportSchemaSessionRepoGetTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111112"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Session = new ReportSchemaSession()
                    {
                        Id = new Guid("22222222-2222-2222-2222-222222222222"),
                        ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111112"),
                        UserName = "Test User",
                        LastActivity = DateTime.Now
                    }
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaSessionRepoUpdateTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111113"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Session = new ReportSchemaSession()
                    {
                        Id = new Guid("22222222-2222-2222-2222-222222222222"),
                        ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111113"),
                        UserName = "Test User",
                        LastActivity = DateTime.Now.AddHours(-1)
                    }
                },
                new ReportSchemaSession()
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111113"),
                    UserName = "Test User 2",
                    LastActivity = DateTime.Now
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaSessionRepoAddTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111114"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Session = new ReportSchemaSession()
                    {
                        Id = new Guid("22222222-2222-2222-2222-222222222222"),
                        ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111114"),
                        UserName = "Test User",
                        LastActivity = DateTime.Now
                    }
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
