Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select 'MRI pelvic floor' radio button from Page 01 of Pelvic MRI
And 'Dynamic' checkbox
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Organ prolaps' from the dropdown
Then 'Add new finding' button is enabled

And 'Anorectal angle' checkbox is enabled
And 'Absent physiological pelvic floor descent at defecation' checkbox is enabled
And 'Emphasized puborectalis muscle' checkbox is enabled
And 'Delayed defecation' checkbox is enabled
And 'Incomplete rectal evacuation' checkbox is enabled

When I select 'Anorectal angle' checkbox
Then 'At rest' input field is enabled
And 'Reduction of the anorectal angle during pressing' auto-filled input field is enabled
And 'Opening of the anorectal angle at defecation' auto-filled input field is enabled

When I enter '108' in 'At Rest' input field
Then 'While pressing*' input filed is enabled

When I enter '127' in 'At Rest' input field
Then 'While pressing*' input filed is enabled

When I enter '15' in 'While pressing*' input filed
Then in 'Reduction of the anorectal angle during pressing' input field '112' is displayed
And 'During defecation*' input field is enabled

When I enter '20' in 'While pressing*' input filed
Then in 'Reduction of the anorectal angle during pressing' input field '107' is displayed
And 'During defecation*' input field is enabled

When I enter '15' in 'During defecation*' input field
Then in 'Opening of the anorectal angle at defecation' input field '112' is displayed

When I enter '20' in 'During defecation*' input field
Then in 'Opening of the anorectal angle at defecation' input field '107' is displayed

When I select 'Delayed defecation' checkbox
Then 'Increased interval between anal canal opening and start of defecation' is enabled

