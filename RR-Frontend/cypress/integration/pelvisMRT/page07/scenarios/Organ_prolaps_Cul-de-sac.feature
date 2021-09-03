Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select 'MRI pelvic floor' radio button from Page 01 of Pelvic MRI
And 'Dynamic' checkbox
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Organ prolaps'  from the dropdown
Then 'Add new finding' button is enabled
And 'Anterior compartment' tab is preselected

When I select 'Cul-de-sac' tab
Then 'Enterocele' checkbox is enabled
And 'Peritoneocele' checkbox is enabled
And 'Sigmoidocele' checkbox is enabled

When I select 'Enterocele' checkbox
Then 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

And 'Incarceration' checkbox is enabled
And 'Failure of passage' checkbox is enabled
And 'Perieneric free fluid' checkbox is enabled
And 'Perineal hernia' checkbox is enabled

When I select 'Peritoneocele' checkbox
Then 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

And 'Free fluid/Ascites' checkbox is enabled
And 'Edema' checkbox is enabled

When I select 'Sigmoidocele' checkbox
Then 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

And 'Incarceration' checkbox is enabled
And 'Failure of passage' checkbox is enabled
And 'Perisigmoidal fluid' checkbox is enabled

