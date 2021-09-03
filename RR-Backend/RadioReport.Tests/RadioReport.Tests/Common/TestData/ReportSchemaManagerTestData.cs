using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using RadioReport.Common.Consts;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportSchemaManagerAddTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "mam_m_040107 == 0",
                                    PostFixCondition = "mam_m_040107 0 ==",
                                    PageNumber = 0,
                                    Metadata = 
                                    {
                                        new Metadata()
                                        {
                                            Key = "ICD",
                                            Value = "25"
                                        },
                                        new Metadata()
                                        {
                                            Key = "ABC-2",
                                            Value = "test text"
                                        }
                                    },
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations = 
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                    Text = "Example translation2"
                                                }
                                            },
                                            InFixCondition = "a == 0",
                                            PostFixCondition = "a 0 =="
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            },
            new object[] {
                new ReportSchema
                {
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaManagerUpdateTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "mam_m_040107 == 0",
                                    PostFixCondition = "mam_m_040107 0 ==",
                                    PageNumber = 0,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations = 
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                    Text = "Example translation2"
                                                }
                                            },
                                            InFixCondition = "a == 0",
                                            PostFixCondition = "a 0 ==",
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    IsDeleted = true,
                                                    Translations = 
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                            Text = "Example translation2"
                                                        }
                                                    },
                                                    InFixCondition = "a == 0",
                                                    PostFixCondition = "a 0 ==",
                                                    Metadata = 
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = "ICD",
                                                            Value = "25"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = "ABC-2",
                                                            Value = "test text"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            },
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),  
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportSchemaManagerUpdateBadSessionTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1,
                            Metadata = 
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                }
                            },
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                            Text = "Example translation"
                                        }
                                    },
                                    InFixCondition = "mam_m_040107 == 0",
                                    PostFixCondition = "mam_m_040107 0 ==",
                                    PageNumber = 0,
                                    ChildLines = 
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations = 
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                    Text = "Example translation2"
                                                }
                                            },
                                            InFixCondition = "a == 0",
                                            PostFixCondition = "a 0 ==",
                                            ChildLines = 
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    IsDeleted = true,
                                                    Translations = 
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = Thread.CurrentThread.CurrentCulture.Name,
                                                            Text = "Example translation2"
                                                        }
                                                    },
                                                    InFixCondition = "a == 0",
                                                    PostFixCondition = "a 0 ==",
                                                    Metadata = 
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = "ICD",
                                                            Value = "25"
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = "ABC-2",
                                                            Value = "test text"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("11111111-1111-1111-1111-111111111111"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                }
            },
            new object[] {
                new ReportSchema
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                },
                new ReportSchemaSession()
                {
                    ReportSchemaId = new Guid("22222222-2222-2222-2222-222222222222"),
                    UserName = "Test User",
                    LastActivity = DateTime.Now
                },
                null
            }
        };
        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportsSchemaManagerRemoveTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[] 
            { 
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = false,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportsSchemaManagerRemoveDefaultTestOneData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class ReportsSchemaManagerRemoveDefaultTestTwoData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main",
                    BuildVersion = 0,
                    IsDefault = true,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                },
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111112"),
                    ReportTypeName = ReportTypeNames.HipMRT,
                    VersionName = "Main2",
                    BuildVersion = 0,
                    IsDefault = false,
                    Paragraphs = 
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order  = 1
                        }
                    }
                }
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
