param(
$DBPrefix='',
$DBServer='localhost',
$ApplicationURL='localhost',
$KafkaBootstrapServer='localhost:9092',
$RedisServerPlaceholder='localhost:6379',
$SeqServerPlaceholder='http://localhost:5341',
$minio = 'localhost:9000',
$accessKey = 'accessKey',
$secretKey = 'secretKey',
$DeploymentFolder
)
 
if ($DBPrefix -ne '')
{
     $DBPrefix = $DBPrefix + '_';
}
 
$commonAppPath = $DeploymentFolder+'\*\appsettings.common.json'
$appPath = $DeploymentFolder+'\*\appsettings.json'
$webConfPath = $DeploymentFolder+'\*\web.config'
 
 Get-ChildItem $appPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'DBPrefix_', $DBPrefix }) |
     Set-Content $_
};
Get-ChildItem $appPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'DBServer', $DBServer }) |
     Set-Content $_
};
 
Get-ChildItem $appPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'ApplicationURL', $ApplicationURL }) |
     Set-Content $_
};

Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'KafkaBootstrapServer', $KafkaBootstrapServer }) |
     Set-Content $_
};
 
Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'RedisServerPlaceholder', $RedisServerPlaceholder }) |
     Set-Content $_
};

Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'SeqServerPlaceholder', $SeqServerPlaceholder }) |
     Set-Content $_
};

Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'minio:9000', $minio }) |
     Set-Content $_
};
 
Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'AccessKeyValue', $accessKey }) |
     Set-Content $_
};
 
Get-ChildItem $commonAppPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'SecretKeyValue', $secretKey }) |
     Set-Content $_
};
 
Get-ChildItem $webConfPath -Recurse | ForEach {
     (Get-Content $_ | ForEach  { $_ -replace 'InProcess', 'OutOfProcess' }) |
     Set-Content $_
};