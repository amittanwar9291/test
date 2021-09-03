using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System;
using System.Collections;
using System.Collections.Generic;

namespace RadioReport.Tests.Common.TestData
{
    public class ReportGenerationManagerTestData : IEnumerable<object[]>
    {
        private readonly List<object[]> _data = new List<object[]>
        {
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    ReportTypeName = "TestMRT",
                    VersionName = "Main",
                    Paragraphs =
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
                            Metadata =
                            {
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "discussion"
                                },
                                new Metadata()
                                {
                                    Key = "export-tag",
                                    Value = "patient data"
                                }
                            },
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    PageNumber = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Value: tes_m_010501"
                                        }
                                    },
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = "export-tag",
                                            Value = "impression"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Value: tes_m_010201"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 2,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Localizer tes_m_010202:tes_m_L001"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 3,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Numeric val: tes_m_020502"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty,
                                            ChildLines =
                                            {
                                                new Line
                                                {
                                                    LevelOrder = 1,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "Is greater than three"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = "tes_m_020502;>;3",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "3"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 2,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "Is less than three"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = "tes_m_020502;<;3",
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.ShowInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "1"
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 3,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 2"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        },
                                                                        Metadata =
                                                                        {
                                                                            new Metadata()
                                                                            {
                                                                                Key = ReportConsts.ICD10Key,
                                                                                Value = "testTabICD10-1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "\\bCol3-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 2,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 3,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row3"
                                                                            }
                                                                        },
                                                                        Metadata =
                                                                        {
                                                                            new Metadata()
                                                                            {
                                                                                Key = ReportConsts.ICD10Key,
                                                                                Value =
                                                                                    "testTabICD10-2, testTabICD10-3,testTabICD10-2,     testTabICD10-3"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col3-row3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 4,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = false,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 2"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "\\bCol3-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 2,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 3,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row3"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col3-row3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 5,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = false,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "\\bCol3-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 2,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = " "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 3,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row3"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col3-row3"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 6,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = false,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "   "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "tes_m_111111"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col2-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "\\bCol3-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 7,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = string.Empty
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "   "
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "tes_m_111111"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col2-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 3,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "\\bCol3-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 8,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1
                                                            }
                                                        }
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 9,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1"
                                                    }
                                                },
                                                new Line
                                                {
                                                    LevelOrder = 10,
                                                    Translations =
                                                    {
                                                        new Translation
                                                        {
                                                            LanguageCode = "de-DE",
                                                            Text = "abc"
                                                        }
                                                    },
                                                    Metadata =
                                                    {
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.OnlyInSummaryKey,
                                                            Value = ReportConsts.TrueValue
                                                        },
                                                        new Metadata()
                                                        {
                                                            Key = ReportConsts.PriorityKey,
                                                            Value = "2"
                                                        }
                                                    },
                                                    InFixCondition = string.Empty,
                                                    PostFixCondition = string.Empty,
                                                    Table = new Table()
                                                    {
                                                        HasHeader = true,
                                                        Name = "Table 1",
                                                        Rows =
                                                        {
                                                            new TableRow()
                                                            {
                                                                Order = 0,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col 2"
                                                                            }
                                                                        },
                                                                        Metadata =
                                                                        {
                                                                            new Metadata()
                                                                            {
                                                                                Key = ReportConsts.ICD10Key,
                                                                                Value = "icd10inSummary"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 1,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row1"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col2-row1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            new TableRow()
                                                            {
                                                                Order = 2,
                                                                Columns =
                                                                {
                                                                    new TableCell()
                                                                    {
                                                                        Order = 1,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col1-row2"
                                                                            }
                                                                        }
                                                                    },
                                                                    new TableCell()
                                                                    {
                                                                        Order = 2,
                                                                        Translations =
                                                                        {
                                                                            new Translation
                                                                            {
                                                                                LanguageCode = "de-DE",
                                                                                Text = "Col2-row2"
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
                                    }
                                }
                            }
                        },
                        new Paragraph
                        {
                            Name = "Title 2",
                            Order = 2,
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Example translation"
                                        }
                                    },
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = "export-tag",
                                            Value = "findings"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            PageNumber = 1,
                                            FindingType = "TestFindingA",
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Test tes_m_010301"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 2,
                                            PageNumber = 2,
                                            FindingType = "TestFindingA",
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Test tes_m_010301"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 3,
                                            PageNumber = 1,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Test table:"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 4,
                                            PageNumber = 1,
                                            FindingType = "TestFindingA",
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "\\table"
                                                }
                                            },
                                            Table = new Table()
                                            {
                                                HasHeader = true,
                                                Rows =
                                                {
                                                    new TableRow()
                                                    {
                                                        Order = 0,
                                                        Columns =
                                                        {
                                                            new TableCell()
                                                            {
                                                                Order = 1,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Col 1"
                                                                    }
                                                                }
                                                            },
                                                            new TableCell()
                                                            {
                                                                Order = 2,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Col 2"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    new TableRow()
                                                    {
                                                        Order = 1,
                                                        Columns =
                                                        {
                                                            new TableCell()
                                                            {
                                                                Order = 1,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Col1-row1 tes_m_010301"
                                                                    }
                                                                }
                                                            },
                                                            new TableCell()
                                                            {
                                                                Order = 2,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "\\bCol2-row1"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    new TableRow()
                                                    {
                                                        Order = 2,
                                                        Columns =
                                                        {
                                                            new TableCell()
                                                            {
                                                                Order = 1,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Col1-row2 \\n newline"
                                                                    }
                                                                }
                                                            },
                                                            new TableCell()
                                                            {
                                                                Order = 2,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Col2-row2"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 5,
                                            PageNumber = 1,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Table ended \\n"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 6,
                                            PageNumber = 1,
                                            FindingType = "TestFindingB",
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Test tes_m_010301"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        }
                                    }
                                }
                            }
                        },                       
                        new Paragraph
                        {
                            Order=3,
                            Name="Special characters",
                            Lines=
                            {

                                new Line
                                {
                                    LevelOrder = 1,
                                    PageNumber = 1,

                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Special characters: tes_m_0105013"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = "tes_m_0105013;NOT EMPTY;"
                                }
                            }
                        },
                        new Paragraph()
                        {
                            Order=4,
                            Name="Report rating",
                            Lines=
                            {

                                new Line
                                {
                                    LevelOrder = 1,
                                    PageNumber = 1,
                                    Metadata =
                                    {
                                         new Metadata()
                                        {
                                            Key = ReportConsts.ReportRatingKey,
                                            Value = "3"
                                        },
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty
                                },
                                new Line
                                {
                                    LevelOrder = 2,
                                    PageNumber = 1,

                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Test not setting rating"
                                        }
                                    },
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = ReportConsts.ReportRatingKey,
                                            Value = "4"
                                        },
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = "tes_m_0105013; EMPTY;"
                                },
                                new Line
                                {
                                    LevelOrder = 3,
                                    PageNumber = 1,                                   
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            //trying to set smaller rating
                                            Key = ReportConsts.ReportRatingKey,
                                            Value = "2"
                                        },
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty
                                },
                                new Line
                                {
                                    LevelOrder = 4,
                                    PageNumber = 1,

                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Rating condition test"
                                        }
                                    },
                                    
                                    InFixCondition = string.Empty,
                                    PostFixCondition = "report-rating;=;3"
                                }


                            }
                        },
                        new Paragraph()
                        {
                            Order = 5,
                            Name = "Summary & ICD-10",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Summary:\\n"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty,
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = "sentence-type",
                                            Value = "title"
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.SummaryEditTitleKey,
                                            Value = ReportConsts.TrueValue
                                        }
                                    }
                                },
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 2,

                                    LineSeparator = ".\\a",
                                    PageNumber = 0,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = string.Empty
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty
                                },
                                new Line
                                {
                                    Name = ReportConsts.ICD10SentenceName,
                                    LevelOrder = 3,

                                    PageNumber = 0,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = string.Empty
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty
                                }
                            }
                        }
                    }
                },
                new ReportResult()
                {
                    ReportTypeName = "TestMRT",
                    IsLocalizer = false,
                    IsICD10 = true,
                    IsReferenceImage = false,
                    ReportSummary = new List<ReportSummaryModel>()
                    {
                        new ReportSummaryModel()
                        {
                            Order = 1,
                            PageNumber = 1,
                            Priority = "3_1_1",
                            Translations = new List<ReportSummaryTextModel>()
                            {
                                new ReportSummaryTextModel()
                                {
                                    Lang = "de-DE",
                                    ActualTextLang = "de-DE",
                                    Text = "Is greater than three "
                                }
                            },
                            IsAddedByUser = false
                        }
                    }
                },
                "de-DE",
                new List<RadioReportValue>
                {
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010501",
                        TypeName = "System.String",
                        Value = "MyValue",
                        TranslationKey = "String_MyValue_MyTranslation",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_020502",
                        TypeName = "System.Int32",
                        Value = "5",
                        TranslationKey = "Int32_5",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010201",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.NormalDropdownEnum",
                        Value = "Selected",
                        TranslationKey = "NormalDropdownEnum_Selected",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010202",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.NormalDropdownEnum",
                        Value = "LOC1, LOC2",
                        TranslationKey = "NormalDropdownEnum_LOC1, NormalDropdownEnum_LOC2",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010301-F1",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Finding.Enums.TestFindingType",
                        Value = "TestFindingA",
                        TranslationKey = "TestFindingType_TestFindingA",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010301-F2",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Finding.Enums.TestFindingType",
                        Value = "TestFindingA",
                        TranslationKey = "TestFindingType_TestFindingA",
                        CollectionItemType = "TestFindingA"
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_0105013",
                        TypeName = "System.String",
                        Value = "Test#;|",
                        TranslationKey = "String_MyValue_MyTranslation",
                        CollectionItemType = string.Empty
                    },
                },
                new List<FindingLocalizer>(),
                "<!-- <export-tag=discussion> -->" +
                "<!-- <export-tag=patient data> -->" +
                "<!-- <export-tag=impression> -->" +
                "<span page=\"1\">Value: MyValue Value: Selected Localizer  Numeric val: 5 Is greater than three " +
                "<table class=\"report-table\">" +
                "<tr><th>Col 1</th><th>Col 3</th></tr>" +
                "<tr><td>Col1-row1</td><td><strong page=\"1\">Col3-row1</strong></td></tr>" +
                "<tr><td>Col1-row3</td><td>Col3-row3</td></tr>" +
                "</table> " +
                "<table class=\"report-table\">" +
                "<tr><td>Col 1</td><td>Col 2</td><td>Col 3</td></tr>" +
                "<tr><td>Col1-row1</td><td> </td><td><strong page=\"1\">Col3-row1</strong></td></tr>" +
                "<tr><td>Col1-row3</td><td></td><td>Col3-row3</td></tr>" +
                "</table> " +
                "<table class=\"report-table\">" +
                "<tr><td>Col 1</td><td>Col 3</td></tr>" +
                "<tr><td>Col1-row1</td><td><strong page=\"1\">Col3-row1</strong></td></tr>" +
                "<tr><td>Col1-row3</td><td>Col3-row3</td></tr>" +
                "</table> " +
                "<table class=\"report-table\">" +
                "<tr><td>Col1-row1</td><td>Col2-row1</td><td><strong page=\"1\">Col3-row1</strong></td></tr>" +
                "</table> " +
                "<table class=\"report-table\">" +
                "<tr><th></th><th>   </th><th></th></tr>" +
                "<tr><td>Col1-row1</td><td>Col2-row1</td><td><strong page=\"1\">Col3-row1</strong></td></tr>" +
                "</table> " +
                "<table class=\"report-table\"><tr></tr></table> " +
                "abc " +
                "</span>" +
                "<!-- </export-tag=impression> -->" +
                "<!-- </export-tag=patient data> -->" +
                "<!-- </export-tag=discussion> -->" +
                "<!-- <export-tag=findings> -->" +
                "<span>Example translation Test TestFindingA Test TestFindingA " +
                "Test table: <table class=\"report-table\">" +
                "<tr><th>Col 1</th><th>Col 2</th></tr>" +
                "<tr><td>Col1-row1 TestFindingA</td><td><strong>Col2-row1</strong></td></tr>" +
                "<tr><td>Col1-row2 <br/> newline</td><td>Col2-row2</td></tr>" +
                "</table> <table class=\"report-table\">" +
                "<tr><th>Col 1</th><th>Col 2</th></tr>" +
                "<tr><td>Col1-row1 TestFindingA</td><td><strong>Col2-row1</strong></td></tr>" +
                "<tr><td>Col1-row2 <br/> newline</td><td>Col2-row2</td></tr>" +
                "</table> Table ended <br/> </span>" +
                "<!-- </export-tag=findings> -->" +
                "<span page=\"1\">Special characters: Test#;| </span>" +
                "<span page=\"1\">Rating condition test </span>" +
                "<span></span>" +               
                "<span id=\"summary-title\"><!-- <sentence-type=title> -->Summary:<!-- </sentence-type=title> --></span>" +
                "<span><br/> </span>" +
                "<span page=\"1\"><br/>Is greater than three abc " +
                "</span>" +               
                "<span><br/>testTabICD10-2, testTabICD10-3, icd10inSummary</span>"                
            },
            new object[]
            {
                new ReportSchema
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    VersionName = "Main",
                    ReportTypeName = "TestMRT",
                    Paragraphs =
                    {
                        new Paragraph
                        {
                            Name = "Title",
                            Order = 1,
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
                                    PageNumber = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Value: tes_m_010501"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty,
                                    ChildLines =
                                    {
                                        new Line
                                        {
                                            LevelOrder = 1,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Localizer tes_m_010202:tes_m_L001"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 2,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "\\table"
                                                }
                                            },
                                            Table = new Table()
                                            {
                                                HasHeader = true,
                                                Rows =
                                                {
                                                    new TableRow()
                                                    {
                                                        Order = 0,
                                                        Columns =
                                                        {
                                                            new TableCell()
                                                            {
                                                                Order = 1,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "Loc"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    new TableRow()
                                                    {
                                                        Order = 1,
                                                        Columns =
                                                        {
                                                            new TableCell()
                                                            {
                                                                Order = 1,
                                                                Translations =
                                                                {
                                                                    new Translation
                                                                    {
                                                                        LanguageCode = "de-DE",
                                                                        Text = "tes_m_010202"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 3,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Localizer tes_m_010203:tes_m_L001"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty,
                                            Metadata =
                                            {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.ShowInSummaryKey,
                                                    Value = ReportConsts.TrueValue
                                                }
                                            }
                                        },
                                        new Line
                                        {
                                            LevelOrder = 4,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "tes_m_L002"
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 5,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Localizer tes_m_010202:tes_m_L001"
                                                }
                                            },
                                            Metadata = {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.FontKey,
                                                    Value = ReportConsts.FontSmallValue
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        },
                                        new Line
                                        {
                                            LevelOrder = 6,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "Localizer tes_m_010202:tes_m_L001 in the middle"
                                                }
                                            },
                                            Metadata = {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.FontKey,
                                                    Value = ReportConsts.FontSmallValue
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        }
                                        ,
                                        new Line
                                        {
                                            LevelOrder = 7,
                                            Translations =
                                            {
                                                new Translation
                                                {
                                                    LanguageCode = "de-DE",
                                                    Text = "tes_m_010202:tes_m_L001 Localizer at the beginning"
                                                }
                                            },
                                            Metadata = {
                                                new Metadata()
                                                {
                                                    Key = ReportConsts.FontKey,
                                                    Value = ReportConsts.FontSmallValue
                                                }
                                            },
                                            InFixCondition = string.Empty,
                                            PostFixCondition = string.Empty
                                        }                    
                                    }
                                }
                            }
                        },
                        new Paragraph()
                        {
                            Order = 2,
                            Name = "Rating",
                            Lines =
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = " Default rating test"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = "report-rating;=;1",
                                }
                            }
                        },
                        new Paragraph()
                        {
                            Order = 3,
                            Name = "Summary",
                            Lines = 
                            {
                                new Line
                                {
                                    LevelOrder = 1,
                                    Translations =
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = "Summary:\\n"
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty,
                                    Metadata =
                                    {
                                        new Metadata()
                                        {
                                            Key = "sentence-type",
                                            Value = "title"
                                        },
                                        new Metadata()
                                        {
                                            Key = ReportConsts.SummaryEditTitleKey,
                                            Value = ReportConsts.TrueValue
                                        }
                                    }
                                },
                                new Line
                                {
                                    Name = ReportConsts.SummarySentenceName,
                                    LevelOrder = 2,

                                    LineSeparator = ".\\a",
                                    PageNumber = 0,
                                    Translations = 
                                    {
                                        new Translation
                                        {
                                            LanguageCode = "de-DE",
                                            Text = string.Empty
                                        }
                                    },
                                    InFixCondition = string.Empty,
                                    PostFixCondition = string.Empty
                                }
                            }
                        }
                    }
                },
                new ReportResult()
                {
                    ReportTypeName = "TestMRT",
                    IsLocalizer = true,
                    IsICD10 = true,
                    IsReferenceImage = false
                },
                "de-DE",
                new List<RadioReportValue>
                {
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010501",
                        TypeName = "System.String",
                        Value = "MyValue",
                        TranslationKey = "String_MyValue_MyTranslation",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010202",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.NormalDropdownEnum",
                        Value = "LOC1, LOC2",
                        TranslationKey = "NormalDropdownEnum_LOC1, NormalDropdownEnum_LOC2",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010203",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.NormalDropdownEnum",
                        Value = "None",
                        TranslationKey = "NormalDropdownEnum_None",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010204",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.TestLocalizer",
                        Value = "None",
                        TranslationKey = "TestLocalizer_Test1, TestLocalizer_Test2",
                        CollectionItemType = string.Empty
                    },
                    new RadioReportValue
                    {
                        RadioReportId = "tes_m_010205",
                        TypeName =
                            "RadioReport.Common.Module.Tests.DomainTests.ReportGenerator.TestModel.Enums.TestLocalizer",
                        Value = "None",
                        TranslationKey = "TestLocalizer_Test2",
                        CollectionItemType = string.Empty
                    }
                },
                new List<FindingLocalizer>()
                {
                    new FindingLocalizer()
                    {
                        Code = "tes_m_L001",
                        Mapping = "LOC1,LOC2,LOC3,LOC4",
                        Content =
                            "<svg><g class=\"test CHK00\"> abc </g><g class=\"test CHK01\"> abc </g><g class=\"test CHK02\"> abc </g><g class=\"test CHK03\"> abc </g></svg>"
                    },
                    new FindingLocalizer()
                    {
                        Code = "tes_m_L002",
                        Mapping = "Test1,Test2",
                        Content =
                            "<svg><g class=\"test CHK00\"> color: %color% %color-name% </g><g class=\"test CHK01\"> %title% </g></svg>"
                    }
                },
                "<!-- <export-tag=discussion> -->" +
                "<span page=\"1\">Value: MyValue Localizer </span>" +
                "<div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg style =\"margin-right: 10px;\">" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +              
                "<span page=\"1\"> <table class=\"report-table\">" +
                "<tr><th>Loc</th></tr><tr><td>LOC1, LOC2</td></tr></table> " +
                "Localizer </span>" +
                "<div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg style =\"margin-right: 10px;\">" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +
                "<div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg>" +
                    "<g class=\"test checked\"> color: #111111 black </g>" +
                    "<g class=\"test checked\"> TestTitle / Test1 </g>" +
                "</svg>" +
                "<svg>" +
                    "<g class=\"test unchecked\"> color: #222222 gray </g>" +
                    "<g class=\"test checked\"> TestTitle / Test2 </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +
                 "<span page=\"1\" class=\"font-small\">Localizer </span><div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg style =\"margin-right: 10px;\">" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +
                "<span page=\"1\" class=\"font-small\">Localizer </span><div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg style =\"margin-right: 10px;\">" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +
                "<span page=\"1\" class=\"font-small\"> in the middle </span>" +
                "<div loc page=\"1\" style=\"white-space: nowrap;\">" +
                "<svg style =\"margin-right: 10px;\">" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test checked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                    "<g class=\"test unchecked\"> abc </g>" +
                "</svg>" +
                "</div loc page=\"1\">" +
                "<span page=\"1\" class=\"font-small\"> Localizer at the beginning </span>" +               
                "<!-- </export-tag=discussion> -->" +
                "<span> Default rating test </span>" +
                "<span></span>" +
                "<span id=\"summary-title\"><!-- <sentence-type=title> -->Summary:<!-- </sentence-type=title> --></span>" +
                "<span><br/> </span>" +
                "<span page=\"1\"><br/>Localizer  </span>"
            }
        };

        public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

    public class TestReportGenerationManager : ReportGenerationManager
    {
        public TestReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator)
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "tes_m_L002",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        Rrid = "tes_m_010204",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "tes_m_010204",
                            TranslationKey = "LocalizerTitle_Test1",
                            TypeName = "Localizer",
                            Value = "Test1"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "tes_m_010204",
                            TranslationKey = "LocalizerTitle_TestTitle",
                            TypeName = "Localizer",
                            Value = "TestTitle"
                        },
                        ColorName = "black",
                        ColorHash = "#111111",
                        PictureCode = "tes_m_L002",
                        TitleFormat = "%T% / %ST%"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "tes_m_010205",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "tes_m_010205",
                            TranslationKey = "LocalizerTitle_Test2",
                            TypeName = "Localizer",
                            Value = "Test2"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "tes_m_010205",
                            TranslationKey = "LocalizerTitle_TestTitle",
                            TypeName = "Localizer",
                            Value = "TestTitle"
                        },
                        ColorName = "gray",
                        ColorHash = "#222222",
                        PictureCode = "tes_m_L002",
                        TitleFormat = "%T% / %ST%"
                    }
                }
            },
        };
    }
}