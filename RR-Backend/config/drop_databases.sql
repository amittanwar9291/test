declare @command nvarchar(128)
declare @dbname nvarchar(128)

-- MODULES
set @dbname = N'RadioReport_AbdomenMRT'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
    begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
    end

set @dbname = N'RadioReport_HeadMRT'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
end

set @dbname = N'RadioReport_SpineCT'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
    begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
    end

set @dbname = N'RadioReport_AngiographyCT'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
    begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
    end


-- CORE
set @dbname = N'RadioReport_ImportInterface'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
end

set @dbname = N'RadioReport_LicenseManager'
IF (EXISTS(SELECT name
           FROM master.dbo.sysdatabases
           WHERE ('[' + name + ']' = @dbname OR name = @dbname)))
begin
        set @command = ('DROP DATABASE ' + @dbname)
        exec sp_executesql @command;
end


DELETE FROM RadioReport_ReportList.dbo.Reports 
WHERE ExaminationType != 'KneeMRT' AND ExaminationType != 'ShoulderMRT' AND ExaminationType != 'MammaMRT' AND ExaminationType != 'MammaMX' 
AND ExaminationType != 'CardioMRT' AND ExaminationType != 'ThoraxCT' AND ExaminationType != 'SpineMRT' AND ExaminationType != 'AngiographyMRT'
AND ExaminationType != 'HandMRT' AND ExaminationType != 'FeetMRT' AND ExaminationType != 'ElbowMRT' AND ExaminationType != 'HipMRT'
AND ExaminationType != 'PelvisMRT' AND ExaminationType != 'NeckMRT' AND ExaminationType != 'ThoraxMRT';